
const ProcessNumeros = require("../model/mySQL/process/processNumeros")
const processNumeros =  new ProcessNumeros()


class Numbers {

    f_smr(dgt,dgtd){
        return processNumeros.funcion_sumar(dgt, dgtd)
    }
    
    
    f_rst(dgt,dgtd){
        return processNumeros.funcion_restar(dgt, dgtd)
    }
    
    
    f_rst_sum(dgt,dgtd){
        return processNumeros.rst_sum(dgt, dgtd)
    }

    f_parImpar(dgt){
        return processNumeros.par_Impar(dgt)
    }
    }


module.exports = Numbers 