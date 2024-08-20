import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../services";
import { apiPaths, CLIENT_PATHS, CONSTANTS } from "../constants";
import Loader from "./Loader";
import Button from "./Button";

function Topics() {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location?.state?.subjectId;
  const refs = useRef([]);

  const hoverButtons = (ind, operation) => {
    let styleForHoverButton = "d-flex gap-3 ";

    // console.log(refs.current[ind]);
    // if (operation === "addClass")
    //   refs.current[ind].children[1].classList =
    //     styleForHoverButton + " opacity-100";
    // else
    //   refs.current[ind].children[1].classList =
    //     styleForHoverButton + " opacity-0";

    refs.current[ind].children[1].classList =
      operation === "addClass"
        ? styleForHoverButton + " opacity-100"
        : styleForHoverButton + " opacity-0";
  };

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

  const ShowQuestionsLevels = (topicId) => {
    console.log("topicId", topicId);

    return CONSTANTS.QUESTION_LEVEL.map((button) => (
      <Button
        title={button.TITLE}
        className={button.CLASS}
        onClick={() =>
          navigate(CLIENT_PATHS.QUESTIONS, {
            state: { topicId },
          })
        }
      ></Button>
    ));
  };

  return (
    <div className="p-3">
      {data?.map((e, ind) => (
        <div
          id={e._id}
          key={e._id}
          ref={(ele) => (refs.current[ind] = ele)}
          style={{ transition: "all 0.5s" }}
          onMouseOver={() => hoverButtons(ind, "addClass")}
          onMouseLeave={() => hoverButtons(ind)}
          className="d-flex align-items-center border p-2 rounded my-1 topic justify-content-between"
          // onClick={() =>
          //   navigate(CLIENT_PATHS.QUESTIONS, {
          //     state: { topicId: e._id },
          //   })
          // }
        >
          <span>{e.name}</span>
          {/* <div style={{ transition: "all 0.5s" }} className="opacity-0">
            <Button title={"Easy"} className={""}>
              eazy
            </Button>
            <Button title={"Medium"} className={"bg-warning"}>
              medium
            </Button>
            <Button title={"Hard"} className={"bg-danger"}>
              Hard
            </Button>
          </div> */}

          <div style={{ transition: "all 0.5s" }} className="d-flex opacity-0">
            <ShowQuestionsLevels topicId={e._id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Topics;
