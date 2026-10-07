# Docker and CI/CD

Based on Luxcare: PRs validate the build; pushes to develop/production build an
image on GHCR and deploy via SSH. Deployments use the exact commit SHA image tag.

## Local Docker

```sh
cp .env.example .env
docker compose up -d --build --wait
```

Open http://localhost:3010. Set PORT in .env and rerun Compose to change the host
port. Missing .env, missing PORT or empty PORT defaults to 3010. Shell variables
have priority over .env. Nginx listens on port 80 inside the container.
Vite dev and preview also read PORT from the environment or Vite env files.

## GitHub repository secrets and variables

Configure the SSH values below as repository secrets:

| Staging (develop) | Production (production) | Value |
| --- | --- | --- |
| SSH_HOST | SSH_HOST_PROD | VPS address |
| SSH_USER | SSH_USER_PROD | SSH user with Docker and deployment directory access |
| SSH_KEY | SSH_KEY_PROD | SSH private key |
| SSH_PORT | SSH_PORT_PROD | Optional SSH port, default 22 |

Configure the deployment environment as repository variables under
**Settings > Secrets and variables > Actions > Variables**:

| Staging (develop) | Production (production) | Value |
| --- | --- | --- |
| ENV_FILE | ENV_FILE_PROD | Full .env contents, e.g. PORT=3010; optional |

Repository variables are not secret. Keep passwords, tokens, and other
sensitive values in GitHub secrets rather than ENV_FILE or ENV_FILE_PROD.

Install Docker Engine and Compose v2 supporting up --wait on the VPS.
Deployment directories: /opt/ocean-ldp/staging and /opt/ocean-ldp/production.
Use different PORT values if both environments share one VPS.
Each deployment rewrites .env from its secret; an empty secret uses defaults.

Image name: ghcr.io/<owner>/<repository> in lowercase. The workflow uses the
built-in GITHUB_TOKEN for GHCR; the repository must have package access.
Deploy succeeds only when the container passes its health check.
The deployment stops the previous Compose stack before starting the new commit,
so a deploy can cause a short interruption while preventing stale/orphaned
containers from retaining the published port. If startup still reports that a
port is already allocated, inspect the container shown in the workflow log and
either stop that unrelated service or assign this deployment a different PORT.

The VPS .env configures Compose only. This is a static frontend; future VITE_*
variables must be supplied at build time to change the generated JavaScript.
