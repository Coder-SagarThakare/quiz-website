import React from "react";
// import { subjectBackgrounds } from "../../utils/Data";

const Card = ({ name, backgroundImage }) => {

  return (
    <div className="position-relative border rounded-4 cursor p-2"
      style={{ backgroundImage: `url(${backgroundImage})`, height: "200px", backgroundSize : "cover" ,}}
    >
      <p className="position-absolute bottom-0 bg-primary w-75 px-3 py-2 rounded-4">{name}</p>
    </div>
  );
};

export default Card;
