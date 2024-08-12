import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../services";
import { apiPaths } from "../constants";
import Loader from "./Loader";

function Topics() {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location : ", location);
  const subjectId = location?.state?.subjectId;

  const getTopics = async () => {
    try {
      const data = await get(
        `${apiPaths.STUDENT.TOPIC.FROM_SUBJECT}`.replace("subjectId", subjectId)
      );
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("in topics");
    // setLoading(true)
    getTopics();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getQuestions = (topicId) => {};

  if (Loading) {
    return <Loader />;
  }

  return (
    <div className="p-3">
      {data?.map((e) => (
        <div
          key={e._id}
          className="border p-3 rounded my-1 cursor topic"
          onClick={() =>
            navigate("/quiz/streams/subject/topic/questions", {
              state: { topicId: e._id },
            })
          }
        >
          <span>{e.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Topics;
