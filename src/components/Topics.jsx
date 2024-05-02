import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";

function Topics() {
  const { subjectId } = useParams();
  const [data, setData] = useState();

  const getTopics = async () => {
    try {
      const data = await get(
        `${apiPaths.STUDENT.TOPIC.FROM_SUBJECT}/${subjectId}`
      );
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTopics();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
