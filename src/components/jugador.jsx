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
    if (isNaN(e.target.value)) { return;}
    this.setState({
      puntosAgregar: parseInt(e.target.value)
    });
  };

  handleLimit = () => {
    if (parseInt(this.state.puntos) > parseInt(this.state.limite)) {
      alert("Jugador " + (this.props.id + 1) + " perdio.")
      this.props.onDelete(this.props.id);
    } 
  }

  handlePuntos = (e) => {
    e.preventDefault();
    this.setState({ puntos: parseInt(this.state.puntos) + parseInt(this.state.puntosAgregar) });
  }

    
  render() {

    this.handleLimit();
    return (
      <div className="container" style={{textAlign: 'center'}}>
        <h3>
          <span className="badge badge badge-dark m-3">
            {this.state.nombre} {this.props.id + 1 }
          </span>
        </h3>
        <span
          style={{ fontSize: 20 }}
          className="badge m-1 badge badge-dark "
        >
          {this.state.puntos} Puntos
            </span>

        <form>
          <label>
            <input
              style={{ width: 50, height: 30 }}
              type="tel"
              onChange={this.handleChange}
              name="agrega"
            ></input>
          </label>
          <label>
<button onClick={this.handlePuntos} className="btn btn-dark m-2">+</button>

          </label>
        </form>

        <div>
          <button
            className="btn btn-danger btn-bg"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}

export default Jugador;
