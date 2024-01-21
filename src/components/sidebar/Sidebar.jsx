import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { Footer } from "../../components/";
import '../../styles/subcomponents.css'
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { TbLogout2 } from "react-icons/tb";
import SearchBar from "../searchbar/SearchBar";

function Sidebar({ children }) {
  console.log('in sidebar');
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
      name: "Interview",
      icon: "INT",
      path: "/interview",
    },
    {
      name: "About",
      icon: <FaUserAlt />,
      path: "/about",
    },
  ];

  const allMenus = () =>
    MenuItem.map((item, index) => (
      <NavLink to={item.path} key={index} className="link rounded-1">
        <div className="icon primary-white ">{item.icon}</div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link-text primary-white"
        >
          {item.name}
        </div>
      </NavLink>
    ))


  return (
    <div className="d-flex ">
      <div
        style={{ width: isOpen ? "250px" : "70px" }}
        className="p-3 glass-effect sidebar d-flex flex-column"
      >
        <div className="d-flex align-items-center justify-content-between ">
          <h3
            style={{ display: isOpen ? "block" : "none" }}
            className="cursor primary-white m-0 logo"
            onClick={openHome}
          >
            Quizzy
          </h3>
          <FaBars className="bars cursor primary-white" onClick={toggle} />

        </div>
        {/* middle horizontal line */}
        <div className="position-absolute w-100 start-0 border mt-5"
          style={{ opacity: "0.3" }}
        ></div>

        <div className=" d-flex flex-column justify-content-between mt-4 h-100">
          <div>
            {allMenus()}
          </div>

          <div className="d-flex align-items-center gap-3 cursor border-top p-2 rounded logout sticky-top ">
            <TbLogout2 size={25} />
            <span>
              Logout
            </span>
          </div>
        </div>
      </div>

      <div
        className=" p-4 overflow-y-auto main overflow-x-hidden subcomponent "
      ><div className="ball-1"></div>
        <div className="ball-2"></div>
        <div className="ball-3"></div>
        <SearchBar />
        <div className="glass-effect">

          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
