import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const AnswersContext = createContext();

export function AnswersProvider({ children }) {
  console.log("children", children);
  const [answers, setAnswers] = useState([{ name: "sagar" }]);

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <Outlet />
    </AnswersContext.Provider>
  );
}

export const useAnswers = () => {
  return useContext(AnswersContext);
};
