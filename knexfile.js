
module.exports = {
    client: 'mysql2',
        connection: {
          host : '127.0.0.1',
          user : 'root',
          password : '123456',
          database : 'financas'
        },
        migration:{
            directory: 'src/migrations',
        }
    }
    
