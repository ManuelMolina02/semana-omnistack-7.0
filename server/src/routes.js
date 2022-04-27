const express = require('express')
const multer = require('multer')


//importando controllers e arquivos de configuração
const PostController = require('./controllers/PostController')
const uploadConfig = require('./config/upload')



const routes = new express.Router()
const upload = multer(uploadConfig)



//criando rotas da aplicação


routes.get('/', (req, res) => {
  res.send(`
  <div style="padding: 2rem" >
   <h1>Hello World!</h1>
  </div>
  `)
})

//criando um post
routes.post('/posts', upload.single('image'), PostController.store)

module.exports = routes