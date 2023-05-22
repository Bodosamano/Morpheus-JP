class ProcessRutas {

    imprimir_regresar_nombre(nombre) {
        return new Promise((resolve, reject) => {
            try {
                console.log('Aquí es donde se imprime el nombre', nombre)
                return resolve({ code: 0, nombre })
            } catch (error) {
                return reject({ code: 1 })
            }
        })
    }


    imprimir_regresar_usuario_id(usuario_id) {
        return new Promise((resolve, reject) => {
            try {
                console.log('Aqí es donde se imprime el usuario', usuario_id)
                return resolve({ code: 0, usuario_id })
            } catch (error) {
                return reject({ code: 1 })
            }
        })
    }
    imprimir_nombre_usuario(nombre, usuario_id) {
        return new Promise((resolve, reject) => {
            try {
                this.imprimir_regresar_nombre(nombre)
                this.imprimir_regresar_usuario_id(usuario_id)
                return resolve({ code: 0, nombre, usuario_id })
            } catch (error) {
                return reject({ code: 1 })
            }
        })
    }

}

module.exports = ProcessRutas