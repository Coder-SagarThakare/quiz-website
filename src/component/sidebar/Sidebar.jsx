import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Nabar from "../navbar/Nabar";
import Home from "../home/Home";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openHome = () =>{
    window.location.href="/";
    <Home />
  }
  const MenuItem = [
    // {
    //     name: "Home",
    //     icon: <FaUserAlt />,
    //     path: "/",
    //   },
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
          <h1 style={{ display: isOpen ? "block" : "none",cursor:"pointer"}} className="logo"  onClick={openHome}>
            Quiz time
          </h1>
          <div style={{ marginLeft: isOpen ? "100px" : "12px"}} className="bars">
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
        <Nabar className="navbar" />
        {/* <h1>this is main </h1> */}
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
