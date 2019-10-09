import React, { Component } from "react";

class AddRow extends Component {
  render() {
    return (
      <tr>
        
        <td>{this.props.completeArray}</td>
        {/* {this.props.completeArray.map((x,index)=>{
          return(<p key={index}>{x}</p>);
        })} */}

        
      </tr>
    );
  }
}

export default AddRow;
