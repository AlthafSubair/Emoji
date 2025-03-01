#!/bin/sh

# Replace environment variables in Caddyfile.template and save it as Caddyfile
envsubst < /etc/caddy/Caddyfile.template > /etc/caddy/Caddyfile

# Start Caddy
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
