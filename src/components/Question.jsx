import Button from './custom/Button';
import React, { useCallback } from "react";

function Question({
  question,
  currentQuestionNo,
  setCurrentQuestionNo,
  questionCount,
}) {
  console.log("Question child component rendered");
  const callback2 = useCallback((i) => {
    setCurrentQuestionNo(i);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border border-danger h-100 p-2 d-flex flex-column justify-content-between">
      <div className="p-5 glass-effect d-flex flex-column align-items-start justify-content-between user-select-none">
        <div className="d-flex justify-content-between align-items-center w-100 rounded py-2 px-3  question-header primary-white">
          <span>Topic Name : Data types</span>
          {/* <span>Time remaning :<b className="text-danger fs-3">  7.26 min</b></span> */}
          <span>
            Time remaning :<b className="text-danger text-border"> 7.26 min</b>
          </span>
        </div>
        <div className=" w-100 fs-3 border-bottom ">
          <span>Question : {question.question} </span>
        </div>

        <div className=" w-100  ">
          {question.options.map((e, i) => (
            <div className="d-flex gap-4 px-3 py-2  " key={i}>
              <input type="radio" name="option-1" id="html" />
              <label className="fs-4 cursor" htmlFor="html">
                {e}
              </label>
            </div>
          ))}
        </div>

        <div className="d-flex  justify-content-center w-100 gap-5">
          <Button
            title={"Prev"}
            onClick={() => setCurrentQuestionNo(--currentQuestionNo)}
            className={`bg-primary ${currentQuestionNo === 0 && "disabled"}`}
          />
          <Button
            title={"Next"}
            onClick={() => setCurrentQuestionNo(++currentQuestionNo)}
            className={`bg-primary ${
              currentQuestionNo === questionCount - 1 && "disabled"
            }`}
          />
        </div>
      </div>

      <div className="glass-effect p-2 d-flex justify-content-center gap-2">
        {/* button vr click kelyavr child question render zala ki button pn 10 vela render hot aahe.
                can we use here usecallback how ?  */}
        {Array.from({ length: questionCount }, (_, i) => (
          <Button
            key={i}
            title={i + 1}
            value={i}
            callbackk={()=>callback2(i)}
            className={`text-light ${currentQuestionNo === i && "bg-primary"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
