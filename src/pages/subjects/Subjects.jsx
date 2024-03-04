import React from "react";
import { Card } from "../../components";
import { cardTitles } from "../../utils/Data";

function SubjectAreas() {
  return (
    <div className="p-2 rounded">
      <div className="d-flex flex-wrap justify-content-center">
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


