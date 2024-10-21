import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const AnswersContext = createContext();

export function AnswersProvider() {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      <Outlet />
    </AnswersContext.Provider>
  );
}

export const useAnswers = () => {
  return useContext(AnswersContext);
};
