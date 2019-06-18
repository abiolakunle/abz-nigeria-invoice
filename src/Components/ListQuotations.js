import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

class ListQuotations extends Component {
  state = {
    quotations: []
  };
  render() {
    let quotationList = this.state.quotations.map(quotation => {
      return (
        <li
          key={quotation.quotationId}
          className="list-group-item  justify-content-between align-items-center"
        >
          <Link to={`/quotation/${quotation.quotationId}`}>
            <div className="row">
              <div className="col-md-3">
                <span className="font-weight-bold">Quote Number: </span>
                {quotation.quoteNo}
              </div>
              <div className="col-md-3">
                <span className="font-weight-bold">Company: </span>
                {quotation.company}
              </div>
              <div className="col-md-3">
                <span className="font-weight-bold">Date: </span>
                {quotation.date}
              </div>
              <div className="col-md-3">
                <span className="badge badge-primary badge-pill">
                  {quotation.table.length}
                </span>
              </div>
            </div>
          </Link>
        </li>
      );
    });
    return (
      <React.Fragment>
        <ul className="list-group">{quotationList}</ul>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getQuotations();
  }

  getQuotations() {
    axios
      .get("https://localhost:44310/api/Quotation")
      .then(response => {
        this.setState({
          quotations: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default ListQuotations;
