// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-f659199b9e9e3d5a98ea8d38d5a7e5e6720d4df1.crlizib8w9lo.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '6M3I|.a>R*l7!.P$jv,Kdwyy[?HDsWj8'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
