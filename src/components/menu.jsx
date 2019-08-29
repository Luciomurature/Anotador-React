import React, { Component } from 'react';
import Jugadores from './jugadores'


class Menu extends Component {
    state = {}
    
    renderPlayers() {
        console.log("XD")
            return (<Jugadores />)
    }

    render() { 

       
        return ( 
            <div style={{textAlign: 'center'}} className="container">
                <p>Info xdddd</p>
                <button onClick={this.renderPlayers} className="btn btn-primary m-2">Let's Go!</button>

            </div>
         );
    }
}
 
export default Menu;