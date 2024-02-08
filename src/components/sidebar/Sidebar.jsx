import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RiHomeHeartFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { Footer } from "../../components/";
import '../../styles/subcomponents.css'
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { TbLogout2 } from "react-icons/tb";
import SearchBar from "../searchbar/SearchBar";
import { TbLogin2 } from "react-icons/tb";


function Sidebar({ children }) {
  console.log('in sidebar');
  const navigate = useNavigate()
  const [isMobile, setMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    if (window.innerWidth < 760) {
      setMobile(!isMobile);
    } else {
      setIsOpen(!isOpen);
    }

    const toggle = () => (window.innerWidth < 760) ? setMobile(!isMobile) : setIsOpen(!isOpen);

    // console.log(isOpen);
    // setMobile(!isMobile);
  };

  const toggleIfMobile = () => {
    console.log(isMobile);
    // setIsMobileToggle(!isMobileToggle)
    setMobile(!isMobile);
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

  const AllMenus = () =>
    MenuItem.map((item, index) => (
      <NavLink to={item.path} key={index} className="link rounded-1 ">
        <div className="icon primary-white ">{item.icon}</div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link-text primary-white position-relative w-100"
        >
          {item.name}
          {index === 3 && (
            <span className="badge bg-info position-absolute top-0 ">Beta</span>
          )}
          {index === 1 && (
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          )}
        </div>
      </NavLink>
    ))


  return (
    <div className="d-flex ">
      <div
        style={{ width: isOpen ? "300px" : "70px" }}
        className={`glass-effect sidebar d-flex flex-column overflow-x-hidden mt-4  ${isMobile ? "mobile" : "desktop"
          }`}
      >
        <div className="d-flex align-items-center justify-content-between p-3 pb-2 ">
          <h3
            style={{ display: isOpen ? "block" : "none" }}
            className="cursor primary-white m-0 logo"
            onClick={openHome}
          >
            Quizzy
          </h3>
          <FaBars size={25} className="bars cursor primary-white" onClick={toggle} />

        </div>
        {/* middle horizontal line */}

        <div
          className={`d-flex flex-column justify-content-between h-100 p-2 border-top ${isMobile ? "d-none" : "d-block"
            }`}
        >
          <div>
            <AllMenus/>
          </div>

          {false ?
            <div className="d-flex align-items-center gap-3 cursor p-2 login-btn glass-effect"
              onClick={() => navigate('/signin')}>
              <TbLogin2 size={25} />
              <span>
                Login
              </span>
            </div>
            :
            <div className="d-flex align-items-center gap-3 cursor p-2 logout-btn glass-effect" >

              <TbLogout2 size={25} />
              <span>
                Logout
              </span>
            </div>}
        </div>
      </div>

      <div
        className=" p-4 overflow-y-auto main overflow-x-hidden subcomponent w-100"
      ><div className="ball-1"></div>
        <div className="ball-2"></div>
        <div className="ball-3"></div>

        {isMobile ? (
          <>
            <FaBars
              size={25}
              className="bars cursor primary-white"
              onClick={toggleIfMobile}
            />
            <span>{children.name}</span>
          </>
        ) : (
          <div></div>
        )}

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
