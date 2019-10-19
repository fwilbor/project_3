import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/material-kit.min.css";

function NavBar() {
  return (
    <nav
      class="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg "
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div class="container">
        <div class="navbar-translate">
          <Link className="navbar-brand" to="/">
            <b>JBOT</b>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="dropdown nav-item">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                {/* TODO: Update Icons and Links*/}
                  <i class="material-icons">apps</i> About
                </a>
                <div class="dropdown-menu dropdown-with-icons">
                  <a href="/" class="dropdown-item">
                    <i class="material-icons">layers</i> Our Philosophy
                  </a>
                  <a href="/" class="dropdown-item">
                    <i class="material-icons">line_style</i> About Us
                  </a>
                  <a href="/" class="dropdown-item">
                    <i class="material-icons">content_paste</i> COOPA Documentation
                  </a>
                </div>
              </li>
              <li class="dropdown nav-item">
              <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                <i class="material-icons">view_day</i> Parents
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a href="../sections.html#headers" class="dropdown-item">
                  <i class="material-icons">dns</i> Parent Dashboard
                </a>             
                </div>
              </li>
              <li class="dropdown nav-item">
              <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                <i class="material-icons">view_day</i> Kids
              </a>
              <div class="dropdown-menu dropdown-with-icons">
                <a href="../sections.html#headers" class="dropdown-item">
                  <i class="material-icons">dns</i> Kids Dashboard
                </a>             
                </div>
              </li>
            </ul>
          </div>

        </div>     
    </nav>
  );
}

export default NavBar;
