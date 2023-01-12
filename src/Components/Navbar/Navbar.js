import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="d-flex navbar-brand">
          <img
            style={{
              margin: "0 10px 0 0",
            }}
            src="https://cdn-icons-png.flaticon.com/512/3595/3595458.png"
            alt="pizza-logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Delivero
        </a>
        <div className="d-flex text-light link-container">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/cart"}>
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
