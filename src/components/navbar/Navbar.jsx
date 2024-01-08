import React from "react";
import logo from "../../images/org_logo.png";
import { HiMiniUserCircle } from "react-icons/hi2";
import "./Navbar.css";
import '../../styles/global.css'

function Navbar() {
  return (
    <div className=" d-flex justify-content-between px-5 align-items-center shadow-lg user-select-none navbar">
      <div className="h-100 d-flex align-items-center ">
        <img className="h-75" src={logo} alt="logo"></img>
      </div>
      <div className="d-flex gap-4 align-items-center">
        <h5 className="m-0 cursor underline">About us</h5>
        <h5 className="m-0 cursor underline">Contact</h5>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-sm btn-outline-warning">
            Register
          </button>
          <button type="button" className="btn btn-sm btn-outline-primary">
            login
          </button>
        </div>
        {/* <HiMiniUserCircle size={40}/> */}
      </div>
    </div>
  );
}

export default Navbar;
