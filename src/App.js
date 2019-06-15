import React from "react";
import Header from "./Components/Page/Header";
import Footer from "./Components/Page/Footer";
import Main from "./Components/Page/Main";

import { Provider } from "./Context";

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
