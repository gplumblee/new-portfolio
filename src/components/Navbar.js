import React from "react";

export default ()=>{
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="./images/GP-logo.svg"
            width="120"
            height="48"
            className="d-inline-block align-top"
            alt="GP Web Design"
          />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }

