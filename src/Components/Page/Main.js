import React, { Component } from "react";
import Info from "../Content/Info";
import Table from "../Content/Table";
import Summary from "../Content/Summary";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Info />
          <Table />
          <Summary />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
