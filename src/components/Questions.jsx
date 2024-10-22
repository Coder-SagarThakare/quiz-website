import React, { useEffect, useState } from "react";
import { unstable_usePrompt, useLocation, useNavigate } from "react-router-dom";
import { get } from "../services";
import { apiPaths, CLIENT_PATHS } from "../constants";
import Loader from "./Loader";
import Question from "./Question";
import Button from "./custom/Button";
import Timer from "./custom/Timer";
import { useAnswers } from "../context/AnswersContext";

function Questions() {
  console.log("parent QuestionS component rendered");

  const [questionsArr, setQuestionsArr] = useState([]);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const { answers, setAnswers } = useAnswers();

  useEffect(() => {
    // hide sidebar after start test
    toggleSidebar({ hide: true });
    getAllQuestions();

    return () => {
      toggleSidebar({ hide: false });
    };

    // eslint-disable-next-line
  }, []);

  function toggleSidebar({ hide }) {
    // hide sidebar after start test
    const sidebarDom = document.getElementsByClassName("sidebar")[0];

    if (sidebarDom && hide) {
      sidebarDom.classList.add("d-none");
    } else {
      sidebarDom.classList.remove("d-none");
      sidebarDom.classList.add("d-block");
    }
  }
  // prevent user from navigating prev url
  unstable_usePrompt({
    message: "Your test will be submit automatically after this action ",
    when: ({ currentLocation, nextLocation }) => {
      return (
        currentLocation.pathname !== nextLocation.pathname &&
        nextLocation.pathname !== CLIENT_PATHS.TEST_RESULT
      );
    },
  });

  async function getAllQuestions() {
    try {
      const questionsArr = await get(
        `${apiPaths.STUDENT.QUESTIONS_BY_TOPIC}`.replace(
          "topicId?level={level}",
          `${location.state.topicId
          }?level=${location.state.level.toLowerCase()}`
        )
      );

      setQuestionsArr(questionsArr);
      setAnswers(
        questionsArr.map((ele, i) => {
          return { _id: ele._id, selectedAnswer: -1 };
        })
      );
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  function SubmitTest() {
    navigate(CLIENT_PATHS.TEST_RESULT, { replace: true });
    console.log("selected answer count : ", answers.filter(item => item.selectedAnswer !== -1).length)
    console.log("TEST SUBMITTED...");
  }

  if (loading) {
    <Loader />;
  }

  return (
    <div className="h-100 p-2 d-flex flex-column justify-content-between">
      <div>
        {/* questions header start */}
        <div className="d-flex justify-content-between align-items-center w-100 rounded py-2 px-3 question-header primary-white my-2">
          <span>Topic Name : Data types</span>
          <div>
            <span>Time : </span>
            <Timer SubmitTest={SubmitTest}/>
          </div>

          <Button
            title={"Submit"}
            className={"bg-success"}
            onClick={() => SubmitTest(navigate)}
          />
        </div>
        {/* questions header end */}

        {/* questions body start */}
        {questionsArr.length > 0 ? (
          <Question
            question={questionsArr[currentQuestionNo]}
            currentQuestionNo={currentQuestionNo}
            setCurrentQuestionNo={setCurrentQuestionNo}
            questionCount={questionsArr.length}
          />
        ) : (
          <h1>Question not added yet</h1>
        )}
      </div>
      {/* questions body end */}

      {/* show all buttons starts */}
      <div className="glass-effect p-2 d-flex justify-content-center gap-2">
        {Array.from({ length: 10 }, (_, i) => (
          <Button
            key={i}
            title={i + 1}
            onClick={() => setCurrentQuestionNo(i)}
            className={`text-light 
              ${currentQuestionNo === i
                ? "bg-primary"
                : answers[i]?.selectedAnswer !== -1 && "bg-success"
              }
              `}
          />
        ))}
      </div>
      {/* show all buttons ui ends */}
    </div>
  );
}

export default Questions;
