// import React from "react";

// function SignUpForm() {
//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form>
//         <div>
//           <label htmlFor="fullname">Full Name </label>
//           <input type="text" name="fullname" />
//         </div>

//         <div>
//           <label htmlFor="">Email address </label>
//           <input type="email" name="email" id="email" />
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" id="" />
//         </div>

//         <div>
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input type="password" name="confirm-password" id="" />
//         </div>

//         <div>
//           <input type="radio" name="gender-male" id="gender-male" />{" "}
//           <label htmlFor="gender-male">Male</label>
//           <input type="radio" name="gender-female" id="gender-female" />{" "}
//           <label htmlFor="gender-female">Female</label>
//         </div>

//         <div>
//           <button type="reset">Reset</button>
//           <button>Sign Up</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SignUpForm;

import React from "react";

function SignUpForm() {
  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullname">Full Name </label>
          <input type="text" className="form-control" name="fullname" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirm-password"
          />
        </div>

        <div className="form-group">
          <input
            type="radio"
            className="form-check-input"
            name="gender"
            id="gender-male"
          />
          <label className="form-check-label" htmlFor="gender-male">
            Male
          </label>

          <input
            type="radio"
            className="form-check-input"
            name="gender"
            id="gender-female"
          />
          <label className="form-check-label" htmlFor="gender-female">
            Female
          </label>
        </div>

        <div className="form-group">
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
