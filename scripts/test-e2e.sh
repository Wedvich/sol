#!/usr/bin/env bash
set -euo pipefail

docker compose \
  -f ./database/docker-compose.yml \
  -f ./server/docker-compose.yml \
  up -d --remove-orphans

yarn turbo build
