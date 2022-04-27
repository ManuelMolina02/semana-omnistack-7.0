const Post = require('../models/Pots')

module.exports = {
  async index(req, res) {
    // const posts = await Post.find()
    // return res.json(posts)
  },
  async store(req, res) {
    const data = req.body
    const { filename: image } = req.file


    //criando post
    const post = await Post.create({
      ...data,
      image
    })

    //visualizar enviados arquivos na requisição
    console.log(post)

    return res.json(post)
  }
}