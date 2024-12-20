import React, { useEffect } from "react";
import { CONSTANTS, apiPaths } from "../../constants";
import { get } from "../../services";
import { useAuth } from "../../context/AuthContext";
import { Pencil } from "lucide-react";

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
      <div className="row g-3 mb-6 m-1">
        <div className="col-12 col-lg-8">
          <div className="card h-100  bg-transparent glass-effect text-light">
            <div className="card-body">
              <div className="border-bottom border-dashed pb-4">
                <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                  <div className="col-4 col-sm-3 ">
                    <img
                      className="rounded-circle h-100 w-100 border p-1"
                      src={user.picture}
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-sm-auto flex-1">
                    <h3>{user.name}</h3>
                    <div className="d-flex align-items-center m-1">
                      <p className="m-0">{user.email}</p>{" "}
                      <span className="ms-1 badge text-bg-primary cursor ">
                        {!user.isEmailVerified && "verify now"}{" "}
                        <Pencil className="ms-1" size={12} />
                      </span>
                    </div>

                    <div className="d-flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </div>
                    <p className="">Joined 3 months ago</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-between-center pt-4">
                <p>{user.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card h-100 bg-transparent glass-effect  text-light ">
            <div className="card-body">
              <div className="border-bottom border-dashed">
                <h4 className="mb-3">
                  Default Address
                  <button className="btn btn-link p-0" type="button">
                    {" "}
                    <svg
                      className="svg-inline--fa fa-pen-to-square fs-9 ms-3 text-body-quaternary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="pen-to-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                      ></path>
                    </svg>{" "}
                    <span className="fas fa-edit fs-9 ms-3 text-body-quaternary"></span>{" "}
                  </button>
                </h4>
              </div>
              <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h5 className="text-body-highlight">Address</h5>
                  </div>
                  <div className="col-auto">
                    <p className="">Vancouver, British Columbia Canada</p>
                  </div>
                </div>
              </div>
              <div className="border-top border-dashed pt-4">
                <div className="row flex-between-center mb-2">
                  <div className="col-auto">
                    <h5 className="text-body-highlight mb-0">Email</h5>
                  </div>
                  <div className="col-auto">
                    <a className="lh-1" href="mailto:shatinon@jeemail.com">
                      shatinon@jeemail.com
                    </a>
                  </div>
                </div>
                <div className="row flex-between-center">
                  <div className="col-auto">
                    <h5 className="text-body-highlight mb-0">Phone</h5>
                  </div>
                  <div className="col-auto">
                    <a href="tel:+1234567890">+1234567890</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
