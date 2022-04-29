const Post = require("../models/Posts");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");
    return res.json(posts);
  },
  async store(req, res) {
    //selecionando dados enviados pelo usuário
    const data = req.body;
    const { filename: image } = req.file;

    //transformando imagem em jpg
    const [name] = image.split(".");
    const fileName = `${name}.jpg`;

    //redimensionando a imagem
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", fileName));

    //apagando a imagem original
    fs.unlinkSync(req.file.path);

    //criando post
    const post = await Post.create({
      ...data,
      fileName,
    });

    //emitindo post criado a todos os usuários conectados
    req.io.emit("post", post);

    return res.json(post);
  },
};
