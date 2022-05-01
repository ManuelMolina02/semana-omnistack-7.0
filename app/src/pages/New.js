import React, { Component } from "react";
import api from "../services/api";
import "./New.css";

class New extends Component {
  //definição estado inicial
  state = {
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: "",
  };

  //função para capturar os dados do formulário
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //capturar imagem
  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  //função para enviar os dados do formulário
  handleSubmit = async (e) => {
    try {
      e.preventDefault();

      //pegar os dados do formulário
      const data = new FormData();

      data.append("image", this.state.image);
      data.append("author", this.state.author);
      data.append("place", this.state.place);
      data.append("description", this.state.description);
      data.append("hashtags", this.state.hashtags);

      //enviar dados para o backend
      await api.post("posts", data);

      //redirecionar para a página principal
      this.props.history.push("/");
      window.location.reload("/");
    } catch (err) {
      alert("Erro ao enviar post!");
    }
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit} autoComplete="off">
        <input type="file" onChange={this.handleImageChange} required />

        <input
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.value}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.value}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.value}
        />

        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default New;
