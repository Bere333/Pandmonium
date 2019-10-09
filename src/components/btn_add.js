import React, { Component } from "react";
import ItemList from "./item-list";

class BtnAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orden: []
    };
  }

  addOrden = e => {
    e.preventDefault();
    // localStorage.setItem("type", JSON.stringify(this.props.valueType));
    // localStorage.setItem("option", JSON.stringify(this.props.valueOption));
    // localStorage.setItem("quantity", JSON.stringify(this.props.quantity));
    // localStorage.setItem("coment", JSON.stringify(this.props.coment));
    let { orden } = this.state;
    orden.push({
      type: this.props.valueType,
      option: this.props.valueOption,
      quantity: this.props.quantity
    });

    this.setState({
      orden: orden
    });
    //AQUI SE GUARDA EN LOCAL STORAGE UN OBJETO CADA QUE DAS CLICK EN AÑADIR A LA ORDEN
    localStorage.setItem("orden", JSON.stringify(this.state.orden));
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className={this.props.className}
          onClick={this.addOrden}
        >
          {this.props.btntext}
        </button>

        <ItemList itemName={this.state.orden} />
        {/* itemName cambia según el nombre del producto que se añada */}
      </div>
    );
  }
}

export default BtnAdd;
