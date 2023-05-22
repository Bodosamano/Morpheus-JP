

const Rutas = require('../../controlador/rutas')
const rutas = new Rutas()

const Numbers = require('../../controlador/numero')
const numbers =  new Numbers()

module.exports=(app) =>{ 
   app.get('/holaMundo',(req, res) => {
    res.status(200).json({message:'holaMundoGet'})
   }) 

   app.post('/holaMundo',(req, res) => {
    res.status(200).json({message:'holaMundoPos'})
   }) 

   app.put('/holaMundo',(req, res) => {
    res.status(200).json({message:'holaMundoPut'})
   }) 

   app.get('/usuario',(req, res) => {
      console.log(req.headers)
      //let nombre = req.query.nombre
      console.log(req.query)
      let {nombre} = req.query
      let data = {nombre}
      console.log(nombre)
      res.status(200).json()
   })

   app.post('/usuario',(req, res) => {
      //let nombre = req.body.nombre
      console.log(req.body)
      let {nombre} = req.body
      let data = {nombre}
      console.log(nombre)
      res.status(200).json()
   })

   app.put('/usuario',(req, res) => {
      //let nombre = req.body.nombre
      let {usuario_id} = req.query
      console.log(req.query)
      console.log(req.body)
      let {nombre} = req.body
      let data = {nombre}
      console.log(nombre)
      res.status(200).json()
   })

   app.get('/datos_usuario',(req, res) => {
      //let nombre = req.body.nombre
      let {usuario_id} = req.headers
      let {nombre} = req.query
      /* rutas.imprimir_nombre(nombre).then((result) => {
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      }) */

      rutas.imprimir_usuario_id(usuario_id).then((result) => {
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
      
   
   
   })

   app.get('/usr_data',(req, res) => {
      //let nombre = req.body.nombre
      let {usuario_id} = req.headers
      let {nombre} = req.query
      numbers.imprimirUs_nm(nombre,usuario_id).then((result) =>{

         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   
   })

   app.get('/usr_suma',(req, res) => {
      //let nombre = req.body.nombre
      let {dgt} = req.headers
      let {dgtd} = req.headers 
      numbers.f_smr(dgt, dgtd).then((result) =>{
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   
   })

   app.get('/usr_rst',(req, res) => {
      //let nombre = req.body.nombre
      let {dgt} = req.headers
      let {dgtd} = req.headers 
      numbers.f_rst(dgt, dgtd).then((result) =>{
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   
   })

   app.get('/rst_sum',(req, res) => {
      //let nombre = req.body.nombre
      let {dgt} = req.headers
      let {dgtd} = req.headers 
      numbers.f_rst_sum(dgt, dgtd).then((result) =>{
      res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   
   })

   app.get('/par_impar',(req, res) => {
      //let nombre = req.body.nombre
      let {dgt} = req.headers
      numbers.f_parImpar(dgt).then((result) =>{
      res.status(200).json(result)
      }).catch((error) => {
      res.status(400).json(error)
      })
   
   })
}




