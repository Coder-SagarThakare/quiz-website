import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Footer } from "../../components/";
import "../../styles/subcomponents.css";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { TbLogout2, TbLogin2 } from "react-icons/tb";
import SearchBar from "../searchbar/SearchBar";
import { MenuItem } from "../../constants";
import { manageToken } from "../../services";
import { useAuth } from "../../context/AuthContext";

function SagarSidebar({ children }) {
  console.log("in sidebar");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [isMobile, setMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    if (window.innerWidth < 760) {
      setMobile(!isMobile);
    } else {
      setIsOpen(!isOpen);
    }

    // const toggle = () => (window.innerWidth < 760) ? setMobile(!isMobile) : setIsOpen(!isOpen);
  };

  // return all menu of sidebar

  const AllMenus = () =>
    MenuItem.map((item, index) => (
      <NavLink
        to={item.path}
        key={index}
        className={`text-decoration-none rounded-2 d-flex justify-content-center align-items-center gap-3 menu 
        ${isOpen ? "p-2" : "p-3"}`}
      >
        <div className="primary-white d-flex align-items-center">
          {item.icon}
        </div>

        <div
          className={`menu-text primary-white position-relative w-100 align-items-center
           ${isOpen ? "d-flex" : "d-none"}`}
        >
          {item.name}
        </div>
      </NavLink>
    ));

  // return login/logout button according to scenario
  const IsUserLoggedIn = () => {
    return (
      <div
        className={`d-flex align-items-center  gap-3 cursor p-2 glass-effect  
            ${user ? "logout-btn" : "login-btn"} ${
          !isOpen && "justify-content-center"
        }`}
        onClick={handleUser}
        title={user ? `Logout as ${user.name}` : `Login`}
      >
        {user ? (
          <>
            <TbLogout2 size={25} />

            <span className={`${isOpen ? "d-flex" : "d-none"}`}>
              {user.name}
            </span>
          </>
        ) : (
          <>
            <TbLogin2 size={25} />{" "}
            <span className={`${isOpen ? "d-flex" : "d-none"}`}>Login</span>{" "}
          </>
        )}
      </div>
    );
  };

  // to handle user's token nad navigation
  const handleUser = () => {
    if (user) {
      manageToken("delete", "token");
      setUser(null);
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="d-flex ">
      <div
        style={{ width: isOpen ? "300px" : "50px " }}
        className={`glass-effect d-flex flex-column overflow-x-hidden mt-4  ${
          isMobile ? "mobile" : "desktop"
        } sidebar`}
      >
        <div
          className={`d-flex align-items-center p-3 pb-2 ${
            isOpen ? "justify-content-between" : "justify-content-center"
          }`}
        >
          <h3
            style={{ display: isOpen ? "block" : "none" }}
            className="cursor primary-white m-0 logo"
            onClick={() => navigate("/")}
          >
            Quizzy
          </h3>
          <FaBars size={25} className="cursor primary-white" onClick={toggle} />
        </div>
        {/* middle horizontal line */}

        <div
          className={`d-flex flex-column justify-content-between h-100 p-2 border-top ${
            isMobile ? "d-none" : "d-block"
          }`}
        >
          <div>
            <AllMenus />
          </div>

          <IsUserLoggedIn />
        </div>
      </div>

      <div className=" p-4 overflow-y-auto main overflow-x-hidden subcomponent w-100">
        <div className="d-flex align-items-center justify-content-between gap-2 py-2">
          <SearchBar />

          <FaBars size={25} className="burger-menu cursor primary-white "/>
        </div>
        <div className="glass-effect">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default SagarSidebar;
