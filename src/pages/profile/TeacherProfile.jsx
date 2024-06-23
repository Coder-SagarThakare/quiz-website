import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiPaths } from "../../constants";
import { get } from "../../services";
import { FaUserEdit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

function TeacherProfile() {
  const { user, setUser } = useAuth();
  const [edit, setEdit] = useState(false);

  async function fetchUserData() {
    try {
      let data = await get(apiPaths.TEACHER.SELF);

      setUser(data);
      console.log(data);
    } catch (err) { }
  }

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-3">

      {/* profile data card */}
      <div className="glass-effect d-flex align-items-center w-100 p-3">

        {/* profile photo div */}
        <div className="border p-1 rounded-pill overflow-hidden profile-img">
          {/* <img
            src={user.picture}
            alt={user.picture}
            className="w-100 h-100 rounded-pill"
          /> */}
        </div>

        {/* profile info */}
        <div className="border d-flex p-1 " >

          <div className="border ">

            {edit ? (
              <input type="text" defaultValue={user.name} />
            ) : (
              <p> {user.name} </p>
            )}
            <p> {user.email}</p>
            <p> {user.mobNo}</p>
          </div>

          <div className="border ">
            <div className="d-flex gap-2">
              <div>
                <Link to={user.github} target="_blank">
                  <FaGithub />{" "}
                </Link>
              </div>
              <div>
                <Link to={user.linkedin} target="_blank">
                  <FaLinkedin />{" "}
                </Link>
              </div>
            </div>
            <p>{user.gender}</p>
            {edit ? (
            <input type="date" value={user.birthDate.slice(0, 10)} />
          ) : (
            <p> {user.birthDate.slice(0, 10)}</p>
          )}
          </div>
        </div>
 
      </div>

      {/* delete below div */}
      <div className="d-flex w-100 p-3 gap-5 ">

        <div className=" ">
          <FaUserEdit size={50} onClick={() => setEdit(!edit)} />
          <br />
          Mr/Ms{" "}


          
          <p>Bio : {user.bio}</p>
          
          <p>Organization : {user.organization}</p>
          <p>Highest Education : {user.highestEducation}</p>
          <div className="d-flex gap-4">
            <p>College ID : </p>
            <img
              src={user.collegeIdProof}
              alt="college-id"
              style={{ width: "500px" }}
            />
          </div>

          <p>Role : {user.role}</p>
          <p>Teaching Experience : {user.teachingExperience}</p>
          <p>specialization : {user.specialization}</p>

          <p>Email verified : {user.isEmailVerified ? "yes" : "no"}</p>
          <p>isTeacherVerfied : {user.isTeacherVerfied ? "yes" : "no"}</p>
          <p>isPasswordUpdated : {user.isPasswordUpdated ? "yes" : "no"}</p>

          <p>Acoount created At : {user.createdAt.slice(0, 10)}</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
