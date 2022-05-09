import React from "react";
import "./Motts.css";
import MottsText from "./MottsText"
import MottsBox from "./MottsBox";

// imgs
import motts2 from "../../imgs/mots.jpg";



function Motts() {
  return (
    <div>
      <div className="motts container">
        <div className="motts__img-div">
          <img className="motts__img" src={motts2} alt="" />
          <div className="motts__imgDiv">
          <img className="motts__img2" src={motts2} alt="" />
          <img className="motts__img2" src={motts2} alt="" />
          <img className="motts__img2" src={motts2} alt="" />
          <img className="motts__img2" src={motts2} alt="" />
          <img className="motts__img2" src={motts2} alt="" />
          </div>
        </div>
        <div>
          <MottsText/>
        </div>
        <div>
          <MottsBox/>
        </div>
      </div>
    </div>
  );
}

export default Motts;
