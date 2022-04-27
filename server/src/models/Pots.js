const moongose = require('mongoose')

//modelo de dados -> post de usuário
//refere-se as colunas que vamos ter acesso no banco de dados
const PostSchema = new moongose.Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
})

module.exports = moongose.model('Post', PostSchema)