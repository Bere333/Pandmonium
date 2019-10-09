import React, { Component } from "react";
import TableDetail from "../components/table_detail";
import FormTotal from "../components/total_form";

class AccountPerGuest extends Component {
  render() {
    return (
      <div>
        <div className="table-detail-guest">
          <TableDetail completeArray={this.props.completeArray}/>
        </div>

        <FormTotal classCSS="total" />
      </div>
    );
  }
}

export default AccountPerGuest;
