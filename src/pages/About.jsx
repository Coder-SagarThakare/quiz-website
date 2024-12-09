import React from "react";

function About() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4 font-weight-bold">Welcome to QuizEasy</h1>
        <p className="lead">
          Empowering your learning journey with engaging and interactive quizzes!
        </p>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title font-weight-bold text-primary">
                🎯 Focused Learning
              </h5>
              <p className="card-text">
                Solve quizzes based on streams, subjects, and topics to target specific areas of knowledge and boost your expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title font-weight-bold text-success">
                📊 Performance Tracking
              </h5>
              <p className="card-text">
                Get instant results, detailed analytics, and feedback to help you understand your strengths and areas for improvement.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title font-weight-bold text-danger">
                ⏱ Time-Based Challenges
              </h5>
              <p className="card-text">
                Improve your time management skills with quizzes that have time-bound questions for an added challenge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Interactive Quizzes"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="font-weight-bold mb-3">Why Choose QuizEasy?</h3>
          <p>
            Whether you're preparing for exams, enhancing your knowledge, or
            simply challenging yourself, QuizEasy is the perfect platform to
            meet your needs.
          </p>
          <ul className="list-group">
            <li className="list-group-item">✔ Wide range of topics and streams</li>
            <li className="list-group-item">✔ Intuitive and user-friendly interface</li>
            <li className="list-group-item">✔ Interactive quizzes with multimedia support</li>
            <li className="list-group-item">✔ Custom quizzes for teachers and students</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg">
          Start Solving Quizzes Now
        </button>
      </div>
    </div>
  );
}

export default About;
