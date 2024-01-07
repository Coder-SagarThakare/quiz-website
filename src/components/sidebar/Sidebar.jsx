import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { Footer } from "../../components/";
import '../../styles/subcomponents.css'


import { NavLink } from "react-router-dom";
import "./Sidebar.css";

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
      path: "/dashboard",
    },
    {
      name: "Subjects",
      icon: <MdSubject />,
      path: "/subjects",
    },
    {
      name: "About",
      icon: <FaUserAlt />,
      path: "/about",
    },
  ];

  return (
    <div className="container-div ">
      <div
        style={{ width: isOpen ? "250px" : "70px" }}
        className="sidebar "
      >
        <div className="top-section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo cursor primary-white"
            onClick={openHome}
          >
            Quiz Time
          </h1>
          <div
            // style={{ marginLeft: isOpen ? "70px" : "0px", cursor: "pointer" }}
            className="bars cursor primary-white mx-2"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {MenuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon primary-white ">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link-text primary-white"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main
        className=" p-4 overflow-y-auto main overflow-x-hidden subcomponent "
      ><div className="ball-1"></div>
        <div className="ball-2"></div>
        <div className="ball-3"></div>
        <SearchBar />
        <div className="glass">

          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
