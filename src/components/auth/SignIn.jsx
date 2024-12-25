import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { LabelledInput } from "..";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SignIn } from "../../images";
import Img from "../Img";
import "./style.css";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { CLIENT_PATHS, CONSTANTS, apiPaths } from "../../constants";
import { post } from "../../services";
import { Button } from "../reusable";

function SignInForm() {
  console.log("in sign in form");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [role, setRole] = useState("student");

  /**
   *  Function to handle form submission
   * @param {object} data - The user login data to be submitted.
   */
  const onsubmit = async (data) => {
    try {
      var result; 
      if (role === CONSTANTS.ROLE.STUDENT) {
        result = await post(
          `${apiPaths.STUDENT.AUTH.LOGIN}?captcha=false`,
          data
        );
      } else {
        result = await post(`${apiPaths.TEACHER.AUTH.LOGIN}`, data);
        console.log("result : ", result);
      }

      localStorage.setItem(CONSTANTS.TOKEN, result.token);
      setUser(result.user);
      toast.success("Login Successfully !!!");
      navigate(CLIENT_PATHS.HOME);
    } catch (err) {
      console.log("Error in SignInForm.jsx ", err);
    }
  };

  return (
    <div className="d-flex layout glass-effect p-lg-5 user-select-none">
      <div className="w-50 h-100 d-none d-md-block ">
        <Img src={SignIn} alt="signin-img" className="h-100" />
      </div>

      <div className="w-100 w-md-50 d-flex flex-column align-items-center justify-content-center ">
        <div className="glass-effect p-4">
          <h2>Login to your Account</h2>
          <p className="mb-4">with your registered Email</p>
          <form
            className="d-flex flex-column "
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="border d-flex w-100 p-1 rounded my-2">
              <span
                className={`w-50 cursor text-center p-1 rounded  ${
                  role === "student" && "active"
                }`}
                onClick={() => setRole("student")}
              >
                Student
              </span>
              <span
                className={`w-50 cursor text-center p-1 rounded  ${
                  role === "teacher" && "active"
                }`}
                onClick={() => setRole("teacher")}
              >
                Teacher
              </span>
            </div>

            <LabelledInput
              label="Username"
              name="email"
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

            <Button
              title="Login"
              type="submit"
              className="btn-primary border-0"
            />

            <div className="d-flex align-items-center my-3">
              <span className="border w-100 mx-1"></span>
              <div>OR</div>
              <div className="border w-100 mx-1"></div>
            </div>

            <Button
              type="button"
              title="Login with Google"
              className=" btn-light"
              Icon={FcGoogle}
            />

            <div className="mt-3">
              <span>Don't have an account? </span>
              <span
                className="fw-semibold cursor text-decoration-underline"
                onClick={() => navigate(CLIENT_PATHS.SIGNUP)}
              >
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
