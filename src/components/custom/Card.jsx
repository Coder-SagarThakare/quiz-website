import React from "react";
import { useNavigate } from "react-router-dom";
import { CLIENT_PATHS, CONSTANTS } from "../../constants";

const Card = ({ name, backgroundImage, id, type }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    if (type === CONSTANTS.CARD_TYPE.SUBJECT)
      navigate(`${CLIENT_PATHS.TOPIC}`.replace("subjectId", id), {
        state: {
          subjectId: id
        }
      })
    else navigate(`${CLIENT_PATHS.SUBJECT}`, {
      state: {
        streamId: id
      }
    });
  };

  return (
    <div
      className=" position-relative border rounded-4 cursor overflow-hidden"
      style={{ height: "200px" }}
      onClick={() => navigateTo()}
    >
      <img src={backgroundImage} alt={backgroundImage} className="w-100" />

      <div className="empty-card position-absolute top-0 bottom-0 right-0 left-0 w-100 "></div>

      <p className="position-absolute bottom-0 w-100 text-light ps-3 pb-2 m-0">
        {name}
      </p>
    </div>
  );
};

export default Card;
