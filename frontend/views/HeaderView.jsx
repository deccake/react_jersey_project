import React, { Component } from "react";
import logo from "../static/images/logo.svg";
import feed2 from "../static/images/feed2.jpg";
import feed3 from "../static/images/feed3.jpg";
import feed4 from "../static/images/feed4.jpg";
import feed1 from "../static/images/feed1.jpg";

const HeaderView = () => {
  return (
    <React.Fragment>
      <div className="row topHeader ">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-light border-bottom rl-mv-gb">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="sidebar-heading logo">
              <a href="#">
                <img src={logo} />
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div
                className="btn-group show navbar-nav ml-auto mt-2 mt-lg-0"
                style={{
                  background: "#fdfdfd",
                  borderRadius: 50
                }}
              >
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <img src={feed1} />
                  <span className="glyphicon glyphicon-chevron-down"></span>
                </button>

                <ul className="dropdown-menu custom-dp">
                  <li>
                    <a href="#" title="Select this card">
                      <img src={feed2} />
                      0123 4567 8912 3456
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Select this card">
                      <img src={feed3} />
                      0123 4567 8912 3456
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Select this card">
                      <img src={feed4} />
                      0123 4567 8912 3456
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderView;
