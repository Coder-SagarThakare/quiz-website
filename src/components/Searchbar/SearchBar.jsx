import React from "react";
import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="navbar-div">
      <div className="input-field">
        <IoSearch className="search"/>
        <input type="input" placeholder="Search" />
      </div>
    </div>
  );
}

export default SearchBar;
