import React from "react";

import { Consumer } from "../../Context";

const Footer = () => {
  return (
    <Consumer>
      {contextValue => {
        const { sendInvoice } = contextValue;
        return (
          <React.Fragment>
            <div className="footer">
              <div className="row">
                <div className="col-md-2">Cat</div>
                <div className="col-md-2">Komatsu</div>
                <div className="col-md-2">Perkins</div>
              </div>
            </div>
            <div className="row my-5">
              <div className="btn-group col-md-12">
                <div className="btn btn-light col-md-6">Back</div>
                <div className="btn btn-primary col-md-6" onClick={sendInvoice}>
                  Create
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Footer;
