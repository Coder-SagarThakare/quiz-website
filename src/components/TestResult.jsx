import React from "react";
import { useAnswers } from "../context/AnswersContext";

function TestResult() {
  const { answers } = useAnswers();

  console.log("answer", answers);

  return (
    <div>
      <h1>Congragulations</h1>
      <div>5/10</div>
    </div>
  );
}

export default TestResult;
