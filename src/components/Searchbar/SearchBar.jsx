import React from "react";
import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function Nabar() {
  return (
    <div className="navbar-div">
      <div className="input-field">
        <IoSearch className="search"/>
        <input type="input" placeholder="Search" />
      </div>
      <div className="start-button">
        <button type="button">Start Quiz</button>
      </div>
      <div className="profile">
        {/* <img src={require('')} alt="Profile"/> */}
        <FaUserCircle className="user-icon"/>
        <p className="username">user name</p>
      </div>
    </div>
  );
}

export default Nabar;
