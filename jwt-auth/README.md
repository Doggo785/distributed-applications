# JWT Auth

Authentification JWT avec architecture microservices.

## Stack

- Express 4
- Sequelize 6
- PostgreSQL 17
- Nginx (API Gateway)
- Docker Compose

## Architecture

```
Client → Nginx (8080) → auth_request → auth-service (3001)
                         ↘ proxy_pass → private-service (3002)
```

## Lancement

```bash
docker compose up --build
```

## Endpoints

- `POST /auth/register` - Inscription
- `POST /auth/login` - Connexion
- `GET /auth/validate` - Validation token
- `GET /private/` - Route protégée
