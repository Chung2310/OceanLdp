# syntax=docker/dockerfile:1
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3013
COPY --from=builder /app/dist ./dist
COPY server.mjs ./server.mjs
COPY package.json package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3013
HEALTHCHECK --interval=15s --timeout=3s --start-period=10s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1:3013/ || exit 1
CMD ["node", "server.mjs"]
