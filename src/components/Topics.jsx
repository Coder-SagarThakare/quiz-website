import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";
import Loader from "./Loader";

function Topics() {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true)
  const location = useLocation()
  console.log("location : ",location);
  const subjectId = location?.state?.subjectId;

  const getTopics = async () => {

    try {
      const data = await get(`${apiPaths.STUDENT.TOPIC.FROM_SUBJECT}`.replace("subjectId", subjectId));
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    console.log("in topics")
    // setLoading(true)
    getTopics();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (Loading) {
    return <Loader />
  }

  return (
    <div className="p-3">
      {data?.map((e) => (
        <div key={e._id} className="border p-3 rounded my-1 cursor topic">
          <span>{e.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Topics;
