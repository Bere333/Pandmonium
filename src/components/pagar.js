import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import * as firebase from 'firebase'


class Pagar extends Component {
  
 
  onClick = e =>{
            
          
    e.preventDefault();
    const {history} = this.props
      
      history.push(this.props.ruta);

   }
     
  render() {
    return (
      
      <button 
      type="button" 
      className="btn-green"
      onClick={this.onClick}>
        {this.props.btntext}
      </button>

    );
  }
}

export default withRouter(Pagar);