import React from "react";
import { LabelledInput } from "..";
import { useForm } from "react-hook-form";
import Img from "../Img";
import { SignUp } from "../../images";
import { useNavigate } from "react-router";
import "./style.css";
import toast from "react-hot-toast";
import { CLIENT_PATHS, apiPaths } from "../../constants";
import { useState } from "react";
import { post } from "../../services";
import { Button ,RadioButton} from "../custom";

function SignUpForm() {
  const [selected, setSelected] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // This registerUser function is used to register data  into the database using Axios and then redirecting user to dashboard page if registration is successful otherwise
  const registerUser = async (Data) => {
    console.log(Data);
    if (Data.password !== Data.confirmPassword) {
      toast.error("Passwords not match !!!");
    } else {

      // delete confirmpassword value before sending request to  server
      delete Data.confirmPassword;

      try {
        await post(`${apiPaths.STUDENT.AUTH.REGISTER}?captcha=false`, Data);
        toast.success("Registration Successful!!");
        navigate(CLIENT_PATHS.SIGNIN);
      } catch (error) {}
    }
  };

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
              placeholder="Enter Full Name"
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
            <div className="d-md-flex mb-1 ms-2">
              <RadioButton
                value="male"
                name="gender"
                id="male"
                label="Male"
                register={register}
                selected={selected}
                setselected={setSelected}
              />
              <RadioButton
                value="female"
                name="gender"
                id="female"
                label="Female"
                register={register}
                selected={selected}
                setselected={setSelected}
              />

              <RadioButton
                value="other"
                name="gender"
                id="other"
                label="Other"
                register={register}
                selected={selected}
                setselected={setSelected}
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
                onClick={() => navigate(CLIENT_PATHS.SIGNIN)}
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
