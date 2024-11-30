import React, { useEffect, useRef, useState } from "react";
import { unstable_usePrompt, useLocation, useNavigate } from "react-router-dom";
import { get, post } from "../services";
import { apiPaths, CLIENT_PATHS } from "../constants";
import Loader from "./Loader";
import Question from "./Question";
import Button from "./custom/Button";
import Timer from "./custom/Timer";
import { useAnswers } from "../context/AnswersContext";

function Questions() {

  const [questionsArr, setQuestionsArr] = useState([]);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const { answers, setAnswers } = useAnswers();
  const answersRef = useRef(answers);
  console.log(answers[0]?.selectedAnswer)

  useEffect(() => {
    // hide sidebar after start test
    toggleSidebar({ hide: true });
    getAllQuestions();

    return () => {
      toggleSidebar({ hide: false });
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

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
        questionsArr.map((ele) => {
          return {
            _id: ele._id,
            selectedAnswer: ele.type === "singleSelect"
              ? -1
              : Array(ele.options.length).fill(-1),
          };
        })
      );

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function SubmitTest() {
    setLoading(true);
    const currentAnswers = answersRef.current;

    const payload = {
      level: location.state.level.toLowerCase(),
      topic: location.state.topicId,
      questions: currentAnswers
    }

    try {

      const resultId = await post(apiPaths.STUDENT.CHECK_RESULT, payload);

      setLoading(false);
      navigate(CLIENT_PATHS.TEST_RESULT, {
        replace: true,
        state: { resultId }
      }
      );
    } catch (e) {
      console.log(e);
    }
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
            <Timer SubmitTest={SubmitTest} />
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
        {Array.from({ length: questionsArr.length }, (_, i) => (
          <Button
            key={i}
            title={i + 1}
            onClick={() => setCurrentQuestionNo(i)}
            className={`text-light ${currentQuestionNo === i
              ? "bg-primary"
              : (questionsArr[i].type === "singleSelect" && answers[i]?.selectedAnswer !== -1) ||
                (questionsArr[i].type === "multiSelect" &&
                  Array.isArray(answers[i]?.selectedAnswer) &&
                  answers[i]?.selectedAnswer.some((ans) => ans !== -1))
                ? "bg-success"
                : ""
              }`}
          />
        ))}
      </div>
      {/* show all buttons ui ends */}
    </div>
  );
}

export default Questions;
