# Only used in production
FROM caddy:2-builder AS builder

RUN xcaddy build \
    --with github.com/mholt/caddy-ratelimit

FROM caddy:2-alpine

# Install envsubst for variable replacement
RUN apk add --no-cache gettext

# Copy the template file
COPY Caddyfile.template /etc/caddy/Caddyfile.template

# Copy Caddy binary from the builder stage
COPY --from=builder /usr/bin/caddy /usr/bin/caddy

# Entry script to replace variables & start Caddy
COPY start.sh /start.sh
RUN chmod +x /start.sh

ENTRYPOINT ["/start.sh"]

