import React, { useState } from "react";
import axios from "axios";

// import "./style.css";

function SignUpForm() {

  const API = "http://localhost:8022";

  let [formData, setFormData] = useState({ name: "", password: "", email:"" });


  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
  }

  const registerUser = async (Data) => {
    console.log(Data);
   await axios.post(`${API}/auth/register?captcha=false`, Data)
       .then((res)=>{
           alert('Registration Successful!');
           window.location.reload();
       })
       .catch((error) => {
           console.error('Registration Error:', error);
           alert('Registration Failed');
       });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    // if(formData.fullname && formData.password && formData.email){
        registerUser(formData);
        console.log('You have submitted the form', formData);
    // }
  };

  return (
    <div className="d-flex layout glass-effect">
      <div className="w-md-50 w-sm-100">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-9 col-8">
              <h2 className="mb-3 text-sm-center">Sign Up</h2>

              <form
                onSubmit={handleSubmit}
                className="form-group d-flex row justify-content-center gap-1"
              >
                <label htmlFor="name">Full Name </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control rounded-5"
                  name="name"
                />

                <label htmlFor="email">Email address </label>
                <input
                  type="email"
                  className="form-control mt-2 rounded-5"
                  onChange={handleChange}
                  name="email"
                  id="email"
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control rounded-5"
                  onChange={handleChange}
                  name="password"
                />

                {/* <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control rounded-5"
                  onChange={handleChange}
                  name="confirmPassword"
                /> */}
{/* 
                <div className="my-2">
                  <input
                    type="radio"
                    className="form-check-input mx-2"
                    onChange={handleChange}
                    name="gender"
                    id="gender-male"
                  />
                  <label className="form-check-label" htmlFor="gender-male">
                    Male
                  </label>

                  <input
                    type="radio"
                    className="form-check-input mx-2"
                    onChange={handleChange}
                    name="gender"
                    id="gender-female"
                  />
                  <label className="form-check-label" htmlFor="gender-female">
                    Female
                  </label>
                </div> */}

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
      <div className="w-md-50 d-none d-md-block image">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/654/703/small/cute-boy-going-to-school-and-bring-a-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.png"
          className="img-fluid rounded-5 h-100"
          alt="img"
        />
      </div>
    </div>
  );
}

export default SignUpForm;
