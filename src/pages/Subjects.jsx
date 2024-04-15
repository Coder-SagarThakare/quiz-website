import React, { useEffect, useState } from "react";
import { Card, SearchBar } from "../components";
import { get } from "../services";
import { apiPaths } from "../constants";

const fetchStream = async (setData) => {
  try {
    const streams = await get(apiPaths.STUDENT.STREAM.ALL)
    setData(streams)
    console.log(streams);
  } catch (err) { }
}

function SubjectAreas() {
  const [data, setData] = useState();
  const streamPath = "Streams >"

  useEffect(() => {
    fetchStream(setData)

  }, []);


  return (
    <div className=" p-2">

      <SearchBar />
      
      <div className="py-2  mb-2">
        <span>{streamPath}</span>
      </div>

      <div className="wrapper">
        {data?.map((ele, index) => (
          // <div key={ele._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div key={ele._id} >
            <Card name={ele.name} backgroundImage={ele.bgImage}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectAreas;


