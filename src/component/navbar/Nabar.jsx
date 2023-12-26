import React from "react";
import "./navbar.css";
import { IoSearch } from "react-icons/io5";


function Nabar() {
  return (
    <div className="navbar-div">
      <div className="input-field">
        <IoSearch className="search"/>
        <input type="input" placeholder="Search" />
      </div>
    </div>
  );
}

export default Nabar;
