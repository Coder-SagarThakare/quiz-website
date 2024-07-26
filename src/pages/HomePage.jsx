import React from "react";
import { Feature, Footer, HeroImg } from "../components";
import { CONSTANTS } from "../constants";

function ShowFeatures() {
  return (
    <>
      <h1 className="m-2">Features</h1>
      {CONSTANTS.FEATURES.map((ele) => (
        <Feature
          path={ele.IMG}
          title={ele.TITLE}
          desc_1={ele.DESC_1}
          desc_2={ele.DESC_2}
          key={ele.ID}
          isReverse={ele.ISREVERSE}
        />
      ))}
    </>
  );
}

function ShowStreams() {
  <div></div>;
}

function HomePage() {
  console.log("homepage loaded");
  return (
    <div className=" ">
      <HeroImg />
      <ShowFeatures />
      <ShowStreams />
      <div className="m-2">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
