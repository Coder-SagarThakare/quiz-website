import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiPaths } from "../../constants";
import { get } from "../../services";
import { FaUserEdit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { Cake, Mail, Phone, User } from "lucide-react";
import { Button } from "../../components";

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
    <div className="p-3 d-block">

        <div className="d-flex justify-content-end border">
        {edit ?
          <Button title="Save" style={{width: "100px"}} className={"bg-info"} onClick={() => setEdit(!edit)}/>:
          <Button title="Edit"  style={{width: "100px"}} className={"bg-primary"} onClick={() => setEdit(!edit)} /> 
        }
        </div>

      {/* profile data card */}
      <div className="glass-effect row align-items-center justify-content-between p-3 gx-0 border ">
        {/* profile photo div */}
        <div className=" col-12 col-lg-2 text-center border ">
          <img  
            src={user.picture}
            alt={user.picture}
            className="w-100 h-100 rounded-pill profile-img float-center border m-1"
          />
        </div>

        {/* profile info */}
        <div className=" p-0 col-lg-9 col-xl-9 me-xl-5 gx-0 row border border-success border-1 p-1">
          <div className="d-none d-sm-block col-2 d-md-none"></div>

          <div className="row col-12 col-sm-10 col-md-12 gx-0 border  p-1">
            <div className="col-12 gx-0 col-md-6 border border-danger ">  
              {edit ? (
                <input type="text" defaultValue={user.name} />
              ) : (
                <p>
                  {" "}
                  <b>{user.name}</b>
                </p>
              )}
            </div>

            <div className="d-none d-md-flex gap-2 col-12 col-md-6 gx-0 border border-danger text-center d-flex ">
              
              <>
                <Link to={user.github} target="_blank">
                  <FaGithub />{" "}
                </Link>
              </>
              <>
                <Link to={user.linkedin} target="_blank">
                  <FaLinkedin />{" "}
                </Link>
              </>
            </div>
          </div>

          <div className="row gx-0 border">
          <div className="d-none d-sm-block col-2 d-md-none gx-0 border border-danger row">  </div>
            
            <div className="col-12 col-sm-10 col-md-6 gx-0 border border-success">
              <p>
                <Mail size={20} /> {user.email}
              </p>
              <p>
                {" "}
                <Phone size={20} /> {user.mobNo}
              </p>
            </div>
            
            <div className="d-none d-sm-block col-2 d-md-none gx-0  border border-danger row">  </div>

            <div className="col-12 col-sm-10 col-md-6 gx-0 border border-success">
              <p>
                {" "}
                <User size={20} /> {user.gender}
              </p>
              {edit ? (
                <input type="date" value={user.birthDate.slice(0, 10)} />
              ) : (
                <p>
                  <Cake size={20} /> {user.birthDate.slice(0, 10)}
                </p>
              )}
            </div>

          </div>

        </div>

        <div className="d-none d-sm-block col-2 d-md-none gx-0  border border-danger row">  </div>

        <p className="col-10 ms-sm-4">Bio : {user.bio}</p>
      </div>

      {/* delete below div */}
      <div className="d-flex w-100 p-3 gap-5 ">
        <div className=" ">
          <FaUserEdit size={50}  />
          <br />
          Mr/Ms
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
