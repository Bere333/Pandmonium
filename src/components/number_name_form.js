import React, { Component } from "react";
import Input from "../components/input";
//import InputSpiner from "../components/input-spiner";
import BtnGreen from "../components/btn_green";

class FormNameNumber extends Component {
  state = {
    num: 0,
    name: ""
  };

  onChangeName = e => {
    this.setState({
      name: e.target.value,
      number: e.target.value
    });
  };

  onChange = e => {
    this.setState({
      num: e.target.value
    });
  };

  render() {
    return (
      <form className={this.props.classCSS}>
        <label>No. Personas</label>
        <Input
          classCSS="input-spiner"
          typeInput="number"
          onChange={this.onChange}
        />
        <br></br>
        <label>Nombre del cliente</label>
        <Input
          classCSS="input-name"
          typeInput="text"
          onChange={this.onChangeName}
        />
        <br></br>
        <BtnGreen
          btntext="ABRIR MESA"
          name={this.state.name}
          num={this.state.num}
          nametable={this.props.nametable}
          ruta={"/Menu"}
        />
      </form>
    );
  }
}

export default FormNameNumber;
