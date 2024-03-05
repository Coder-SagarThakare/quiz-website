import React from "react";
import { Feature, HeroImg } from "../components";
import { constants } from "../constants";

function ShowFeatures() {
  return (
    <div>
      <h1 className="m-2">Features</h1>
      {constants.FEATURES.map((ele) => (
        <Feature
          path={ele.img}
          title={ele.title}
          desc_1={ele.desc_1}
          desc_2={ele.desc_2}
          key={ele.id}
          isReverse={ele.isReverse}
        />
      ))}
    </div>
  );
}

function HomePage() {
  console.log('homepage loaded');
  return (
    <div className="">
      <HeroImg />
      <ShowFeatures />
    </div>
  );
}

export default HomePage;
