import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {  apiPaths } from "../../constants";
import { get } from "../../services";
import { FaUserEdit } from "react-icons/fa";

function TeacherProfile() {
  const { user, setUser } = useAuth();
  const [edit, setEdit] = useState(false);

  async function fetchUserData() {
    try {
      let data = await get(apiPaths.TEACHER.SELF);

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
      <div className="d-flex w-100 p-3 gap-5 ">
        <div className="border p-1 rounded-pill overflow-hidden profile-img">
          <img
            src={user.picture}
            alt={user.picture}
            className="w-100 h-100 rounded-pill"
          />
        </div>
        <div className=" ">
          <FaUserEdit size={50} onClick={() => setEdit(!edit)} /><br/>

          Mr/Ms {edit ? <input type="text" defaultValue={user.name}/> : <p> {user.name} </p>}

          <p>Email-ID : {user.email}</p>
          <p>Mobile : {user.mobNo}</p>
          <p>Bio : {user.bio}</p>
          <p>Birth Date : {user.birthDate.slice(0, 10)}</p>
          <p>Organization : {user.organization}</p>
          <p>Highest Education : {user.highestEducation}</p>
          <input type="date" value={user.birthDate.slice(0, 10)} />

          <div className="d-flex gap-4">
            <p>College ID : </p>
            <img
              src={user.collegeIdProof}
              alt="college-id"
              style={{ width: "500px" }}
            />
          </div>

          <p>Email verified : {user.isEmailVerified ? "yes" : "no"}</p>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
