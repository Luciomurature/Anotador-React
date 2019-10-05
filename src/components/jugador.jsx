import React, { Component } from "react";
import trash from '../trash.png'

class Jugador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puntos: 0,
      puntosAgregar: 0
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
    if (parseInt(this.state.puntos) > parseInt(this.props.limite)) {
      alert(this.props.nombre + " perdio.");
      this.props.onDelete(this.props.id);
    }
  };

  handlePuntos = e => {
    e.preventDefault();
    this.setState({
      puntos: parseInt(this.state.puntos) + parseInt(this.state.puntosAgregar)
    });
    this.refs.clearInput.value = "";
    this.setState({ puntosAgregar: 0 });
  };

 
  render() {
    this.handleLimit();
    return (
      
      <div className="container" style={{ color: "white" }}>

        

        


        
       

        


        
          


<h3 style={{fontWeight: 'normal'}}>{this.props.nombre}</h3>
        
        <span style={{ fontSize: 20, borderRadius: '10px' }} className="badge m-1 badge badge-dark ">
          {this.state.puntos} Puntos
        </span>
        

        <form onSubmit={this.handlePuntos}>
        <label>

<button
  style={{ borderRadius: "20px" }}
  className="btn btn-danger btn-bg m-2"
  onClick={() => {
    if (
      window.confirm(
        "¿Estas seguro que deseas eliminar a " + this.props.nombre + "? Parecía buen pibe."
      )
    ) {
      this.props.onDelete(this.props.id);
    }
  }}
>
  <img src={trash} alt="trash" style={{width: '25px', height:'25px'}}></img>
</button>
</label>
          <label>
            <input
              style={{ width: 50, height: 30 }}
              type="number"
              onChange={this.handleChange}
              name="agrega"
              ref="clearInput"
            ></input>
          </label>
          <label>
            <button onClick={this.handlePuntos} style={{ borderRadius: "10px" }}
 className="btn btn-dark m-2">
              +
            </button>
          </label>
          
        </form>
      </div>
    );
  }
}

export default Jugador;
