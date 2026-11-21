# Docker and CI/CD

Based on Luxcare: PRs validate the build; pushes to develop/production build an
image on GHCR and deploy via SSH. Deployments use the exact commit SHA image tag.

## Local Docker

```sh
cp .env.example .env
docker compose up -d --build --wait
```

Before starting, replace `ADMIN_PASSWORD` and `SESSION_SECRET` in `.env` with
strong, unique values. Open http://localhost:3010 and use `/admin` to manage
news, courses, schedules, and library content. `ADMIN_USERNAME` and `ADMIN_PASSWORD` are
used to seed the administrator when that username does not exist in the database.

Set PORT in .env and rerun Compose to change the host port. Missing PORT or an
empty PORT defaults to 3010. Shell variables have priority over .env. The Node
application listens on port 3013 inside the container and serves both the Vite
build and `/api`. For local development, run `npm run dev:api` and `npm run dev`
in two terminals; Vite uses `PORT`, while the API uses `API_PORT=3013`.

Admin accounts and content are stored in the shared MongoDB instance on the VPS.
Compose starts only the application; it does not create or manage MongoDB.
Set `MONGODB_URI`, `MONGODB_USER`, `MONGODB_PASSWORD`, and
`MONGODB_AUTH_SOURCE` in `.env` before starting. The URI must use an address
reachable from the application container and include the application's database
name, for example `mongodb://<mongo-host>:27017/ocean_ldp`. Inside the container,
`localhost` refers to the application container, not the VPS. If MongoDB runs in
another Docker stack, connect both services to a shared Docker network before
using its service name. Database backups are managed with the shared MongoDB instance.

Compose joins the existing external network `default_network`, matching the ERP
deployment. It does not create a network. Verify the existing network on the VPS:

```sh
docker network inspect default_network
```

The shared MongoDB container and the app must both belong to this network.
Use `MONGODB_URI=mongodb://mongodb:27017/ocean_ldp` with the
appropriate database name and existing credentials. Keep the MongoDB host port
bound to `127.0.0.1`; containers communicate directly over the shared network.
Also declare this external network on the MongoDB service in its own deployment
configuration so the attachment survives container recreation. Then deploy the app.
`EAI_AGAIN mongodb` indicates a hostname lookup failure; verify that both containers
are attached using `docker network inspect default_network`.

The admin account is inserted into the `admin_accounts` collection only when
that username does not exist. Changing `ADMIN_PASSWORD` later does not overwrite
an existing password hash.

## GitHub repository secrets and variables

The deploy job uses the `staging` GitHub Environment for the `develop` branch and
the `production` GitHub Environment for the `production` branch. Configure the
SSH values below as repository secrets or secrets in the matching Environment:

| Staging (develop) | Production (production) | Value |
| --- | --- | --- |
| SSH_HOST | SSH_HOST_PROD | VPS address |
| SSH_USER | SSH_USER_PROD | SSH user with Docker and deployment directory access |
| SSH_KEY | SSH_KEY_PROD | SSH private key |
| SSH_PORT | SSH_PORT_PROD | Optional SSH port, default 22 |

Configure the deployment environment as secrets (recommended if it contains
sensitive values) or as variables under **Settings > Secrets and variables >
Actions**. The workflow checks the matching variable first, then falls back to
the secret:

| Staging (develop) | Production (production) | Value |
| --- | --- | --- |
| ENV_FILE | ENV_FILE_PROD | Required .env contents: PORT, admin variables, and all four MONGODB_* variables |

Repository variables are not secret. Keep passwords, tokens, and other
sensitive values in `ENV_FILE` or `ENV_FILE_PROD` only when they are secrets.

Install Docker Engine and Compose v2 supporting up --wait on the VPS.
Deployment directories: /opt/ocean-ldp/staging and /opt/ocean-ldp/production.
Use different PORT values if both environments share one VPS.
Each deployment rewrites .env from its secret or variable and requires a valid
`PORT` entry before stopping the previous container.
Any `PORT` inherited by the VPS login shell is cleared so the value in this file
is used by Compose.

Image name: ghcr.io/<owner>/<repository> in lowercase. The workflow uses the
built-in GITHUB_TOKEN for GHCR; the repository must have package access.
Deploy succeeds only when the container passes its health check.
The deployment stops the previous Compose stack before starting the new commit,
so a deploy can cause a short interruption while preventing stale/orphaned
containers from retaining the published port. If startup still reports that a
port is already allocated, inspect the container shown in the workflow log and
either stop that unrelated service or assign this deployment a different PORT.

The VPS .env configures Compose and the server-side admin login. Never prefix
admin credentials with `VITE_`, because Vite variables are exposed to browsers.

## Image performance and deployment assets

Production builds optimize source images automatically. Default remote images are
vendored in `src/asset/remote`; source URLs are recorded beside their imports.
Public news/resource lists use `?view=summary`; detail pages request one item.
Client/server content caches last up to 30 seconds. Admin reads bypass the public
cache and successful saves invalidate the application caches.

Legacy base64 images are copied into MongoDB `media_assets` on access; existing
content records are preserved until the next admin save replaces base64 with URLs.
The first image request normalizes and resizes the stored media; subsequent requests
reuse it. Include `media_assets` alongside `content_collections` in database backups.
Do not delete media records simply because a post was deleted: other posts may share
an image. Arbitrary external image URLs entered by admins still use their original host.

Compose mounts the named `static_assets` volume at `/app/shared-assets`. Each startup
copies the current hashed assets into it and retains previous versions for open tabs.
Normal `docker compose down` preserves this volume. Do not pass `--volumes` during
routine deploys. The volume grows with releases; remove old files only after the
support window for open tabs has expired. This retention takes effect from the first
deployment using this configuration; it cannot restore assets already removed.

Validate with `npm run build` and `npm run test:performance`. The latter exercises
API handlers with an in-memory database, actual image encoding and BSON values;
it does not replace an end-to-end check against production MongoDB or Safari.
