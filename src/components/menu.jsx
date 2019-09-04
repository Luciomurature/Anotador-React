import React, { Component } from "react";
import Jugadores from "./jugadores";

class Menu extends Component {
  state = {
    isPlaying: 0,
    limite: 0
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
              <div style={{color: 'white'}}>Límite de puntuación</div>
                <input
                style={{ width: 50, height: 30 , borderRadius: '7px'}}
                type="number"
                value={this.state.limite}
                onChange={this.handleLimit}
                ref="clearInput"
              ></input>
            </label>
            </form>
          </div>
          <button onClick={this.start} className="btn btn-dark m-2">
            Let's Go!
          </button>
        </div>
      ) : (
        <Jugadores limite={this.state.limite} />
      );
    return display;
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="container">
        {this.renderPlayers()}
      </div>
    );
  }
}

export default Menu;
