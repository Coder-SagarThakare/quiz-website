import React from "react";
import { topics } from "../Utilities/Data";
import { useLocation } from "react-router-dom";
function Topic({ topicId }) {
  const location = useLocation();
  console.log("location.state:::::", location.state);
  const { id, name } = location.state?.subject;

  return (
    <div className="d-flex flex-wrap align-items-start fs-5">
      {topics.map((topic) => {

        return        
            id === topic.languageId && (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-2" key={topic.id}>
                <div className="bg-light border border-danger rounded p-2">
                  <p className="mb-0">{topic.name}</p>
                </div>
              </div>
            )  
      })}
    </div>
  );
}

export default Topic;
