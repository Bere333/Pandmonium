import React, { Component } from "react";

import Navbar from "../navbar";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";


class ShowPedido extends Component {
  
  render(){
    const nametable = localStorage.getItem('nametable');
    

    return(
      <div>

      <div className="people-number-detail">
      <span className="label-detail"></span>
      <span className="data-detail">
       
      </span>
      <br></br>
      <span className="label-detail">{nametable}</span>
      <span className="data-detail">
      {/* Aquí tiene que cambiar el nombre */}
       </span>
    </div>
       <div className="table-detail-container">
         <AccountPerGuest />
       </div>
      </div>

    )
  }
}

class DetailPlace extends Component {

  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle
          classCSS="rectangle-tabar-detail"
          place={this.props.value}
        ></GreenRectangle>

        <ShowPedido 
        value={this.props.value}
        ></ShowPedido>
       
      </div>
    );
  }
}

export default DetailPlace;
