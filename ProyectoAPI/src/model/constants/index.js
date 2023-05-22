//variables de entorno / variables que no cambiarán
require('dotenv').config()
class Constants {

mySQL(){
    return {
        host: process.env.MYSQL_HOST_LOCAL,
        user: process.env.MYSQL_USER_LOCAL,
        password: process.env.MYSQL_PASS_LOCAL,
        database: process.env.MYSQL_DB_LOCAL,
        port: process.env.MYSQL_PORT_LOCAL

    }
}

 }

module.exports = Constants
