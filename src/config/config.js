// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-46ef940c07de2ea00c60c4235d4d4d2ec3089b04.crlizib8w9lo.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '._8KlK]Z#15k)G``&xZA9*yHx+p_fj(}'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}