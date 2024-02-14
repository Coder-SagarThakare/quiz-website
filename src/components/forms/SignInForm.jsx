import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button, LabelledInput } from "..";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SignIn } from "../../images";
import { loginUser, manageToken } from "../../services";
import Img from "../Img";

function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  /**
   *  Function to handle form submission
   * @param {object} data - The user login data to be submitted.
   */
  const onsubmit = async (data) => {
    try {
      const result = await loginUser(`/auth/login?captcha=false`, data);

      // Manage the authentication token received from the server
      manageToken("set", "token", result.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex layout glass-effect p-lg-5 ">
      <div className="w-50 h-100 d-none d-md-block ">
        <Img src={SignIn} alt="signin-img" className="h-100" />
      </div>

      <div className="w-100 w-md-50 d-flex flex-column align-items-center justify-content-center ">
        <h2>Login to your Account</h2>
        <p className="mb-4">with your registered Email-id</p>
        <form
          className="form-group d-flex d-flex flex-column "
          onSubmit={handleSubmit(onsubmit)}
        >
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

          {/* <button
                type="submit"
                className="btn btn-primary mt-3 w-100 rounded-3"
              >
                Login
              </button> */}
          <Button
            title="Login"
            type="submit"
            onClick={() => {
              console.log("sagar");
            }}
          />

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
            <span
              className="fw-bold text-primary cursor"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
