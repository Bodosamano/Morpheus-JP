const Usuarios = require('../../controlador/usuarios')
const usuarios = new Usuarios()


module.exports = (app) => {

   app.get('/usrdi_data', (req, res) => {
      let { usuario_id } = req.headers
      usuarios.print_usr_id(usuario_id).then((result) => {

         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })

   })
   app.post('/usrdi_data2', (req, res) => {
      let { nombre } = req.headers
      let { nickname } = req.headers
      let { pass } = req.headers

      usuarios.insertarUsuario(nombre, nickname, pass).then((result) => {

         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })

   })

   app.put('/usrdi_data3', (req, res) => {
      let { pass } = req.body
      let { nombre } = req.body
      let { id } = req.query
      usuarios.newActUs(pass, nombre, id).then((result) => {

         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })

   })

   app.post('/usrdi_datas', (req, res) => {
      let { nombre, nickname, pass } = req.body
      /* let {nickname} = req.body
      let {pass} = req.body */
      usuarios.newUsuarioNickname(nombre, nickname, pass).then((result) => {
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })

   })

   app.post('/usrdNew_datas', (req, res) => {
      let { id, nombre, nickname, pass } = req.body
      usuarios.newUsuarioNickname(id, nombre, nickname, pass).then((result) => {
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   })



   app.post('/usuario/usr_directdata', (req, res) => {
      let { usuario_id, calle, telefono } = req.headers
      let { id } = req.body
      usuarios.Usr_directdata(id, usuario_id, calle, telefono).then((result) => {
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   })




   app.post('/usr_changedata', (req, res) => {
      let { direccion_id, calle, telefono } = req.headers
      let { usuario_id } = req.body
      usuarios.Usr_chnagedata(direccion_id, usuario_id, calle, telefono).then((result) => {
         res.status(200).json(result)
      }).catch((error) => {
         res.status(400).json(error)
      })
   })
}

