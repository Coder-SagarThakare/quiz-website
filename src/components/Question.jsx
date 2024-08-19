import React from 'react'
import Button from './Button';

function Question({question,currentQuestionNo,setCurrentQuestionNo}) {

    // const arr = [1, 2, 3, 4];

    return (
        <div className="p-5 glass-effect d-flex flex-column align-items-start justify-content-between h-75 user-select-none">
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

            <div className=" w-100 ">
                {question.options.map((e, i) => (
                    <div className="d-flex  gap-4 px-3 py-2  " key={i}>
                        <input type="radio" name="option-1" id="html" />
                        <label className="fs-4 cursor" htmlFor="html">
                            {e}
                        </label>
                    </div>
                ))}
            </div>

            <div className="d-flex  justify-content-center w-100 gap-5">
                <button>prev</button>
                <button>next</button>
                <Button title={"Prev"} onClick={()=>setCurrentQuestionNo(--currentQuestionNo)}/>        
                <Button title={"Next"}  onClick={()=>setCurrentQuestionNo(++currentQuestionNo)}/>
            </div>
        </div>
    )
}

export default Question