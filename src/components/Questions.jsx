import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../services";
import { apiPaths, CONSTANTS } from "../constants";
import Loader from "./Loader";
import Question from "./Question";
import Button from "./custom/Button";

function Questions() {
  const [questionsArr, setQuestionsArr] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [testTiming, setTestTiming] = useState(CONSTANTS.TEST_TIME_IN_MINUTES);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

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
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    const sidebarDom = document.getElementsByClassName("sidebar")[0];

    if (sidebarDom) {
      sidebarDom.classList.add("d-none");
    }

    console.log("QuestionS component useeffect rendered");

    getAllQuestions();

    return () => {
      if (sidebarDom) {
        sidebarDom.classList.remove("d-none");
        sidebarDom.classList.add("d-block");
      }
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let time = CONSTANTS.TEST_TIME_IN_MINUTES * 60; // Total time in seconds
    const timeInterval = setInterval(() => {
      if (time > 0) {
        time--; // Decrease time by 1 second each interval

        // Calculate minutes and seconds
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        // Print minutes and seconds with proper formatting
        console.log(`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
        // setTestTiming(`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`);

      } else {
        clearInterval(timeInterval); // Stop the timer when it reaches 0
        console.log("Time's up!");
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timeInterval);
  }, []);

  const submitTest = ()=>{
    console.log("TEST SUBMITTED...");
  }

  if (loading) {
    <Loader />;
  }               

  console.log(questionsArr);

  return (
    <div className="h-100 p-2 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex justify-content-between align-items-center w-100 rounded py-2 px-3 question-header primary-white my-2">
          <span>Topic Name : Data types</span>
          <span>Time : {testTiming}</span>
          <Button title={"Submit"}  className={"bg-success"} onClick={submitTest}/>
        </div>

        {/* questions */}
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

      {/* show all buttons */}
      <div className="glass-effect p-2 d-flex justify-content-center gap-2">
        {Array.from({ length: 10 }, (_, i) => (
          <Button
            key={i}
            title={i + 1}
            onClick={() => setCurrentQuestionNo(i)}
            className={`text-light ${currentQuestionNo === i && "bg-primary"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Questions;
