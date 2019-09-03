import React, { Component } from "react";
import Jugadores from "./jugadores";

class Menu extends Component {
  state = {
    isPlaying: 0
  };

  start = () => {
    this.setState({ isPlaying: 1 });
  };

  renderPlayers = () => {
    const display =
      this.state.isPlaying === 0 ? (
            <div>
                <h1 className="display-4">Anotador</h1>
                <div className="alert alert-secondary" role="alert">
                    Anotador creado con la libreria React.js creada por Facebook.
</div>
          <button onClick={this.start} className="btn btn-dark m-2">
            Let's Go!
          </button>
        </div>
      ) : (
        <Jugadores />
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
