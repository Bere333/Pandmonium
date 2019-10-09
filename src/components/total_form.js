import React, { Component } from "react";
import BtnGreen from "../components/btn_green";

class FormTotal extends Component {
  render() {
    return (
      <form className={this.props.classCSS}>
        <label>TOTAL $</label>
        <span className="total-input">
          110
          <output name="x" htmlFor="a b"></output>
        </span>
        <BtnGreen btntext="PAGAR" />
      </form>
    );
  }
}

export default FormTotal;
