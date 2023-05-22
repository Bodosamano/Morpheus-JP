class ProcessNumeros {

    funcion_sumar(dgt,dgtd){
        return new Promise(async(resolve, reject) => {
            try {
               let sum = parseInt(dgt) + parseInt(dgtd)
               console.log('Suma', sum) 
               return resolve({code:0, sum})
            } catch (error) {
                return reject ({code: 1})
                
            }
        })
        
    }

    funcion_restar(dgt,dgtd){
        return new Promise(async(resolve, reject) => {
            try {
                let rst = parseInt(dgt) - parseInt(dgtd)
               console.log('Resta', rst) 
               return resolve({code:0, rst})
            } catch (error) {
                return reject ({code: 1})
                
            }
        })
        
    }


    rst_sum(dgt,dgtd){
        return new Promise(async(resolve, reject) => {
            try {
                let sum = await this.funcion_sumar(dgt,dgtd)
                let rst = await this.funcion_restar(dgt,dgtd)
               console.log('Suma y Resta', rst, sum) 
               return resolve({code:0, rst, sum})
            } catch (error) {
                return reject ({code: 1})
                
            }
        })
        
    }
    par_Impar(dgt){
        return new Promise(async(resolve, reject) => {
            try {
                let  div = parseInt(dgt)%2
                if(div == 0 ){
                    let p_r = 'Es par'
                    console.log(p_r)
                }
                else {
                    let i_p = 'Es impar '
                    console.log(i_p)
                }
                return resolve({code: 0})
            } catch (error) {
                return reject ({code: 1})
            }
        })
    }
}

module.exports = ProcessNumeros