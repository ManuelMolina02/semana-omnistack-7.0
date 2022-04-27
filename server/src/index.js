const express = require('express')
const { default: mongoose } = require('mongoose')

const app = express()
//ler arquivos json
app.use(express.json())

//conexão com banco de dados
mongoose.connect('mongodb+srv://new-user:senhasupersecreta@cluster0.lvrlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,

})

//rotas da aplicação
app.use(require('./routes'));


//porta de escuta
app.listen(3333, () => {
  console.log('Server running on port -> http://localhost:3333')
})