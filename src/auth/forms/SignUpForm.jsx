import React from "react";
import { NavLink } from "react-router-dom";
import SignInForm from "./SignInForm";
// import "./style.css";

function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // onChange(true);
    console.log(`Form submitted!`);
  };

  return (
    <div className="d-flex layout glass-effect">
        <div className="ball-1"></div>
      <div className="ball-2"></div>
      {/* <div className="ball-3"></div> */}
      <div className="w-50">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/654/703/small/cute-boy-going-to-school-and-bring-a-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.png"
          className="img-fluid rounded-5 h-100 zindex-5"
          alt="img"
        />
      </div>
      <div className="w-50">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="mb-3">Sign Up</h2>

              <form
                onSubmit={handleSubmit}
                className="form-group d-flex row justify-content-center gap-2"
              >
                <label htmlFor="fullname">Full Name </label>
                <input
                  type="text"
                  className="form-control rounded-5"
                  name="fullname"
                />

                <label htmlFor="email">Email address </label>
                <input
                  type="email"
                  className="form-control mt-2 rounded-5"
                  name="email"
                  id="email"
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control rounded-5"
                  name="password"
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control rounded-5"
                  name="confirm-password"
                />

                <div className="my-2">
                  <input
                    type="radio"
                    className="form-check-input mx-2"
                    name="gender"
                    id="gender-male"
                  />
                  <label className="form-check-label" htmlFor="gender-male">
                    Male
                  </label>

                  <input
                    type="radio"
                    className="form-check-input mx-2"
                    name="gender"
                    id="gender-female"
                  />
                  <label className="form-check-label" htmlFor="gender-female">
                    Female
                  </label>
                </div>

                <button type="submit" className="btn btn-primary rounded-5">
                  Sign Up
                </button>

                <div className="mt-3">
                  Already have an account?{" "}
                  <a href="/SignIn" className="fw-bold text-decoration-none">
                    Sign In
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
