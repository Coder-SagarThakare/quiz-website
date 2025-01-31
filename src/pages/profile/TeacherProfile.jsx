import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { apiPaths } from "../../constants";
import { get } from "../../services";
import { FaUserEdit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { Cake, Mail, Phone, User } from "lucide-react";
import { Button } from "../../components/reusable";

function TeacherProfile() {
  const { user, setUser } = useAuth();
  const [edit, setEdit] = useState(false);

  async function fetchUserData() {
    try {
      let data = await get(apiPaths.TEACHER.SELF);

      setUser(data);
    } catch (err) { }
  }

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetSocialMedia = () => {
    return (<>
      <>
        <Link to={user.github} target="_blank">
          <FaGithub size={25} color="black" />{" "}
        </Link>
      </>
      <>
        <Link to={user.linkedin} target="_blank">
          <FaLinkedin size={25} color="" />{" "}
        </Link>
      </>
    </>)
  }

  return (
    <div className="p-3 d-block">

      <div className="d-flex justify-content-end border">
        {edit ?
          <Button title="Save" style={{ width: "100px" }} className={"bg-info"} onClick={() => setEdit(!edit)} /> :
          <Button title="Edit" style={{ width: "100px" }} className={"bg-primary"} onClick={() => setEdit(!edit)} />
        }
      </div>

      {/* profile data card */}
      <div className="glass-effect row align-items-start align-items-xl-center justify-content-between p-3 gx-0 border text-break">
        {/* profile photo div */}
        <div className=" col-12 col-md-4 col-lg-2 text-center border ">
          <img
            src={user.picture}
            alt={user.picture}
            className="w-100 h-100 rounded-pill profile-img float-center border m-1"
          />
        </div>

        {/* profile info */}
        <div className=" p-0 col-md-8 col-lg-9 col-xl-9 me-xl-5 gx-0 row border border-success border-1 p-1">
          <div className="d-none d-sm-block col-2 d-md-none"></div>

          <div className="row col-12 col-sm-10 col-md-12 gx-0 border  p-1">
            <div className="col-12 gx-0 col-lg-8 col-xl-8 border border-danger ">
              {edit ? (
                <input type="text" defaultValue={user.name} />
              ) : (
                <p>
                  {" "}
                  <b>{user.name}</b>
                </p>
              )}
            </div>

            <div className="d-none d-lg-flex gap-2 col-12 col-md-4 col-xl-4 gx-0 border border-danger text-center d-flex ">
              <GetSocialMedia />

            </div>
          </div>

          <div className="row gx-0 border">
            <div className="d-none d-sm-block col-2 d-md-none gx-0 border border-danger row">  </div>

            <div className="col-12 col-sm-10 col-md-12 col-lg-8 col-xl-8 gx-0 border border-success ">
              <p className="d-flex gap-2">  
                <Mail size={20} className="mt-1"/>
                  {user.email}
               
              </p>
              <p className="d-flex gap-2">
                {" "}
                <Phone size={20} /> {user.mobNo}
              </p>
            </div>

            <div className="d-none d-sm-block col-2 d-md-none gx-0  border border-danger row">  </div>

            <div className="col-12 col-sm-12 col-lg-4 col-xl-4 gx-0 border border-success">
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

        <div className="d-none d-md-block col-4 col-lg-3 col-xl-1 gx-0  border border-danger row">  </div>

        <p className="col-8 col-lg-9 col-xl-11 border border-danger">Bio : {user.bio}</p>
      </div>

      {/* delete below div */}
      <div className="d-flex w-100 p-3 gap-5 ">
        <div className=" ">
          <FaUserEdit size={50} />
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
          <p>Role : {user?.role}</p>
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
