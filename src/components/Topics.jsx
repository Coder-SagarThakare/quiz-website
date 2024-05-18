import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";
import Loader from "./Loader";

function Topics() {
  const { subjectId } = useParams();
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true)

  const getTopics = async () => {
    try {
      const data = await get(
        `${apiPaths.STUDENT.TOPIC.FROM_SUBJECT}/${subjectId}`
      );
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    // setLoading(true)
    getTopics();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(Loading){
    return <Loader />
  }

  return (
    <div>
      {data?.map((e) => (
        <div key={e._id} className="border p-3 rounded my-1 cursor topic">
          <span>{e.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Topics;
