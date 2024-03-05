import React from "react";

function Features({ path, title, desc_1, desc_2, isReverse }) {
  console.log("in features");

  return (
    <div className={`d-flex ${isReverse && "flex-sm-row-reverse"} `}>
      <div className="w-50 p-5 pb-4 ">
        <img className="w-100 h-100 rounded-4" src={path} alt={title}></img>
      </div>
      <div className="w-50 p-5 mt-3">
        <h3 className="">{title}</h3>
        <ul>
          <li>{desc_1}</li>
          <li>{desc_2}</li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
