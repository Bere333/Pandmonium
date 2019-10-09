import React, { Component } from "react";

class InputIncreaseDecrease extends Component {
  state = {
    counter: 0
  };

  Increase = () => {
    if (this.state.counter >= 0) {
      this.setState({ counter: this.state.counter + 1 });
      this.props.ChangeQuantity(this.state.counter + 1);
    } else {
      this.setState({ counter: 0 });
    }
  };

  Decrease = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
      this.props.ChangeQuantity(this.state.counter - 1);
    } else {
      this.setState({ counter: 0 });
    }
  };

  render() {
    return (
      <div className="form-inc-dec">
        <button type="button" className="btn-inc-dec" onClick={this.Decrease}>
          -
        </button>
        <input
          type="number"
          className="pizza-input"
          value={this.state.counter}
        ></input>
        <button
          type="button"
          className="btn-inc-dec increase"
          onClick={this.Increase}
        >
          +
        </button>
      </div>
    );
  }
}

export default InputIncreaseDecrease;
