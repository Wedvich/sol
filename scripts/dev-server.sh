#!/usr/bin/env bash
set -euo pipefail

export NODE_ENV=development

docker compose \
  -f ./database/docker-compose.yml \
  up -d --remove-orphans

yarn turbo dev --filter "@sol/server"

