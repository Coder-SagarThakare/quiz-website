import React from "react";
import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
      <div className="input-field glass mb-3 d-flex align-items-center overflow-hidden ps-3 gap-2">
        <IoSearch className="search "/>
        <input type="input" placeholder="Search" className="bg-transparent text-light w-100 searchbar" />
    </div>
  );
}

export default SearchBar;
