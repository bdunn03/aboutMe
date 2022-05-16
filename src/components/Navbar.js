import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import kimmons from "../pictures/kimmons.jpg";

export default function Navbar() {
  return (
    <nav>
      <img className="navbar--logo " src={kimmons} alt="kimmons logo" />
      <Link to="/Home" className="nav--text">
        Home
      </Link>
      <Link to="/About" className="nav--right">
        About
      </Link>
      <Link to="/Gaming" className="nav--right">
        Gaming
      </Link>
      <Link to="/Syllabus" className="nav--right">
        Syllabus
      </Link>
    </nav>
  );
}
