import React, { Component } from "react";
import api from "../services/api";
import "./Feed.css";
import io from "socket.io-client";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  //iniciando estado da variavel feed
  state = {
    feed: [],
  };

  //método que vai ser chamado assim que o componente for montado
  //deterninando novo valor do feed
  async componentDidMount() {
    //criando novo post em realtime
    this.registerToSocket();

    //recebendo dados do backend/ webservice
    const response = await api.get("/posts");

    //atribuindo valor do feed
    this.setState({ feed: response.data });
  }

  //método que vai ser chamado quando o usuário criar um post
  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    //atualizando feed de acordo com novo post
    socket.on("post", (newPost) => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    //atualizando feed de acordo com like
    socket.on("like", (likedPost) => {
      this.setState({
        feed: this.state.feed.map((post) =>
          post._id === likedPost._id ? likedPost : post
        ),
      });
    });
  };

  //método para adicionar um like
  handleLike = async (id) => {
    await api.post(`/posts/${id}/like`);
  };

  render() {
    return (
      <div>
        <section id="post-list">
          {this.state.feed.map((post) => (
            <article key={post._id}>
              <header>
                <div className="user-info">
                  <span>{post.author}</span>
                  <span className="place">{post.place}</span>
                </div>
                <img src={more} alt="Mais" />
              </header>

              <img src={`http://localhost:3333/files/${post.image}`} alt="" />

              <footer>
                <div className="actions">
                  <button
                    type="button"
                    onClick={() => this.handleLike(post._id)}
                  >
                    <img src={like} alt="Like" />
                  </button>
                  <img src={comment} alt="Comentário" />
                  <img src={send} alt="Enviar" />
                </div>

                <strong>{post.likes} curtidas</strong>
                <p>
                  {post.description}
                  <span>{post.hashtags}</span>
                </p>
              </footer>
            </article>
          ))}
        </section>
      </div>
    );
  }
}

export default Feed;
