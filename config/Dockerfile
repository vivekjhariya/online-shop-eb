# ----------- Production Build (Multi-stage) -----------
FROM node:20-alpine AS build
WORKDIR /app
# Install dependencies (including dev for build)
COPY package*.json ./
RUN npm ci --include=dev && npm cache clean --force
COPY . .
# Build static files
RUN npm run build && rm -rf node_modules src public

# ----------- Production Runtime (Nginx) -----------
FROM nginx:alpine
# Create non-root user for security
RUN addgroup -g 1001 -S appuser && adduser -S appuser -u 1001 -G appuser && \
    rm -rf /usr/share/nginx/html/* /var/cache/apk/* /tmp/* && \
    touch /var/run/nginx.pid && \
    mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp
# Copy built app and nginx config
COPY --from=build --chown=appuser:appuser /app/dist /usr/share/nginx/html
COPY --chown=appuser:appuser config/nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R appuser:appuser /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /var/run/nginx.pid
USER appuser
EXPOSE 80
# Healthcheck for production
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
