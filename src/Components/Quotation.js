import React from "react";

import Footer from "./Page/Footer";
import Header from "./Page/Header";
import Main from "./Page/Main";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Quotation = props => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Route exact path="/quotation/:id" component={Main} />
        <Route exact path="/quotation" component={Main} />
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default Quotation;
