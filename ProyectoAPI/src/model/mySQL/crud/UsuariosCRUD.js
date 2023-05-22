const { error } = require("console")
const usuario = require("../../../services/router/usuario")

class UsuarioCRUD {
    constructor(conexion) {
        this.conexion = conexion

    }
    getInformacionUsuarioByID(usuario_id) {
        return new Promise((resolve, reject) => {
            let consulta = `select* from usuario where id  = ? and activo = 1 ;`
            this.conexion.query(consulta, [usuario_id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }





    getDirectionUsuarioByID(direccion_id) {
        return new Promise((resolve, reject) => {
            let consulta = `select* from direccion where id  = ? and activo = 1 ;
 `
            this.conexion.query(consulta, [direccion_id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }






    insertinformacionUsuario(nombre, nickname, pass) {
        return new Promise((resolve, reject) => {
            let consulta = `
        INSERT INTO usuario (nombre, nickname, pass) VALUES (?, ? ,?);`
            this.conexion.query(consulta, [nombre, nickname, pass], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })

    }


    actualizarDireccionesC(direccion_id, calle) {
        return new Promise((resolve, reject) => {
            let consulta = `UPDATE direccion SET calle = ? where (id = ?);`
            this.conexion.query(consulta, [calle, direccion_id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }


    actualizarDireccionesT(direccion_id, telefono) {
        return new Promise((resolve, reject) => {
            let consulta = `UPDATE direccion SET  telefono = ?  where (id = ?);;`
            this.conexion.query(consulta, [telefono, direccion_id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }







    insertinformacionUsr(usuario_id, calle, telefono) {
        return new Promise((resolve, reject) => {
            let consulta = `
        INSERT INTO direccion (usuario_id, calle, telefono) VALUES (?, ?,? );`
            this.conexion.query(consulta, [usuario_id, calle, telefono], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })

    }



    actualizar_nm(id, nombre) {
        return new Promise((resolve, reject) => {
            let consulta_nmU = `UPDATE usuario SET nombre = ? where (id = ?);`
            this.conexion.query(consulta_nmU, [nombre, id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }

    actualizar_nk(nickname, id) {
        return new Promise((resolve, reject) => {
            let consulta_nkU = `UPDATE usuario SET nickname = ? where (id = ?);`
            this.conexion.query(consulta_nkU, [nickname, id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }


    actualizar_ps(pass) {
        return new Promise((resolve, reject) => {
            let consulta = `UPDATE usuario SET pass = ? where (id = ?);`
            this.conexion.query(consulta, [pass], (err, result) => {
                if (err) {
                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }



    analizarUsuarioNick(nombre, nickname) {
        return new Promise((resolve, reject) => {
            let consulta = `select* from usuario where nombre = ? and nickname = ?;`
            this.conexion.query(consulta, [nombre, nickname], (err, result) => {
                if (err) {

                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }


    analizarUsuarioNick(nombre, nickname) {
        return new Promise((resolve, reject) => {
            let consulta = `select* from usuario where nombre = ? and nickname = ?;`
            this.conexion.query(consulta, [nombre, nickname], (err, result) => {
                if (err) {

                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }


    newUser_info(nombre, nickname, pass) {
        return new Promise((resolve, reject) => {
            let consulta_nm = `select* from usuario where nombre  = ?;`
            let consulta_nk = `select* from usuario where nickname = ?;`
            let consulta_ps = `select* from usuario where pass = ?;`


            this.conexion.query(consulta_nm, [nombre], (err, result) => {
                if (err) {

                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })

            this.conexion.query(consulta_nk, [nickname], (err, result) => {
                if (err) {

                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })

            this.conexion.query(consulta_ps, [pass], (err, result) => {
                if (err) {

                    return reject(err)
                }
                else {
                    resolve(result)
                }

            })
        })
    }








}


module.exports = UsuarioCRUD