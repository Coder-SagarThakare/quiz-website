import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Nabar from "../navbar/Nabar";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const openHome = () =>{
    window.location.href="/"
  }

  const MenuItem = [
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
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
        <div className="top-section">
           <h1 style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} className="logo" onClick={openHome}>
              Quiz time
            </h1>
          <div style={{ marginLeft: isOpen ? "70px" : "0px", cursor: "pointer" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {MenuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className="main">
        <Nabar />
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
