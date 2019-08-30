import React, { Component } from "react";

class Jugador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Jugador",
      puntos: 0,
      puntosAgregar: 0,
      limite: 100
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    console.log(e.target.value);
    if (isNaN(e.target.value)) {
      return;
    }
    this.setState({
      puntosAgregar: parseInt(e.target.value)
    });
  };

  handleLimit = () => {
    if (parseInt(this.state.puntos) > parseInt(this.state.limite)) {
      alert("Jugador " + (this.props.id + 1) + " perdio.");
      this.props.onDelete(this.props.id);
    }
  };

  handlePuntos = e => {
    e.preventDefault();
    this.setState({
      puntos: parseInt(this.state.puntos) + parseInt(this.state.puntosAgregar)
    });
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data =>
        this.setState({ nombre: data.results[0].name.first[0].toUpperCase() + data.results[0].name.first.slice(1) + " " + data.results[0].name.last[0].toUpperCase() + data.results[0].name.last.slice(1) }));
      }
  
  render() {
    this.handleLimit();
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h3>
          <span className="badge badge badge-dark m-3">
            {this.state.nombre}
          </span>
        </h3>
        <span style={{ fontSize: 20 }} className="badge m-1 badge badge-dark ">
          {this.state.puntos} Puntos
        </span>

        <form>
          <label>
            <input
              style={{ width: 50, height: 30 }}
              type="number"
              onChange={this.handleChange}
              name="agrega"
            ></input>
          </label>
          <label>
            <button onClick={this.handlePuntos} className="btn btn-dark m-2">
              +
            </button>
          </label>
        </form>

        <div>
          <button
            className="btn btn-danger btn-bg"
            onClick={() => {
              if (
                window.confirm("¿Estas seguro que deseas eliminar el jugador?")
              ) {
                this.props.onDelete(this.props.id);
              }
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}

export default Jugador;
