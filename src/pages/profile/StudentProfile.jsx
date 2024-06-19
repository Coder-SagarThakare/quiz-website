import React, { useEffect } from "react";
import { CONSTANTS, apiPaths } from "../../constants";
import { get } from "../../services";
import { useAuth } from "../../context/AuthContext";

function StudentProfile() {
  const { user, setUser } = useAuth();

  async function fetchUserData() {
    try {
      let data;
      if (user.role === CONSTANTS.ROLE.STUDENT) {
        data = await get(apiPaths.STUDENT.SELF);
      } else {
        data = await get(apiPaths.TEACHER.SELF);
      }

      setUser(data);
      console.log(data);
    } catch (err) {}
  }

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex w-100 p-3 gap-5">
        <div className="border p-1 w-25 rounded-pill overflow-hidden">
          <img src={user.picture} alt={user.picture} className="w-100 rounded-pill" />
        </div>
        <div className=" w-75">
          <p>Name : {user.name}</p>
          <p>Email-ID : {user.email}</p>
          <p>Bio : {user.bio}</p>
          <p>Email verified : {user.isEmailVerified ? "yes" : "no"}</p>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
