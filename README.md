# nosql2h22-it-profile

## Build for development
```bash

docker-compose -f ./docker-composes/dev.yaml  up --build -d 

```
### frontend
  port: 8080
  
### backend
  port: 55000

### database
  port: 57017

## Build for production
```bash

docker-compose -f ./docker-composes/prod.yaml  up --build -d 

```

### Тестовые пользователи

felis.eget.varius@protonmail.couk Qwerty1234 - обычный пользователь

admin@mail.ru Qwerty1234 - администратор