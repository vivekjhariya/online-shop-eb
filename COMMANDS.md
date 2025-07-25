# Production Commands - Online Shopping App

_Last updated: 2025-07-25_

1. Clone Repository
    ```bash
    git clone <REPOSITORY_URL>
    cd online_shopping_app
    ```

2. Build Production Docker Image (if needed)
    ```bash
    docker build -f config/Dockerfile -t online_shopping_web:prod .
    ```

3. Run with Docker Compose (Production)
    ```bash
    docker-compose -f config/docker-compose.yml up -d
    ```

4. Stop/Remove Docker Compose Containers
    ```bash
    docker-compose -f config/docker-compose.yml down
    ```

5. Push to DockerHub (optional)
    ```bash
    docker tag online_shopping_web:prod <your-dockerhub-username>/online_shopping_web:latest
    docker push <your-dockerhub-username>/online_shopping_web:latest
    ```

6. Check Health & Logs
    ```bash
    docker ps
    docker logs <container_id>
    ```

7. Run Tests in Production Image
    ```bash
    docker exec -it <container_id> npm run test:ci
    ```

---