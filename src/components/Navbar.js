import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import kimmons from "../pictures/kimmons.jpg";
import Login from "./Login";

export default function Navbar() {
  return (
    <nav>
      <img className="navbar--logo " src={kimmons} alt="kimmons logo" />
      <Link to="/Home" className="nav--text">
        Home
      </Link>
      {/* <Login className="nav--right" /> */}
      <Link to="/About" className="nav--right">
        About
      </Link>
      <Link to="/Gaming" className="nav--right">
        Gaming
      </Link>
      <Link to="/Syllabus" className="nav--right">
        Syllabus
      </Link>
      <Link to="/Writing" className="nav--right">
        Writing
      </Link>
      <div className="form-page">
        <Link to="/Form" className="nav--right">
          Form
        </Link>
      </div>
    </nav>
  );
}
