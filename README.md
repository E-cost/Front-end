![Alt text](./logo.png)

# ООО "Восточный Берег"
> Информация к официальному серверу компании.


## Установка

Установка проекта производится как в рамках Docker контейнеров, так и в рамках локальной установки. 

```shell
    # В случае разработки
    docker build -f Dockerfile.dev -t client-dev:local .
    docker run -p 3000:3000 client-dev

    # В случае production
    docker build -f Dockerfile.prod -t client-prod:latest .
    docker run -d -p 80:80 client-prod
```

1) Происходит запуск клиента в контейнере.


## Лицензия

"Код в этом проекте лицензирован на условиях лицензии MIT."