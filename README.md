Oi,

Esse é minha programação onde o sistema pega dados fictício de uma API REST chamada (https://reqres.in), programei especificamante escolhendo o usuário por meio do seu
ID, escolher o avatar específico do ID (nele armazena no MongoDB com um hash e criptografando em base64 (o que aparecerá para o usuário final)), deletar do banco de dado
o avatar ID e também postar um usuário com requerimentos pré estabelecido pelo user.model.ts    

Hi,

This is my programming where the system takes fictitious data from a REST API call (https://reqres.in), I programmed it specifically by choosing the user through his ID, choosing the specific avatar of the ID (it is stored in MongoDB with a hash and encrypting in base64 (which will appear to the end user)), delete the avatar ID from the database and also post a user with pre-established requirements by user.model.ts

## Running the app

# Test (to test the entire programmation)

$ npm run start

or

$ npm run start:dev

## Test (to test especific tests - not programmed)

# unit tests
$ npm run test

# e2e tests (working)
$ npm run test:e2e

# test coverage
$ npm run test:cov (funcional)

# MongoDB

The MongoDb actually is using a cloud Atlas in my databse, if you want to change or something no have problems
