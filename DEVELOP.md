# DEVELOP

## Environment

1. build

```bash
docker-compose build
```

2. start

```bash
docker-compose up
```

## Usage

### Enter docker container

```bash
docker-compose exec wareki-ts sh
```

### Command

> Enter the docker container and then run it.

- code formatting

    ```bash
    yarn lint
    ```

- compile to js from ts

    ```bash
    yarn build
    ```

- Create a .tgz to try the module locally

    ```bash
    npm pack
    ```
