import React from "react";
import Fearurebox from "./Featurebox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

function Fearure() {
  return (
    <>
      <div id="features">
        <h1>FEATURES</h1>
        <div className="a-container">
          <Fearurebox image={fimage1} title="WeightLifting" />
          <Fearurebox image={fimage2} title="Specific Muscle" />
          <Fearurebox image={fimage3} title="Flex Your Muscle" />
          <Fearurebox image={fimage4} title="Cardio Exercise" />
        </div>
      </div>
    </>
  );
}

export default Fearure;
