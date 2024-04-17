import React, { useEffect, useState } from "react";
import { Card, SearchBar } from "../components";
import { get } from "../services";
import { apiPaths } from "../constants";
import { useLocation } from "react-router-dom";

const fetchStream = async (url, setData) => {
  try {
    const streams = await get(url);
    setData(streams);
    console.log(streams);
  } catch (err) {}
};

function SubjectAreas() {
  const location = useLocation();
  const [data, setData] = useState();

  const streamPath = "Streams >";

  const isStream =  location.pathname.endsWith("stream")
  console.log("isStream ",isStream);

  useEffect(() => {
    if (isStream)
      fetchStream(apiPaths.STUDENT.STREAM.ALL, setData);
    else {
      const data = location.pathname.split("/");
      const streamId = data[data.length - 1];

      fetchStream(
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

export default SubjectAreas;
