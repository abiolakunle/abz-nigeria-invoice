import React, { Component } from "react";

import { Consumer } from "../../Context";

class Info extends Component {
  state = {
    company: "",
    quoteNo: "",
    date: new Date().toISOString().split("T")[0]
    //`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
  };

  componentWillReceiveProps(nextProps) {
    //set the items in state to props value recieved
    const { info } = nextProps;

    if (Object.keys(info).length) {
      this.setState({
        company: info.company,
        quoteNo: info.quoteNo,
        date:
          info.date !== undefined ? info.date.split("T")[0] : this.state.date
      });
    }
  }

  render() {
    return (
      <Consumer>
        {contextValue => {
          const { contextState } = contextValue;
          return (
            <React.Fragment>
              <div>{this.renderForm(contextState.dispatch)}</div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }

  onFormChange = (dispatch, event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        dispatch({
          type: "INFO",
          payload: this.state
        });
      }
    );
  };

  renderForm(dispatch) {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="from-group row">
            <label className="col-md-2">To:</label>
            <div className="col-md-9">
              <input
                type="text"
                name="company"
                value={this.state.company}
                onChange={this.onFormChange.bind(this, dispatch)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row">
            <label className="col-md-3">Quote No: </label>
            <div className="col-md-9">
              <input
                type="text"
                name="quoteNo"
                value={this.state.quoteNo}
                onChange={this.onFormChange.bind(this, dispatch)}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3">Date: </label>
            <div className="col-md-9">
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.onFormChange.bind(this, dispatch)}
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
