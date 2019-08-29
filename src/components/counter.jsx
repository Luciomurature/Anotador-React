import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
    input: 0
  };

  styles = {
    //css en camelCase
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    return (
      <div>

        
        <button className="btn btn-secondary btn-sm" onClick={this.decrementar}>
          -
        </button>
        <span
          /*style={this.styles}*/
          /* o puedo hacer style={{fontSize: 10}} */ className={this.getBadgeClasses()}
        >
          {this.formatearConteo()}
        </span>
        <button className="btn btn-secondary btn-sm" onClick={this.incrementar}>
          +
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }


  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  incrementar = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementar = () => {
    this.state.count !== 0
      ? this.setState({ count: this.state.count - 1 })
      : this.setState({ count: this.state.count });
  };

  /*
   Tengo la clase del span badge m-2, que seria como la base de mi span,
   luego, quiero que sea rojo si esta en cero o amarillo si no lo esta,
   a badge m-2 le sumo badge-warning si el count está en cero, y sino le
   sumo badge-primary
   */

  /*formatearConteo() {
        const zero = <h1>Zero</h1>;
        const num = <h1>{this.state.count}</h1>
        return this.state.count === 0 ? zero : num ; //si es cero, pone "Zero", sino pone el conteo
    } se puede hacer esto y es cheto*/

  formatearConteo() {
    return this.state.count === 0 ? "Zero" : this.state.count; //si es cero, pone "Zero", sino pone el conteo
  }
}

export default Counter;
