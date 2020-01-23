import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Nav from "./commons/Nav";
import Footer from "./commons/Footer";

import "./static/css/bulma.css";
import "./static/scss/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Nav />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
