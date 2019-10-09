import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import * as firebase from 'firebase'


class BtnGreen extends Component {
  
 
  onClick = e =>{
            
          
    e.preventDefault();
    const {history} = this.props
      localStorage.setItem('name', JSON.stringify(this.props.name));
      localStorage.setItem('num', JSON.stringify(this.props.num));
      localStorage.setItem('nametable', JSON.stringify(this.props.nametable));
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

export default withRouter(BtnGreen);
