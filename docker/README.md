# Docker-compoe
## Usage
- Copy `docker/env.example` as `docker/.env` and update values vith **<...>**.
- Run `$ docker-compose build`. This build all required images
- Run `$ docker-compose up`. This starts all services needed, you will see errors and restarting images because DB, localStack and EVM are required to be initialized.  

## Clean containers and volumes
This will delete containers and volumes where data is stored.
> **WARNING** This removes everything on the host machine.
```bash
$ docker-compose down
$ docker rm $(docker ps -a -q)
$ docker rmi $(docker images -q)
$ docker system prune -a --volumes
```

## Troubleshooting
- When `.env` file isn't present, docker-compose will throw
```
WARNING: The POSTGRES_USER variable is not set. Defaulting to a blank string.
WARNING: The POSTGRES_PASSWORD variable is not set. Defaulting to a blank string.
...
WARNING: The LOCALSTACK_DEBUG variable is not set. Defaulting to a blank string.
```