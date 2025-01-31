import React from "react";

function Features({ path, title, desc_1, desc_2, isReverse }) {

  return (
    <div className={`d-flex flex-column flex-sm-row ${isReverse && "flex-sm-row-reverse"} `}>

      <div className=" w-100 w-md-50 p-1 p-sm-3 p-lg-5 pb-sm-4 d-flex justify-content-center align-items-center">
        <img className="w-100 h-auto rounded-4" src={path} alt={title}></img>
      </div>

      <div className="w-100 w-md-50 p-3 p-lg-5 mt-3">
        <h3 className="mb-4">{title}</h3>
        <ul className="d-flex flex-column gap-3">
          <li>{desc_1}</li>
          <li>{desc_2}</li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Features);
