import React, { Component } from "react";
import Button from "../Button";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        {" "}
        <nav className="navbar navbar-expand-lg navbar-light mb-4 py-4">
          <div
            className="container  "
            style={{ display: "flex", alignItems: "center" }}
          >
            <a className="navbar-brand fw-bold fs-2" href="#">
              Atomic
            </a>
            <button
              className="navbar-toggler px-2 py-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
              </ul>

              <Button
                color="bg-success"
                text="text-white"
                name="Login"
                styl="rounded-pill"
              />
              <Button
                color="bg-light"
                text="text-dark"
                name="Signup"
                styl="rounded-pill mx-2"
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
