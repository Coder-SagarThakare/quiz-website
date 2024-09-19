import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";
import Loader from "./Loader";
import Question from "./Question";

function Questions() {
  const [questionsArr, setQuestionsArr] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);

  async function getAllQuestions() {
    try {
      const questionsArr = await get(
        `${apiPaths.STUDENT.QUESTIONS_BY_TOPIC}`.replace(
          "topicId?level={level}",
          `${
            location.state.topicId
          }?level=${location.state.level.toLowerCase()}`
        )
      );

      setQuestionsArr(questionsArr)
      setLoading(false)

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

  const callback1 = useCallback((i) => {
    setCurrentQuestionNo(i);
  }, []);

  if (loading) {
    <Loader />;
  }

  console.log(questionsArr);

  return questionsArr.length > 0 ? (
    <Question
      question={questionsArr[currentQuestionNo]}
      currentQuestionNo={currentQuestionNo}
      setCurrentQuestionNo={callback1}
      questionCount={questionsArr.length}
    />
  ) : (
    <h1>Question not added yet</h1>
  );
}

export default Questions;
