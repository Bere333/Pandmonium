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
      <span className="data-detail">Fecha: {this.props.date}</span><br></br>
      <span className="data-detail">Hora: {this.props.dateHour}</span><br></br>
    </div>
       <div className="table-detail-container">
         <AccountPerGuest completeArray={this.props.completeArray}/>
       </div>
      </div>

    )
  }
}

class DetailPlace extends Component {
  constructor(props){
    super(props);
      this.state = {
        nametable: null,
        date:null,
        name:null,
        completeArray:null

    }
  }

  componentWillMount = () => {   
    const nametable = localStorage.getItem('nametable')
    this.setState({
      nametable:nametable
    })
    const db = firebase.firestore(); 
     const pedidosRef = db.collection('pedidos');   
     pedidosRef.where('table', '==', nametable )   
     .get()    
    .then((onSnapshot) => {  
         onSnapshot.forEach((doc) => {
          const order = doc.data().completeArray;
          this.setState({
            date:doc.data().date,
            name:doc.data().name,
            completeArray:order,
            dateHour:doc.data().dateHour
          })                 
       })
    })
}
  render() {
    return (
      <div className="detail_screen">
        <Navbar />

        <GreenRectangle
          classCSS="rectangle-tabar-detail"
          nametable={this.state.nametable}
          name={this.state.name}
        ></GreenRectangle>

        <ShowPedido 
          date={this.state.date}
          name={this.state.name}
          completeArray={this.state.completeArray}
          dateHour={this.state.dateHour}
        ></ShowPedido>
       
      </div>
    );
  }
}

export default DetailPlace;
