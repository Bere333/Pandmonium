import React, { Component } from "react";

import Navbar from "../navbar";
import AccountPerGuest from "../account_guest";
import GreenRectangle from "../green_rectangle";
import * as firebase from 'firebase';

class ShowPedido extends Component {
  render(){
    return(
      <div>

      <div className="people-number-detail">
      <span className="label-detail">{this.props.num} </span>
      <span className="data-detail">
       
      </span>
      <br></br>
      <span className="label-detail">{this.props.name}</span>
      <span className="data-detail">
        
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
  constructor(props){
  super(props);
    this.state = {
      dateHour:null,
      name:null,
      table:null,
      num:null
    
  }
}
  onClick = (mesa) =>{    
    const db = firebase.firestore();   
     const pedidosRef = db.collection('pedidos');   
     pedidosRef.where('pendiente', '==', true )   
     .get()    
    .then((onSnapshot) => {  
            
         onSnapshot.forEach((doc) => {    
        
        this.setState({dateHour:doc.data().dateHour})
        this.setState({name:doc.data().name})
        this.setState({table:doc.data().table})
        this.setState({num:doc.data().num})                 
       })
    })
  }
  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle
          classCSS="rectangle-tabar-detail"
          place={this.state.table}
          onClick={this.onClick(localStorage.getItem('num-mesa'))}
        ></GreenRectangle>
        <ShowPedido name={this.state.name} 
        table={this.state.table}
        ></ShowPedido>
       
      </div>
    );
  }
}

export default DetailPlace;
