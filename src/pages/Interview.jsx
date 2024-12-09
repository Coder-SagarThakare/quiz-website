import React from "react";
// dont delete
// import InterviewImg from "../images/interview.png";

const Interview = () => {
  return (
    // better UI for production dont delete
    // <div className="w-100 h-100 d-flex justify-content-center align-items-center">
    //   <div className="text-center">
    //     <img src={InterviewImg} alt={InterviewImg}/>
    //     <h5>Not scheduled interview for now</h5>
    //     <h5>Keep Studying...</h5>
    //   </div>
    // </div>

    <div class="row align-items-center justify-content-center h-100 p-5">
      <div class="col-lg-5">
        {/* <!-- Title --> */}
        <h1 class="mt-4 mt-lg-0">We are building something awesome!</h1>
        {/* <!-- info --> */}
        <p>
        Hey you! QuizEasy is on its way. We are working hard to launch our platform, and we’ll be back soon with exciting quizzes for you!
        </p>
        {/* <!-- Progress bar --> */}
        <div class="overflow-hidden mt-4">
          <p class="mb-1 h6 fw-light text-start">Launch progress</p>
          <div class="progress progress-md progress-percent-bg bg-light">
            <div
              class="progress-bar progress-bar-striped bg-blue aos aos-init aos-animate"
              data-aos="slide-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              role="progressbar"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "85%" }}
            >
              <span class="progress-percent text-white">85%</span>
            </div>
          </div>
        </div>

        {/* <!-- Newsletter --> */}
        <form class="mt-4">
          {/* <!-- Info --> */}
          <h6>Notify me when website is launched</h6>
          <div class="bg-body border rounded-2 p-2">
            {/* <!-- Input subscribe --> */}
            <div class="input-group">
              <input
                class="form-control border-0 me-1"
                type="email"
                placeholder="Enter your email"
              />
              <button type="button" class="btn btn-primary mb-0 rounded-2">
                Notify Me!
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="col-lg-7 text-center">
        {/* <!-- Image --> */}
        <img
          src="https://eduport.webestica.com/assets/images/element/coming-soon.svg"
          class="h-300px h-sm-400px h-md-500px h-xl-700px"
          alt=""
        />
      </div>
    </div>
  );
};

export default Interview;
