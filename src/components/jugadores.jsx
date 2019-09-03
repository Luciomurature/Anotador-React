import React, { Component } from "react";
import Jugador from "./jugador";

class Jugadores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: [{ id: 0 }]
    };

  }

  handleDelete = jugadorId => {
    const jugadores = this.state.jugadores.filter(c => c.id !== jugadorId);
    this.setState({ jugadores: jugadores });
  };

  nuevoJugador = () => {
    const jugadores = this.state.jugadores;
    const newPlayer = new Jugador();
    newPlayer.id =
      jugadores.length === 0 ? 0 : jugadores[jugadores.length - 1].id + 1;
    jugadores.push(newPlayer);
    this.setState({ jugadores: jugadores });
  };

  render() {
    return (
      <div className="container">
        {this.state.jugadores.map(jugador => (
          <Jugador
            onDelete={this.handleDelete}
            key={jugador.id}
            id={jugador.id}
          />
        ))}
        <button
          className="btn btn-dark btn-bg m-3"
          onClick={this.nuevoJugador}
        >
          Nuevo jugador
        </button>
      </div>
    );
  }
}

export default Jugadores;
