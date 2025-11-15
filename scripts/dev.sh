#!/usr/bin/env bash
set -euo pipefail

export NODE_ENV=development
export VITE_BACKEND_URL=http://localhost:3000

docker compose \
  -f ./database/docker-compose.yml \
  up -d --remove-orphans

yarn turbo dev
