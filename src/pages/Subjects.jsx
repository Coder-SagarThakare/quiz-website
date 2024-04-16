import React, { useEffect, useState } from "react";
import { Card, SearchBar } from "../components";
import { get } from "../services";
import { apiPaths } from "../constants";
import { useLocation } from "react-router-dom";

const fetchStream = async (setData) => {
  try {
    const streams = await get(apiPaths.STUDENT.STREAM.ALL)
    setData(streams)
  } catch (err) { }
}

function SubjectAreas() {
const location = useLocation()

  const [data, setData] = useState();
  const streamPath = "Streams >"

  useEffect(() => {
    if(location.pathname.endsWith("stream"))
    fetchStream(setData)
  else{
    const data = location.pathname.split('/')
    const streamId = data[data.length-1]

    fetchStream()
    

    console.log();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);


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
            <Card name={ele.name} backgroundImage={ele.bgImage} id={ele._id}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectAreas;


