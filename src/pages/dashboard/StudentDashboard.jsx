import React, { useEffect, useState } from "react";
import { apiPaths } from "../../constants";
import { get } from "../../services";

function StudentDashboard() {
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await get(apiPaths.STUDENT.DASHBOARD);
      console.log(response);
      setResults(response);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 ">
      <h1 className="text-xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {results.map((quiz) => (
          <div
            key={quiz._id}
            className="border px-4 py-1 rounded shadow hover:shadow-md transition mb-1"
          >
            <h2 className="text-lg font-semibold">Topic: {quiz.topic.name}</h2>
            <p>Level: {quiz.level}</p>
            <p>Total Questions: {quiz.questions.length}</p>
            <p>Questions Attempted: {quiz.totalAttendedQuestions}</p>
            <p>Correct Answers: {quiz.correctAnsCount}</p>
            <p>Percentage: {quiz.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
