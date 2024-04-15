import React from "react";
import { TbLogin2, TbLogout2 } from "react-icons/tb";

function IsUserLoggedIn({ user, isOpen, handleUser }) {
  console.log("in is userlogged in");

  return (
    <div
      className={`d-flex align-items-center  gap-3 cursor p-2 glass-effect  
              ${user ? "logout-btn" : "login-btn"} ${
        !isOpen && "justify-content-center"
      }`}
      onClick={()=>handleUser()}
      title={user ? `Logout as ${user.name}` : `Login`}
    >
      {user ? (
        <>
          <TbLogout2 size={25} />

          <span className={`${isOpen ? "d-flex" : "d-none"}`}>{user.name}</span>
        </>
      ) : (
        <>
          <TbLogin2 size={25} />{" "}
          <span className={`${isOpen ? "d-flex" : "d-none"}`}>Login</span>{" "}
        </>
      )}
    </div>
  );
}

export default React.memo(IsUserLoggedIn);
