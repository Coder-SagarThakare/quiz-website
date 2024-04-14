import React from "react";
import { subjectBackgrounds } from "../../utils/Data";
import '../../styles/global.css'

const Card = ({ name, backgroundImage }) => {

  return (
    <div className="card rounded-5 cursor" style={{ backgroundImage: `url(${backgroundImage})`, width: "95%", height: "200px", backgroundSize: "cover" }}>
      <div className="card-body d-flex flex-column justify-content-end text-light">
        <p className="card-text fs-6 bg-primary text-white w-75 p-2 rounded-4">{name}</p>
      </div>
    </div>
  );
};

export default Card;
