const ProcessRutas = require("../model/mySQL/process/processRutas")
const processRutas =  new ProcessRutas()


class Rutas {

imprimir_nombre(nombre) {
    return processRutas.imprimir_regresar_nombre(nombre)
     

}

imprimir_usuario_id(usuario_id ){
    return processRutas.imprimir_regresar_usuario_id(usuario_id)
    
}

imprimirUs_nm(nombre,usuario_id) {
    return processRutas.imprimir_nombre_usuario(nombre, usuario_id) 
   

}
}


module.exports = Rutas