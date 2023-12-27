import React from "react";
import { Card } from "../../components";
import { cardTitles } from "../../utilities/Data";

function SubjectAreas() {

  return (
    <div className="p-2 fs-2 rounded">
      {/* <h3 className="mt-3 mx-5 custom-heading">Select subject :</h3>
      <p className="mt-3 mx-5 fs-5">multiple categeries for you..</p> */}
      <div className="d-flex  flex-wrap justify-content-center">
        {cardTitles.map((title, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card title={title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubjectAreas;
