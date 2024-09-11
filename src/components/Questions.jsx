import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";
import Loader from "./Loader";
import Question from "./Question";

function Questions() {
  const [questionsArr, setQuestionsArr] = useState([])
  const location = useLocation();
  const [loading, setLoading] = useState(true)
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0)

  async function getAllQuestions() {
    try {
      const questionsArr = await get(`${apiPaths.STUDENT.QUESTIONS_BY_TOPIC}`
        .replace("topicId?level={level}", `${location.state.topicId}?level=${location.state.level.toLowerCase()}`));

      setQuestionsArr(questionsArr)
      setLoading(false)

    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {

    const sidebar = document.getElementsByClassName("sidebar")[0];

    console.log("sidebar",sidebar)

    if (sidebar) {
      sidebar.classList.add("d-none");
    }

    console.log("QuestionS component useeffect rendered");

    getAllQuestions()

    return () => {
      if (sidebar) {
        sidebar.classList.remove("d-none"); 
        sidebar.classList.add("d-block"); 
      }
    };

    // eslint-disable-next-line
  }, []);

  if (loading) {
    <Loader />
  }

  console.log(questionsArr);

  return (
    questionsArr.length > 0 ?
      <Question
        question={questionsArr[currentQuestionNo]}
        currentQuestionNo={currentQuestionNo}
        setCurrentQuestionNo={setCurrentQuestionNo}
        questionCount={questionsArr.length}
      />
      :
      <h1>Question not added yet</h1>
  )
}

export default Questions;
