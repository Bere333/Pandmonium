import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import TablesRectangle from "../tables_rectangle.js";
import * as firebase from 'firebase';

class AccountList extends Component {
  constructor(props){
    super(props);
      this.state = {
        table:[]
    }
  }

  componentWillMount = () => {
    const db = firebase.firestore(); 
     const pedidosRef = db.collection('pedidos');   
     pedidosRef.where('pendiente', '==', true )   
     .get()    
    .then((onSnapshot) => {  
      
      let {table}=this.state;  
         onSnapshot.forEach((doc) => {    
         table.push(doc.data().table)
        this.setState({
          table:table
        })                 
       })
    })
}
  
  render() {
    return (
      
      <div className="places-screen">
        <Navbar />
        <div className="open-account">
          <Link to="DetailPlace">
            <TablesRectangle classCSS="rectangle-account" table={this.state.table}/>
          </Link> 
        </div>
      </div>
    );
  }
}

export default AccountList;
