import React, { useState } from "react";
import axios from "axios";
import { Button, LabelledInput } from "..";
import { useForm } from "react-hook-form";
import Img from "../Img";
import { SignUp } from "../../images";
import { useNavigate } from "react-router";
import "./style.css";
import RadioButton from "../RadioButton";
import toast from "react-hot-toast";


function SignUpForm() {
  const API = "http://localhost:8022";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const registerUser = async (Data) => {
    console.log(Data);
    if(Data.password !== Data.confirmPassword){
      // alert("Passwords not match");
      toast.error("Passwords not match !!!");
    }else{
    await axios
      .post(`${API}/auth/register?captcha=false`, Data)
      .then((res) => {
        // alert("Registration Successful!");
      toast.success("Registration Successful!!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Registration Error:", error);
        // alert("Registration Failed");
        window.location.reload();
      toast.error("Registration  Failed!!");
    
      });
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // if(formData.fullname && formData.password && formData.email){
  //   registerUser(formData);
  //   console.log("You have submitted the form", formData);
  //   // }
  // };

  return (
    <div className="d-flex layout glass-effect p-lg-5 user-select-none">
      <div className="w-100 w-md-50 d-flex flex-column align-items-center justify-content-center ">
        <div className="glass-effect p-4 w-75">
          <h2>Sign Up</h2>
          <form
            onSubmit={handleSubmit(registerUser)}
            className="d-flex flex-column"
          >
            <LabelledInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter full Name"
              isRequired={true}
              register={register}
              errors={errors}
            />

            <LabelledInput
              label="Email Address"
              name="email"
              type="text"
              placeholder="Enter Email"
              isRequired={true}
              register={register}
              errors={errors}
            />

            <LabelledInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              isRequired={true}
              register={register}
              errors={errors}
            />
            <LabelledInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter Password"
              isRequired={true}
              register={register}
              errors={errors}
            />

            {/* <div className="my-2"> */}
            <h6>Gender</h6>
            <div className="d-md-flex mb-1">
            <RadioButton
              value="male"
              type="radio"
              className="form-check-input mx-2"
              name="gender"
              id="male"
              label="Male"
              register={register}
            />
            <RadioButton
              value="female"
              type="radio"
              className="form-check-input mx-2"
              name="gender"
              id="female"
              label="Female"
              register={register}
            />

            <RadioButton
              value="other"
              type="radio"
              className="form-check-input mx-2"
              name="gender"
              id="other"
              label="Other"
              register={register}
            />
            </div>

            <Button
              title="Sign Up"
              type="submit"
              className="btn-primary border-0"
            />

            <div className="mt-3">
              <span>Already have an account? </span>
              <span
                className="fw-semibold cursor text-decoration-underline"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="w-50 h-100 d-none d-md-block ">
        <Img src={SignUp} alt="signin-img" className="h-100" />
      </div>
    </div>
  );
}

export default SignUpForm;
