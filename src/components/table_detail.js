import React, { Component } from "react";

import AddRow from "./table_components/a_row";

class TableDetail extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Detalle</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <AddRow
            completeArray={this.props.completeArray}
          />
        </tbody>
      </table>
    );
  }
}

export default TableDetail;
