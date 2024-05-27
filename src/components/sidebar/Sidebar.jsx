import React, { useCallback } from "react";
import { FaBars } from "react-icons/fa";
import "../../styles/subcomponents.css";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuItem, CONSTANTS, CLIENT_PATHS } from "../../constants";
import { useAuth } from "../../context/AuthContext";
import IsUserLoggedIn from "../IsUserLoggedIn";

// Return all menu of sidebar
const AllMenus = React.memo(({ isOpen, view = undefined, setIsOpen, role }) => {
  return (
    <div className={`${view && "d-flex flex-column gap-3"}`}>
      {MenuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          title={item.name}
          className={`text-decoration-none rounded-2 d-flex justify-content-center align-items-center gap-3 menu
          ${
            role
              ? item.access.includes(role)
                ? ""
                : "d-none"
              : item.access.includes(CONSTANTS.ROLE.STUDENT)
              ? ""
              : "d-none"
          } 
          ${isOpen ? "p-2" : "p-3"} 
          `}
          onClick={() => {
            view && setIsOpen(!isOpen);
          }}
        >
          <div className="primary-white d-flex align-items-center">
            {item.icon}
          </div>

          <div
            className={`menu-text primary-white position-relative w-100 align-items-center ${
              isOpen ? "d-flex " : "d-none"
            }`}
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
});

// Header section of Sidebar
const Header = React.memo(({ isOpen, setIsOpen, navigate }) => {
  return (
    <div
      className={`d-flex align-items-center p-3 pb-2 ${
        isOpen ? "justify-content-between" : "justify-content-center"
      }`}
    >
      <h3
        className={`cursor primary-white m-0 logo user-select-none ${
          isOpen ? "d-block" : "d-none"
        }`}
        onClick={() => navigate(CLIENT_PATHS.HOME)}
      >
        {CONSTANTS.WEBAPP_TITLE}
      </h3>
      <FaBars
        size={25}
        className="cursor primary-white"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
});

function Sidebar({ isOpen, setIsOpen }) {
  console.log("in sidebar");

  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  // to handle user's token and navigation
  const handleUser = useCallback(() => {
    if (user) {
      localStorage.removeItem(CONSTANTS.TOKEN);
      setUser(null);
      navigate(CLIENT_PATHS.HOME);
    } else {
      navigate(CLIENT_PATHS.SIGNIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={`d-flex `}>
      <div
        style={{ width: isOpen ? "275px" : "50px " }}
        className={`glass-effect d-flex flex-column overflow-x-hidden sidebar`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} navigate={navigate} />

        <div
          className={`d-flex flex-column justify-content-between p-2 border-top h-100`}
        >
          <AllMenus isOpen={isOpen} setIsOpen={setIsOpen} role={user?.role} />
          <IsUserLoggedIn user={user} isOpen={isOpen} handleUser={handleUser} />
        </div>

        {!isOpen && (
          <FaBars
            size={25}
            className="burger-menu cursor primary-white"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      {/* mob view sidebar  */}
      {isOpen && (
        <div
          className={`mob-view-menu w-100 vh-100 glass-effect p-4 d-flex`}
          style={{ zIndex: "20" }}
        >
          <Header isOpen={isOpen} setIsOpen={setIsOpen} navigate={navigate} />
          <AllMenus
            isOpen={true}
            view={"mobile"}
            setIsOpen={setIsOpen}
            role={user?.role}
          />
          <IsUserLoggedIn isOpen={isOpen} handleUser={handleUser} />
        </div>
      )}
    </div>
  );
}

export default React.memo(Sidebar);
