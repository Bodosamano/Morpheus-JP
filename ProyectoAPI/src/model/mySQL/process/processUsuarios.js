const { CLIENT_RENEG_LIMIT } = require('tls')
const Conection = require('../../conection')
const UsuarioCRUD = require('../crud/UsuariosCRUD')

class ProcessUsuarios {



    recibirUsuario(nombre, nickname, pass) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()

            try {
                conexion = await conection.conexionmySQL()


            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.insertinformacionUsuario(nombre, nickname, pass)
                console.log(infoUsuario)

                if (Object.keys(infoUsuario).length != 0) {
                    conexion.end()
                    return resolve({ code: 0, infoUsuario })
                }
                else {
                    conexion.end()
                    return resolve({ code: 10, message: 'No se encontro imformación con el id proporcionado' })
                }

            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso' })
            }
        })
    }







    actInfoUsuario(nombre, nickname, pass) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()

            try {
                conexion = await conection.conexionmySQL()


            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.insertinformacionUsuario(nombre, nickname, pass)
                console.log(infoUsuario)


                if (Object.keys(infoUsuario).length != 0) {
                    usuarioCrud.actualizar_nm(nombre)
                    usuarioCrud.actualizar_nk(nickname)
                    usuarioCrud.actualizar_ps(pass)
                    conexion.end()

                    return resolve({ code: 0, meessage: 'Actualizamos la información' })
                }
                else {
                    conexion.end()
                    return resolve({ code: 10, message: 'No se encontro imformación con el id proporcionado' })
                }

            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso ACT' })
            }
        })
    }




    recibirUsuario(nombre, nickname, pass) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()

            try {
                conexion = await conection.conexionmySQL()


            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.insertinformacionUsuario(nombre, nickname, pass)
                console.log(infoUsuario)

                if (Object.keys(infoUsuario).length != 0) {
                    conexion.end()
                    return resolve({ code: 0, infoUsuario })
                }
                else {
                    conexion.end()
                    return resolve({ code: 10, message: 'No se encontro imformación con el id proporcionado' })
                }

            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso' })
            }
        })
    }






    analizarUsrNick_database(nombre, nickname, pass) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()

            try {
                conexion = await conection.conexionmySQL()


            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.analizarUsuarioNick(nombre, nickname)
                console.log(infoUsuario)

                if (Object.keys(infoUsuario).length != 0) {
                    await this.actInfoUsuario(nombre, nickname, pass)
                    conexion.end()
                    return resolve({ code: 2, message: 'Ya existe un usuario con esta información' })
                }
                else {
                    await usuarioCrud.insertinformacionUsuario(nombre, nickname, pass)
                    conexion.end()
                    return resolve({ code: 0, message: 'Registro exitoso' })

                }

            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso' })
            }
        })
    }







    infroUser_NewActualizacion(id, nombre, nickname, pass) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()

            try {
                conexion = await conection.conexionmySQL()


            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.getInformacionUsuarioByID(id)
                console.log(infoUsuario)


                if (Object.keys(infoUsuario).length != 0) {
                    //await this.actInfoUsuario(nombre.nickname, pass)
                    console.log(infoUsuario[0].id)
                    let nombreDb = infoUsuario[0].nombre
                    let nicknameDb = infoUsuario[0].nickname

                    if (nombre != nombreDb) {
                        await usuarioCrud.actualizar_nm(id, nombre)
                    }

                    if (nickname != nicknameDb) {
                        await usuarioCrud.actualizar_nk(nickname, id)
                    }
                    conexion.end()
                    return resolve({ code: 0, message: 'Verifique la información' })


                }
                else {

                    conexion.end()
                    return resolve({ code: 6, message: 'No se encontro información de usuario' })
                }

            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso' })
            }

        })

    }






    info(id, usuario_id, calle, telefono) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()
            try {
                conexion = await conection.conexionmySQL()
            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.getInformacionUsuarioByID(id)
                console.log(infoUsuario)

                if (Object.keys(infoUsuario).length != 0) {
                    await usuarioCrud.insertinformacionUsr(usuario_id, calle, telefono)
                    conexion.end()
                    return resolve({ code: 0, infoUsuario })
                }
                else {
                    conexion.end()
                    return resolve({ code: 10, message: 'No se encontro imformación con el id proporcionado' })
                }

            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso ' })
            }
        })
    }










    Usr_chnagedataF(direccion_id, usuario_id, calle, telefono) {
        return new Promise(async (resolve, reject) => {
            let conexion = undefined
            const conection = new Conection()
            try {
                conexion = await conection.conexionmySQL()
            } catch (error) {
                return reject({ code: 1, mesagge: 'Error en la base de datos' })
            }
            try {
                const usuarioCrud = new UsuarioCRUD(conexion)
                let infoUsuario = await usuarioCrud.getInformacionUsuarioByID(usuario_id)
                let infoDirect = await usuarioCrud.getDirectionUsuarioByID(direccion_id)
                console.log(infoUsuario)
                console.log(infoDirect)

                if (Object.keys(infoUsuario).length == 0) {

                    conexion.end()
                    return resolve({ code: 0, message: "No hay registro" })
                }

                let calleDb
                let telefonoDb

                if (Object.keys(infoDirect[0]).length != 0) {
                    calleDb = infoDirect[0].calle
                    telefonoDb = infoDirect[0].telefono
                    console.log(calleDb)
                    console.log(telefonoDb)

                    if (calleDb != calle && telefonoDb != telefono) {
                        await usuarioCrud.actualizarDireccionesC(direccion_id, calle)
                        await usuarioCrud.actualizarDireccionesT(direccion_id, telefono)

                        conexion.end()
                        return resolve({ code: 0, message: 'se actualizó la información en Genereal' })
                    }
                    else if (telefonoDb != telefono && calleDb == calle) {
                        await usuarioCrud.actualizarDireccionesT(direccion_id, telefono)

                        conexion.end()
                        return resolve({ code: 0, message: 'se actualizó la información de T' })

                    } else if (calleDb != calle && telefonoDb == telefono) {
                        await usuarioCrud.actualizarDireccionesC(direccion_id, calle)

                        conexion.end()
                        return resolve({ code: 0, message: 'se actualizó la información de C' })
                    }

                    conexion.end()
                    return resolve({ code: 0, message: 'Verifica la información' })
                }
                conexion.end()
                return resolve({ code: 10, message: 'No se encontro imformación con el id proporcionado' })



            } catch (error) {
                console.log(error)
                conexion.end()
                return reject({ code: 1, mesagge: 'Error en el proceso ' })
            }
        })
    }

}


module.exports = ProcessUsuarios


