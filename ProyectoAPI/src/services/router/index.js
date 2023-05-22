const glob = require('glob')
const path = require('path')

//exportar función opara incluir en idex y http

module.exports=(app) =>{ 
    glob.sync('src/services/router/*.js').forEach((file) => {
        if(!file.includes('index.js')){
            require(path.resolve(file))(app)

        }
    })
}