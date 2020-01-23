import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Redux
import store from "./redux/store";

// Components
import Nav from "./commons/Nav";
import Footer from "./commons/Footer";

import "./static/css/bulma.css";
import "./static/scss/app.scss";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <Nav />
            <Footer />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
