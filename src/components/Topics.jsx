import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";

function Topics() {
  const { subjectId } = useParams();
  const [data, setData] = useState();

  const getTopics = async () => {
    const data = await get(
      `${apiPaths.STUDENT.TOPIC.FROM_SUBJECT}/${subjectId}`
    );
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getTopics()

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{data?.map((e)=><p>{e.name}</p>)}</div>;
}

export default Topics;
