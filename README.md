dependencias : 

npm i--save express body-parser consign mysql2 knex knex-logger

npm i -D eslint jest supertest


criar migrações : 
knex migrate:make create_users
knex migrate:latest-> atualiza a ultima migração
knex migrate:rollback -> retorna a ultima migração

* Criar arquivo knexfile.js com as informações do seu banco de dados.
* Para que o teste de nao inserir usuario com o mesmo email funcione você deve 
criar um usuario com um email padrão ( exemplo: adm@adm) para ser o usuario exemplo de testes.