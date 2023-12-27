import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { Footer } from "../../components/";

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
      name: "SubjectAreas",
      icon: <MdSubject />,
      path: "/SubjectAreas",
    },
    {
      name: "About",
      icon: <FaUserAlt />,
      path: "/About",
    },
  ];

  return (
    <div className="container-div ">
      <div
        style={{ width: isOpen ? "20%" : "5%" }}
        className="sidebar bg-primary1"
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
            className="bars cursor primary-white"
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
        className=" page-component-bgcolor p-4 overflow-y-auto main"
        style={{ height: "91vh" }}
      >
        <SearchBar />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Sidebar;
