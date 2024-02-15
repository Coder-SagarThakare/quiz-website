import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button, LabelledInput } from "..";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { SignIn } from "../../images";
import { loginUser, manageToken } from "../../services";
import Img from "../Img";
import "./style.css";

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
        <div className="glass-effect p-4">
          {/* <div className="ball-1 "></div>  */}
          <h2>Login to your Account</h2>
          <p className="mb-4">with your registered Email</p>
          <form
            className="d-flex flex-column "
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

            <Button
              title="Login"
              type="submit"
              className="btn-primary border-0"
            />

            <Button
              type="button"
              title={"Login with Google"}
              className={"mt-4 bg-light"}
              Icon={FcGoogle}
            />

            <div className="mt-3">
              <span>Don't have an account? </span>
              <span
                className="fw-semibold cursor text-decoration-underline"
                onClick={() => navigate("/signup")}
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
