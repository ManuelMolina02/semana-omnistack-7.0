import React, { Component } from "react";

//Componente de classe que herda de React.Component
class Feed extends Component {
  // Renderiza o componente 
  // ---> função obrigatória de um componente de classe <---
  render() {
    //Retorna um elemento HTML
    return (
      <div className="App">
        <h1>
          Feed
        </h1>
      </div>
    );
  }
}

export default Feed;