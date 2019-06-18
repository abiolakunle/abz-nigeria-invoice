import React from "react";

import ListQuotations from "./Components/ListQuotations";
import Quotation from "./Components/Quotation";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <Router>
        <Route exact path="/quotation/:id" component={Quotation} />
        <Route exact path="/quotation/" component={Quotation} />
        <Route exact path="/" component={ListQuotations} />
      </Router>
    </Provider>
  );
}

export default App;
