import React, { Component } from "react";
import Pagar from "../components/pagar";

class FormTotal extends Component {
  render() {
    return (
      <form className={this.props.classCSS}>
        <label>TOTAL $</label>
        <span className="total-input">
          110
          <output name="x" htmlFor="a b"></output>
        </span>
        <Pagar btntext="PAGAR" ruta={'/AccountList'}/>
      </form>
    );
  }
}

export default FormTotal;
