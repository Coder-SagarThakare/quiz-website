import React, { useContext } from 'react'

export function AnswersContext({children}) {
    
  return (
    <div>AnswersContext</div>
  )
}

export const useAnswers = ()=>{
    return useContext(AnswersContext)
}