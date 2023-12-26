import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import "./SidebarStyle.css";

import SearchBar from "../searchbar/SearchBar";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openHome = () => {
    window.location.href = "/";
  };

  const MenuItem = [
    {
      name: "Homepage",
      icon: <RiHomeHeartFill />,
      path: "/",
    },
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      path: "/Dashboard",
    },
    {
      name: "About",
      icon: <FaUserAlt />,
      path: "/About",
    },
  ];

  return (
    <div className="container-div">
      <div
        style={{ width: isOpen ? "20%" : "5%" }}
        className="sidebar bg-primary1"
      >
        <div className="top-section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo cursor"
            onClick={openHome}
          >
            Quiz Time
          </h1>
          <div
            // style={{ marginLeft: isOpen ? "70px" : "0px", cursor: "pointer" }}
            className="bars cursor"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {MenuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon primary-white">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link-text primary-white"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="main page-component-bgcolor">
        <SearchBar />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
