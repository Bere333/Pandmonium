import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import { withRouter} from "react-router-dom"
import * as firebase from 'firebase';


class BtnSaveOrder extends Component {
    constructor(props){
        super(props);
        this.state = {valid:null}
    }
  
 
  onClick = (e) =>{
    e.preventDefault();
    // history.push(this.props.ruta);
      
      const currentDate = new Date();
      const db = firebase.firestore();
      const strDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
      const strHour=`${currentDate.getHours()}-${currentDate.getMinutes()} hrs`
      
        db.collection('pedidos').add({
            pedidos:"Pandemonium",
        date: strDate,
        dateHour: strHour,
        name:localStorage.getItem('name'),
        num:localStorage.getItem('num'),
        table:localStorage.getItem('num-mesa'),
        // type:typevalue,
        // option:optionvalue,
        // quantity:quantityvalue,
        completeArray:localStorage.getItem('orden')
      })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            this.setState({valid:true})
            
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }
        )    
        
    }  

  render() {
    return (
      <div>

          <button 
          type="button" 
          className="btn-green"
          onClick={this.onClick}>
            {this.props.btntext}
          </button>
          {this.state.valid? <Redirect to="/places"/>:""}
      </div>

    );
  }
}

export default withRouter(BtnSaveOrder);