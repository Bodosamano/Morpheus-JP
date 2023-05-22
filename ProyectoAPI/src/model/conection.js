const mysql = require('mysql')
const Constants = require('./constants/index')
const dataMysql = new Constants().mySQL()

class Conection {

    constructor(){
    }

    conexionmySQL(){
        return new Promise ((resolve, reject) => {
            let connection = mysql.createConnection(dataMysql);
            connection.connect(error => {
                if(error){
                    console.log("ENTRO A ERROR POR CIERRE DE CONEXION O SIMILAR...");
                    console.log(error);
                    reject(error);
                }
                else
                {
                    resolve(connection);
                }                    
            });
        });
        
    }



}

module.exports =  Conection