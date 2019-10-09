import React, { Component } from "react";
import Navbar from "../navbar";
import GreenRectangle from "../green_rectangle";
import FormNameNumber from "../number_name_form";
import TableBar from "../tables";

class Places extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
  }

  changeTitle = (title, background) => {
    if (background == null) {
      this.setState({
        number: title
      });
    } else {
      this.setState({
        number: null
      });
    }
  };

  render() {
    return (
      <div className="places-screen">
        <Navbar />

        <div className="tables-bars">
          <div className="bar">
            <TableBar
              number="1"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="2"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="3"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
          </div>

          <div className="tables">
            <TableBar
              number="MESA 1"
              CSSclass="table-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="MESA 2"
              CSSclass="table-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="MESA 3"
              CSSclass="table-btn"
              changeTitle={this.changeTitle}
            />
          </div>

          <div className="bar">
            <TableBar
              number="4"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="5"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="6"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="7"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="8"
              CSSclass="bars-btn"
              changeTitle={this.changeTitle}
            />
          </div>

          <div className="tables">
            <TableBar
              number="MESA 4"
              CSSclass="table-btn"
              changeTitle={this.changeTitle}
            />
            <TableBar
              number="MESA 5"
              CSSclass="table-btn"
              changeTitle={this.changeTitle}
            />
          </div>
          <TableBar
            number="Para llevar"
            CSSclass="to-go-btn"
            changeTitle={this.changeTitle}
          />
        </div>

        <GreenRectangle
          classCSS="rectangle-tabar-selection"
          nametable={this.state.number}
        />
        <FormNameNumber classCSS="people-name-number" nametable={this.state.number}/>
      </div>
    );
  }
}
export default Places;
