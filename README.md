## Project setup

```bash
$ npm install
```

## Docker
```bash
#comando para subir o docker
$ docker-compose up -d 

#comando para derrubar o docker
$ docker-compose down   
```


## typeorm / migrations
```bash
#comando para gerar migration 
$ npm run migration:generate src/db/migration/inicial
#comando para aplicar as migrations na base
$ npm run migration:run 

```


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

