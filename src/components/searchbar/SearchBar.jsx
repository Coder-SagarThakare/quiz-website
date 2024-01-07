import React from "react";
import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="navbar-div ">
      <div className="input-field bg-primary1">
        <IoSearch className="search bg-primary1"/>
        <input type="input" placeholder="Search" className="bg-primary1"/>
      </div>
    </div>
  );
}

export default SearchBar;
