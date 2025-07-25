# 🚀 Development Guide

_Last updated: 2025-07-25_

## Quick Start

### Local Development (without Docker)
```bash
npm install
npm run dev
# Access: http://localhost:5173
```

### Docker Development
```bash
# Build and run dev container
npm run docker:dev
# Access: http://localhost:5173
```

### Test Production Locally
```bash
# Build production image
npm run docker:build
# Run production container
npm run docker:up
# Access: http://localhost:80
```

## 🛠️ Available Scripts
- `npm run dev` - Local dev server
- `npm run docker:dev` - Docker dev
- `npm run build` - Build for production
- `npm run start` - Preview prod build
- `npm run docker:up` - Docker Compose prod
- `npm run docker:build` - Build Docker image
- `npm run lint` - Lint code
- `npm run test` - Run tests

## 🐳 Docker Setup
- `Dockerfile` (production, Nginx)
- `Dockerfile.dev` (development, hot reload)
- `docker-compose.yml` (production)

## 🏗️ Project Structure
- `src/` - Source code
- `public/` - Static assets
- `config/` - Infra/config files

## 🏆 Best Practices
- Use local dev for fast iteration
- Use Docker dev for consistency
- Always test production build locally before deploying
- Use lint and test scripts before PR/merge

---
