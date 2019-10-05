import React, { Component } from "react";
import Jugador from "./jugador";

class Jugadores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: [],
      nombreAgregar: "",
    };
  }

  handleDelete = jugadorId => {
    const jugadores = this.state.jugadores.filter(c => c.id !== jugadorId);
    this.setState({ jugadores: jugadores });
  };

  nuevoJugador = (e) => {
    e.preventDefault();
    const jugadores = this.state.jugadores;
    const newPlayer = new Jugador();
    newPlayer.id =
      jugadores.length === 0 ? 0 : jugadores[jugadores.length - 1].id + 1;
    newPlayer.nombre = this.state.nombreAgregar;
    jugadores.push(newPlayer);
    this.setState({ jugadores: jugadores, nombreAgregar: '' });
    this.refs.clearInput.value = "";
    
  };

  handleNew = (e) => {
    e.preventDefault();
    this.setState({ nombreAgregar: e.target.value });
  };


  render() {
    return (
      <div className="container"  >
        <h3 style={{color: 'white'}} className="display-4">Jugadorxs</h3>


        {this.state.jugadores.map(jugador => (
          <Jugador
            limite={this.props.limite}
            nombre={jugador.nombre}
            onDelete={this.handleDelete}
            key={jugador.id}
            id={jugador.id}
          />
        ))}
        <form onSubmit={this.nuevoJugador}>
          <label>
            <input
              style={{ borderRadius: '2px'}}
            className="m-2"
            type="text"
              value={this.nombreAgregar}
              onChange={this.handleNew}
              ref="clearInput"
              placeholder="Nombre"
            ></input>
          </label>
        </form>

        <button style={{ borderRadius: '10px' }}

          className="btn btn-success btn-bg m-2"
          onClick={this.nuevoJugador}
        >
          Agregar a {this.state.nombreAgregar}
        </button>
      </div>
    );
  }
}

export default Jugadores;
