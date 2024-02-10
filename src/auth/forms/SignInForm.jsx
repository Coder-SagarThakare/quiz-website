import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LabelledInput } from "../../components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../constants";

function SignInForm() {
  const { handleSubmit, register, formState: { errors }, } = useForm();
  const navigate = useNavigate();

  const onsubmit = (data) => {
    console.log(data);
    console.log('process.env.PUBLIC_URL : ', BASE_URL);
  };

  return (
    <div className="d-flex layout glass-effect">
      <div className="w-md-50 d-none d-md-block">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/654/703/small/cute-boy-going-to-school-and-bring-a-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.png"
          className="img-fluid rounded-5 h-100 zindex-5"
          alt="img"
        />
      </div>

      <div className="mt-5 w-md-50">
        <div className="row justify-content-center ">
          <div className="col-md-7 col-sm-8 col-9">
            <h2>Login to your Account</h2>
            <p className="mb-4">with your registered Email Address</p>
            <form
              className="form-group d-flex row justify-content-center"
              onSubmit={handleSubmit(onsubmit)}
            >

              <LabelledInput
                label="Username"
                name="name"
                type="text"
                placeholder="Enter Username"
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

              <button
                type="submit"
                className="btn btn-primary mt-3 w-100 rounded-3"
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
                <span className="fw-bold text-primary cursor" onClick={() => navigate('/signup')}>Sign Up</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
