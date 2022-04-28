const express = require('express')
const multer = require('multer')

//importando controllers e arquivos de configuração
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')
const uploadConfig = require('./config/upload')

const routes = new express.Router()
const upload = multer(uploadConfig)

//retornar todos os posts da aplicadação por ordem de criação
routes.get('/posts', PostController.index)

//criando um post
routes.post('/posts', upload.single('image'), PostController.store)

routes.post('/posts/:id/like', LikeController.store)

module.exports = routes