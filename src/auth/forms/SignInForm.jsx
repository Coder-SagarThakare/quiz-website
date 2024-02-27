import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
// import "./style.css";

function SignInForm() {
  const API = "http://localhost:8022";

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [login,setlogin] = useState(false);

  const userData = {email, password};

  const loginUser = async (userData) => {
    console.log("userdata",userData);
    
    try {
        const response = await axios.post(`${API}/auth/login?captcha=false`,userData);
        console.log("response",response.data);
    } catch (error) {
        console.error('Login Error:', error);
        alert('Login Failed. Please try again later.');
    }
};


  const handleSubmit = (event) => {
    event.preventDefault();
    setlogin(true);
    loginUser(userData);
    console.log(`Form submitted! ${email} ${password}`);
  };

  return (
    <div className="d-flex layout glass-effect">
      <div className="ball-1"></div>
      <div className="ball-2"></div>
      {/* <div className="ball-3"></div> */}
      <div className="w-md-50 d-none d-md-block">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/654/703/small/cute-boy-going-to-school-and-bring-a-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.png"
          className="img-fluid rounded-5 h-100 zindex-5"
          alt="img"
        />
      </div>
      <div className="mt-5 w-md-50">
        <div className="row justify-content-center">
          <div className="col-md-7 col-sm-8 col-9">
            <h2>Login to your Account</h2>
            <p className="mb-5">with your registered Email Address</p>
            <form
              className="form-group d-flex row justify-content-center"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email" className="mb-3 fs-7">
                User Name:
              </label>
              <input
                type="text"
                className="form-control rounded-3 mb-3 fs-7 "
                name="email"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
              />
              <label htmlFor="password" className="mb-3 fs-7">
                Password:
              </label>
              <input
                type="password"
                className="form-control rounded-3 fs-7"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password"
                required
              />
              <div className="mt-3">
                <input type="checkbox" name="rememberPass" id="rememberPass" />
                <label htmlFor="rememberPass" className="fs-7">
                  {"                               "}
                  Remember my password
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3 w-100 rounded-3 fs-6"
              >
                Login
              </button>

              <div className="border border-light d-flex justify-content-center align-items-center text-dark bg-light rounded-3 w-100 mt-5 cursor">
                <FcGoogle className="fs-4" />
                <button
                  type="button"
                  className="border-0 p-2 bg-light w-75 w-md-auto mt-2 mt-md-0"
                >
                  Login with Google
                </button>
              </div>

              <div className="mt-3">
                Don't have an account?{" "}
                <a href="/SignUp" className="fw-bold text-decoration-none">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;

