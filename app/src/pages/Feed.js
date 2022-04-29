import React, { Component } from "react";
import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  render() {
    return (
      <div>
        <section id="post-list">
          <article>
            <header>
              <div className="user-info">
                <span>Manuel Molina</span>
                <span className="place">Florianópolis</span>
              </div>

              <img src={more} alt="" />
            </header>

            <img
              src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
              alt=""
            />
            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>900 curtidas</strong>
              <p>
                um post top, muito top
                <span>#react #dev-web #ehnois</span>
              </p>
            </footer>
          </article>

          <article>
            <header>
              <div className="user-info">
                <span>Manuel Molina</span>
                <span className="place">Florianópolis</span>
              </div>

              <img src={more} alt="" />
            </header>

            <img
              src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
              alt=""
            />
            <footer>
              <div className="actions">
                <img src={like} alt="" />
                <img src={comment} alt="" />
                <img src={send} alt="" />
              </div>

              <strong>900 curtidas</strong>
              <p>
                um post top, muito top
                <span>#react #dev-web #ehnois</span>
              </p>
            </footer>
          </article>
        </section>
      </div>
    );
  }
}

export default Feed;
