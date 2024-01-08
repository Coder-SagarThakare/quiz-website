// import React from "react";
// import { subjectBackgrounds } from "../Utilities/Data";

// const Card = ({ title }) => {

//   // Check if the title exists in subjectBackgrounds which is in data.js
//   if (!subjectBackgrounds[title]) {
//     console.error(`No background data found for title: ${title}`);
//     return null;
//   }

//   const backgroundImage = subjectBackgrounds[title].image;

//   return (
//     <div className="card rounded-5 cursor" style={{ backgroundImage: `url(${backgroundImage})`,width: "95%", height: "200px", backgroundSize:"cover" }}>
//       <div className="card-body d-flex flex-column justify-content-end text-light">
//         <p className="card-text fs-6 bg-primary1 w-75 p-2 rounded-4">{title}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import { subjectBackgrounds } from "../../utilities/Data";
import '../../styles/global.css'

const Card = ({ title }) => {
  // Check if the title exists in subjectBackgrounds which is in data.js
  if (!subjectBackgrounds[title]) {
    console.error(`No background data found for title: ${title}`);
    return null;
  }

  const backgroundImage = subjectBackgrounds[title].image;

  return (
    <div className="card rounded-5 cursor" style={{ backgroundImage: `url(${backgroundImage})`, width: "95%", height: "200px", backgroundSize: "cover" }}>
      <div className="card-body d-flex flex-column justify-content-end text-light">
        <p className="card-text fs-6 bg-primary text-white w-75 p-2 rounded-4">{title}</p>
      </div>
    </div>
  );
};

export default Card;
