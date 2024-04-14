import React, { useEffect, useState } from "react";
import { Card } from "../components";
import { cardTitles } from "../utils/Data";
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


  useEffect(() => {
    fetchStream(setData)

  }, []);


  return (
    <div className="p-2 rounded">
      <div className="d-flex flex-wrap justify-content-center">
        {data?.map((ele, index) => (
          <div key={ele._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card name={ele.name} backgroundImage={ele.bgImage}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectAreas;


