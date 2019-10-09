import React, { Component } from "react";


class TablesRectangle extends Component {
  onClick = (e) =>{
    console.log(e.target.name)
    let value= e.target.name;
    localStorage.setItem('nametable', value);
  }

  render() {
    return(
      <div>
      {this.props.table.map((mesa,index)=>{
      return (
        <button 
        name={mesa}
        key={index} 
        className={this.props.classCSS} 
        type="button"
        onClick={this.onClick}>
          {mesa}
        </button>
      );
    })
  }
  </div>
    );
  }
}


export default TablesRectangle;