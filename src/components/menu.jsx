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
                    El límite fijado temporalmente es de 100 puntos. Se pueden agregar y eliminar usuarios, el que llega a 101 puntos es automáticamente eliminado. Para empezar a anotar tocá el boton de abajo.
                    Se recomienda organizar a cada jugador con un número para identificar unívocamente a cada uno.
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
