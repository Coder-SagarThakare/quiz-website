import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

function SearchBar({ onSearch, debounceTime = 1000, ...props }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      if (onSearch)
        onSearch(value);
    }, debounceTime);

    setDebounceTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return (
    <div className="w-100 glass-effect d-flex align-items-center overflow-hidden ps-3 gap-2">
      <Search className="search" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-100 text-light p-2 border-0"
        style={{ outline: "none" }}
        value={searchTerm}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
}

export default SearchBar;
