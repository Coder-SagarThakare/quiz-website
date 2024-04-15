import React from "react";
// import { subjectBackgrounds } from "../../utils/Data";

const Card = ({ name, backgroundImage }) => {
  return (
    <div
      className=" position-relative border rounded-4 cursor overflow-hidden"
      style={{ height: "200px" }}
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
