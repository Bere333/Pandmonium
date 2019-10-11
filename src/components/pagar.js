import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as firebase from 'firebase'


class Pagar extends Component {
  
 
  onClick = e =>{
            
          
    e.preventDefault();
    const {history} = this.props
      
      history.push(this.props.ruta);
      // const id=localStorage.getItem('id');
      const db = firebase.firestore(); 
      var pendienteRef = db.collection('pedidos').doc('tf8yQKPrbp1K8Ts8SrOp');

// Remove the 'capital' field from the document
var removePendiente = pendienteRef.update({
    pendiente: firebase.firestore.FieldValue.delete()
   
    
})
.then((docRef)=>{
  console.log("hola");
})
.catch((error) => {
  console.error("Error adding document: ", error);
}
) ;
console.log(removePendiente);

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
