import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../static/images/logo.svg";
import GithubLogo from "../static/images/github.png";

class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <NavLink class="navbar-item" to="/">
            <img src={Logo} width="50" height="100" alt="hacki" />
          </NavLink>
          {/* eslint ignore-next */}
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <NavLink to="/" class="navbar-item links">
              <span role="img" aria-labelledby="bolt">⚡ </span> Feed
            </NavLink>
            <NavLink to="/stand-ups" class="navbar-item">
              <span role="img" aria-labelledby="check">✅ </span> Stand ups
            </NavLink>
            <NavLink to="/call-to-code" class="navbar-item">
              <span role="img" aria-labelledby="mega">📣 </span> Call to code
            </NavLink>
            <NavLink to="/news" class="navbar-item">
              <span role="img" aria-labelledby="newspaper">📰 </span> News
            </NavLink>
            <NavLink to="/marketplace" class="navbar-item">
              <span role="img" aria-labelledby="box">📦 </span> Marketplace
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field">
                <input type="search" className="input" placeholder="Search "/>
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                    <button className="button is-white btn">
                        <img src={GithubLogo} style={{marginRight: "4px"}} alt="github"/> {" "} Sign in with Github
                    </button>
                </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
