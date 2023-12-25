import React from "react";
// import NoPage from "../Nopage/NoPage";
import HomePage from "../HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Topic from "../Topic/Topic";

function TopicBpard() {
  return (
    <div className=" topicboard m-3 w-75 bg-warning bg-gradient p-5 fs-4">
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Topic/:topicId" element={<Topic />} />
      </Routes>
    </div>
  );
}

export default TopicBpard;
 