import React, { useEffect, useState } from "react";
import { Card, SearchBar } from "../components";
import { get } from "../services";
import { apiPaths } from "../constants";
import { useLocation, useParams } from "react-router-dom";

const fetchData = async (url, setData) => {
  try {
    const data = await get(url);
    setData(data);
  } catch (err) {
    console.log("in quiz home page");
    console.log(err.message); 
  }
};

function QuizHomepage() {
  const location = useLocation();
  const [data, setData] = useState();
  const {streamId} = useParams();

  const streamPath = "Streams >";

  const isStream =  location.pathname.endsWith("stream")
  console.log("isStream ",isStream);

  useEffect(() => {
    if (isStream)
      fetchData(apiPaths.STUDENT.STREAM.ALL, setData);
    else {

      fetchData(
        `${apiPaths.STUDENT.SUBJECT.FROM_STREAM}/${streamId}`,
        setData
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className=" p-2">
      <SearchBar />

      <div className="py-2  mb-2">
        <span>{streamPath}</span>
      </div>

      {data?.length === 0 ? (
        <h1>Subject not added yet</h1>
      ) : (
        <div className="wrapper">
          {data?.map((ele) => (
            // <div key={ele._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div key={ele._id}>
              <Card
                name={ele.name}
                backgroundImage={ele.bgImage}
                id={ele._id}
                type = {!isStream && "subject"}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuizHomepage;