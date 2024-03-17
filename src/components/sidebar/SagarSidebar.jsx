import React, { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Footer } from "../../components/";
import "../../styles/subcomponents.css";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
// import { TbLogout2, TbLogin2 } from "react-icons/tb";
import SearchBar from "../searchbar/SearchBar";
import { MenuItem, constants } from "../../constants";
import { manageToken } from "../../services";
import { useAuth } from "../../context/AuthContext";
import IsUserLoggedIn from "../IsUserLoggedIn";

// Return all menu of sidebar
const AllMenus = React.memo(({ isOpen, view = undefined, setIsOpen }) => {
  return (
    <div className={`${view && "d-flex flex-column gap-3"}`}>
      {MenuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          title={item.name}
          className={`text-decoration-none rounded-2 d-flex justify-content-center align-items-center gap-3 menu 
        ${isOpen ? "p-2" : "p-3"} `}
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
        onClick={() => navigate("/")}
      >
        {constants.WEBAPP_TITLE}
      </h3>
      <FaBars
        size={25}
        className="cursor primary-white"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
});

function SagarSidebar({ children }) {
  console.log("in sidebar");
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // to handle user's token and navigation
  const handleUser = useCallback(() => {
    if (user) {
      manageToken("delete", "token");
      setUser(null);
      manageToken("get", "token");
    } else {
      navigate("/signin");
    }
  }, [user]);

  return (
    <div className={`d-flex`}>
      <div
        style={{ width: isOpen ? "300px" : "50px " }}
        className={`glass-effect d-flex flex-column overflow-x-hidden mt-4 sidebar`}
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} navigate={navigate} />

        <div
          className={`d-flex flex-column justify-content-between h-100 p-2 border-top `}
        >
          <AllMenus isOpen={isOpen} setIsOpen={setIsOpen} />

          <IsUserLoggedIn user={user} isOpen={isOpen} handleUser={handleUser} />
        </div>
      </div>

      <div className=" p-4 overflow-y-auto main overflow-x-hidden subcomponent w-100 ">
        <div
          className={`d-flex align-items-center justify-content-between gap-2 py-2 border-0 
           `}
        >
          <SearchBar />

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
        {/* sidebar  */}
        <div className="glass-effect" id="subcomponent-body">
          {children}
        </div>  
        <Footer />
      </div>

{/* mob view sidebar  */}
      {isOpen && (
        <div
          className={`mob-view-menu w-100 vh-100 glass-effect p-4 d-flex`}
          style={{ zIndex: "20" }}
        >
          <Header isOpen={isOpen} setIsOpen={setIsOpen} navigate={navigate} />
          <AllMenus isOpen={true} view={"mobile"} setIsOpen={setIsOpen} />
          <IsUserLoggedIn isOpen={isOpen} handleUser={handleUser}/>
        </div>
      )}

    </div>
  );
}

export default React.memo(SagarSidebar);
