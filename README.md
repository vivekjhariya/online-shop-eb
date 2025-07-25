# Online Shopping App

_Last updated: 2025-07-25_

This is a modern online shopping application built with React. It includes features like product browsing, cart management, admin panel, order tracking, and more. The project is structured for scalability and maintainability, following industry best practices.

## Folder Structure (Industry Standard)

```
online_shopping_app/
  public/
    imgs/
    OS.svg
    index.html
  src/
    assets/
    components/
      Modals/
    context/
    data/
    hooks/
    pages/
    services/
    styles/
    test/
    utilities/
    App.jsx
    main.jsx
    index.css
    bootstrap-overrides.scss
  config/
    Jenkinsfile
    Dockerfile
    Dockerfile.dev
    docker-compose.yml
    nginx.conf
    k8s/
  .env
  .gitignore
  package.json
  package-lock.json
  vite.config.js
  vitest.config.js
  README.md
  ...other root files
```

## Production Deployment
- **Build Docker Image:**
  ```bash
  docker build -f config/Dockerfile -t online_shopping_web:prod .
  ```
- **Run with Docker Compose:**
  ```bash
  docker-compose -f config/docker-compose.yml up -d
  ```
- **Access App:**
  - http://localhost (default Nginx port 80)

## Testing in Production
- **Run Unit/Integration Tests:**
  ```bash
  docker exec -it <container_id> npm run test:ci
  ```
- **E2E Tests:**
  Run via Jenkins pipeline or locally with Playwright.

## CI/CD
- Jenkins pipeline automates build, test, and deploy.
- See `config/Jenkinsfile` for details.

## Key Points
- All infrastructure/config files are in `config/`.
- All source code is in `src/`.
- Public assets are in `public/`.
- Tests are in `src/test/`.
- Modular and scalable structure for easy maintenance. 