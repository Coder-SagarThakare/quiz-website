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
  console.log("questionsArr", questionsArr);
  console.log("questionsArr.length", questionsArr.length);

  async function getAllQuestions() {
    try {
      const questionsArr = await get(`${apiPaths.STUDENT.QUESTIONS_BY_TOPIC}`.replace("topicId", location.state.topicId))
      setQuestionsArr(questionsArr)
      setLoading(false)
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    console.log("location :", location.state.topicId);

    getAllQuestions()

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
      />
      :
      <h1>Question not added yet</h1>
  )
}

export default Questions;
