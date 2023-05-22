const ProcessUsuarios = require("../model/mySQL/process/processUsuarios")
const usuario = require("../services/router/usuario")
const processUsuarios = new ProcessUsuarios()

class Usuarios {
    print_usr_id(usuario_id) {
        return processUsuarios.imprimir_usuario(usuario_id)
    }

    insertarUsuario(nombre, nickname, pass) {
        return processUsuarios.recibirUsuario(nombre, nickname, pass)
    }


    newActUs(pass, nombre, id) {
        return processUsuarios.actInfoUsuario(pass, nombre, id)
    }

    newUsuarioNickname(id, nombre, nickname, pass) {
        return processUsuarios.infroUser_NewActualizacion(id, nombre, nickname, pass)
    }

    Usr_directdata(id, usuario_id, calle, telefono) {
        return processUsuarios.Usr_directdataFunc(id, usuario_id, calle, telefono)
    }

    Usr_chnagedata(direccion_id, usuario_id, calle, telefono) {
        return processUsuarios.Usr_chnagedataF(direccion_id, usuario_id, calle, telefono)
    }

}
module.exports = Usuarios