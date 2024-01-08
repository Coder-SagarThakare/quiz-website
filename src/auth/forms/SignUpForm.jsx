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
    <div className="d-flex layout">
      <div className="w-50">
        <img
          src="https://www.pngarts.com/files/7/Online-Learning-Education-Free-PNG-Image.png"
          className="img-fluid rounded-5 h-100"
          alt="img"
        />
      </div>
      <div className="w-50">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="ball-4"></div>
              <div className="ball-5"></div>
              <div className="ball-6"></div>
              <h2 className="mb-3">Sign Up</h2>

              <form
                onSubmit={handleSubmit}
                className="form-group d-flex row justify-content-center"
              >
                <label htmlFor="fullname">Full Name </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  name="fullname"
                />

                <label htmlFor="email">Email address </label>
                <input
                  type="email"
                  className="form-control mt-2"
                  name="email"
                  id="email"
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  name="password"
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  name="confirm-password"
                />

                <div className="m-2">
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

                <button type="submit" className="btn btn-primary">
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
