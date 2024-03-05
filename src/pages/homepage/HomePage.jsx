import React from "react";
import { Feature, HeroImg } from "../../components";
import { constants } from "../../constants";

function ShowFeatures() {
  return (
    <div >
      {constants.FEATURES.map((ele) => (
        <Feature
          path={ele.img}
          title={ele.title}
          desc_1={ele.desc_1}
          desc_2={ele.desc_2}
          key={ele.id}
          isReverse = {ele.isReverse}
        />
      ))}
    </div>
  );
}

function HomePage() {
  return <ShowFeatures />
       
    // <div className="">
      {/* <HeroImg /> */}
    // </div>
  
}

export default HomePage;
