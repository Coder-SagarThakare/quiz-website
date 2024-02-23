import React from "react";
import "./SearchBar.css";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="input-field glass-effect d-flex align-items-center overflow-hidden ps-3 gap-2 ">
      <IoSearch className="search " />
      <input type="input" placeholder="Search" className="bg-transparent w-100 text-light" />
    </div>
  );
}

export default SearchBar;
