import React, { useState } from "react";
import { useAnswers } from "../context/AnswersContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { get } from "../services";
import { apiPaths } from "../constants";

function TestResult() {
  const { answers } = useAnswers();
  const location = useLocation();
  const [result, setResult] = useState({});

  async function getResult(resultId) {
    const result = await get(apiPaths.STUDENT.GET_RESULT.replace("topicId", resultId));
    setResult(result);
  }

  useEffect(() => {
    try {
      getResult(location.state.resultId)
    } catch (e) {
      console.log(e)
    }
    // eslint-disable-next-line 
  }, [])

  return (
    <div>
      <h1>Congragulations</h1>
      <div>Attended questions : {answers.filter(item => item.selectedAnswer !== -1).length}/10</div>
      {/* <p>{result}</p> */}
      <div className="border border-red-500 ">
        <p>result.topic</p>
        <p>level : {result.level}</p>
        <p>percentage : {result.percentage}</p>
        <p>totalAttendedQuestions : {result.totalAttendedQuestions}</p>
      </div>
    </div>
  );
}

export default TestResult;
