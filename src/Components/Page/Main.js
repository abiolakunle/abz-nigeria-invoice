import React, { Component } from "react";
import Info from "../Content/Info";
import Table from "../Content/Table";
import Summary from "../Content/Summary";

import { Consumer } from "../../Context";

import axios from "axios";

class Main extends Component {
  state = {
    info: {},
    table: []
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Consumer>
            {contextValue => {
              const { contextState } = contextValue;

              console.log(this.state.info);
              return (
                <React.Fragment>
                  <Info
                    key={this.state.info}
                    info={this.state.info}
                    dispatch={contextState.dispatch}
                  />
                  <Table table={this.state.table} />
                </React.Fragment>
              );
            }}
          </Consumer>
          <Summary />
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    /* const id = this.props.match.params.id;
    if (id !== null) {
      this.setState({
        routeParam: id
      });
    } */
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://localhost:44310/api/Quotation/${id}`)
      .then(response => {
        const { quotationId, quoteNo, company, date, table } = response.data;
        const info = Object.assign(
          {},
          {
            quotationId,
            quoteNo,
            company,
            date
          }
        );
        this.setState({
          info,
          table
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default Main;
