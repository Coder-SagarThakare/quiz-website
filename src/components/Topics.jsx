import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../services";
import { apiPaths, CLIENT_PATHS, CONSTANTS } from "../constants";
import Loader from "./Loader";
import Button from "./reusable/Button";
import { alert } from "./reusable/Alert";
import Swal from "sweetalert2";
import { NoDataFound } from "./reusable";

function Topics() {
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const refs = useRef([]);

  const subjectId = location?.state?.subjectId;

  const hoverButtons = (ind, operation) => {
    let styleForHoverButton = "d-flex gap-3";

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
      console.log(data)
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopics();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const alertToStartTest = (button, topicId) => {

    alert({
      title: "Ready to Start the Test?",
      text: `You are about to start a 30-minute test of ${'LANGUAGE'}. The test level is ${button.TITLE}. Once started, you must complete it within the allotted time.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Start Test",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(CLIENT_PATHS.QUESTIONS, {
          state: { topicId, level: button.TITLE },
        });
        console.log("Test started");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("Test cancelled");
      }
    });
  }

  if (Loading) {
    return <Loader />;
  }

  const ShowQuestionsLevels = ({ topicId, disabled }) => {
    return CONSTANTS.QUESTION_LEVEL.map((button, index) => {
      const isDisabled = !disabled[button.TITLE.toLowerCase()];

      return (<Button
        title={button.TITLE}
        className={`${isDisabled ? "bg-secondary" : button.BG_COLOR} ${button.CLASS} `}
        key={index}
        disabled={isDisabled}
        onClick={() => alertToStartTest(button, topicId)}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
      />)
    }
    );
  };

  return (
    <div className="p-3">
<div class="alert alert-warning fixed-note">
            <strong>Note:</strong> If a question's topic level is marked as "disabled," it means no questions have been added to this topic yet.
          </div>
      {data.length ? data?.map((e, ind) => (
        <>
          
          <div
            id={e._id}
            key={e._id}
            ref={(ele) => (refs.current[ind] = ele)}
            style={{ transition: "all 0.5s" }}
            onMouseOver={() => hoverButtons(ind, "addClass")}
            onMouseLeave={() => hoverButtons(ind)}
            className="d-flex align-items-center border p-2 rounded my-1 topic justify-content-between"
          >
            <span>{e.name}</span>

            <div style={{ transition: "all 0.5s" }} className="d-flex opacity-0">
              <ShowQuestionsLevels topicId={e._id} disabled={e.isQuestionsAdded} />

            </div>
          </div>
        </>

      ))
        :
        <NoDataFound description={"No Topics added yet. Please check back later!"} />
      }
    </div>
  );
}

export default Topics;
