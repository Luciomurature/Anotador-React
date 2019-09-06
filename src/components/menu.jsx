import React, { Component } from "react";
import Jugadores from "./jugadores";

class Menu extends Component {
  state = {
    isPlaying: 0,
    limite: 100
  };

  start = () => {
    this.setState({ isPlaying: 1 });
  };

  handleLimit = (e) => {
    e.preventDefault();
    this.setState({ limite: e.target.value });
  }

  renderPlayers = () => {
    const display =
      this.state.isPlaying === 0 ? (
        <div>
          <h1 className="display-4" style={{ color: "white" }}>
            Anotador
          </h1>
          <div style={{ color: "white" }}>
            Creado por Lucio Murature con la libreria React.js desarrollada por
            Facebook.
          </div>
          <div>
          <form onSubmit={this.start}>
            <label>
                <div style={{ color: 'white' }}><h4 >Límite de puntuación</h4></div>
                <input
                style={{ width: 80, height: 50 , borderRadius: '7px', fontSize:'150%'}}
                type="number"
                value={this.state.limite}
                onChange={this.handleLimit}
                ref="clearInput"
              ></input>
            </label>
            </form>
          </div>
          <button onClick={this.start} className="btn btn-dark m-2">
            Empezar con límite {this.state.limite}
          </button>
        </div>
      ) : (
        <Jugadores limite={this.state.limite} />
      );
    return display;
  };

  render() {
    return (
      <div style={{textAlign: 'center'}} className="container">
        {this.renderPlayers()}
      </div>
    );
  }
}

export default Menu;
