import React, { Component } from "react";
import logo1 from "../../images/logo1.png";
import "../Navbar/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo1} alt="Logo" />
        </div>
      </div>
    );
  }
}
