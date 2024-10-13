import React, { createContext, useContext, useState } from 'react'

const AnswersContext = createContext();

export function AnswersProvider({ children }) {

    console.log("children", children)
    const [answers, setAnswers] = useState([])

    return (
        <AnswersContext.Provider value={{ answers, setAnswers }}>
            {children}
        </AnswersContext.Provider>
    )
}

export const useAnswers = () => {
    return useContext(AnswersContext)
}