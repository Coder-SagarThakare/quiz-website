import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar({ props }) {
  return (
    <div className="w-100 glass-effect d-flex align-items-center overflow-hidden ps-3 gap-2 ">
      <IoSearch className="search " />
      <input
        type="input"
        placeholder="Search"
        className="bg-transparent w-100 text-light p-2 border-0 "
        style={{ outline: "none" }}
        {...props}
      />
    </div>
  );
}

export default SearchBar;
