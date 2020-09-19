// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-20024416c34ba6dbfa3923d3f3f120e6e3a030c7.ceefo25bexkd.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '-.CCUH04CY5Nt9H?cNb^$,`ertl(5j{R'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}