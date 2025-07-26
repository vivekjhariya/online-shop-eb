# ----------- Base Stage for Dependencies and Build/Test -----------
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev && npm cache clean --force
COPY . .

# ----------- Test Stage -----------
FROM base AS test
RUN npm run test

# ----------- Production Build Stage -----------
FROM base AS build
RUN npm run build && rm -rf node_modules src public

# ----------- Runtime (Nginx) Stage -----------
FROM nginx:alpine AS runtime
RUN addgroup -g 1001 -S appuser && adduser -S appuser -u 1001 -G appuser && \
    rm -rf /usr/share/nginx/html/* /var/cache/apk/* /tmp/* && \
    touch /var/run/nginx.pid && \
    mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp /var/cache/nginx/scgi_temp

COPY --from=build --chown=appuser:appuser /app/dist /usr/share/nginx/html
COPY --chown=appuser:appuser config/nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R appuser:appuser /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d /var/run/nginx.pid

USER appuser
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
