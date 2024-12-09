import React, { useEffect, useState } from "react";
import { apiPaths } from "../../constants";
import { get } from "../../services";
import SearchBar from "../../components/SearchBar";

function StudentDashboard() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const response = await get(
        `${apiPaths.STUDENT.DASHBOARD}?page=${page}&limit=${limit}`
      );
      console.log(response);
      setResults(response.results);
      setTotalPages(response.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page, limit]);

  // const handleSearchChange = (e) => {
  //   setSearch(e.target.value);
  //   setPage(1); // Reset to the first page when searching
  // };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10));
    setPage(1); // Reset to the first page when limit changes
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-4">
      {/* Search and Limit Section */}
      <div className="d-flex justify-content-between align-items-center gap-1">
        {/* Search Bar */}

        <SearchBar />

        {/* Limit Selector */}
        <select
          className="form-select w-25 glass-effect p-2"
          value={limit}
          onChange={handleLimitChange}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={15}>15 per page</option>
          <option value={20}>20 per page</option>
        </select>
      </div>

      {/* Results Grid */}
      <div className="row mt-4 ">
        {results?.map((quiz) => (
          <div key={quiz._id} className="col-md-4 mb-4">
            <div className="card glass-effect shadow-sm cursor text-light">
              <div className="card-body">
                <h5 className="card-title">Topic: {quiz.topic?.name}</h5>
                <p className="card-text">Level: {quiz.level}</p>
                <p className="card-text">
                  Total Questions: {quiz.questions.length}
                </p>
                <p className="card-text">
                  Questions Attempted: {quiz.totalAttendedQuestions}
                </p>
                <p className="card-text">
                  Correct Answers: {quiz.correctAnsCount}
                </p>
                <p className="card-text">Percentage: {quiz.percentage}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center sticky-bottom">
        <ul className="pagination m-0">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${page === index + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentDashboard;
