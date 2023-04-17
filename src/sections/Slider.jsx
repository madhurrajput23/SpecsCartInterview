import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import HeaderParagraph from "../components/HeaderParagraph";

const Slider = () => {
  return (
    <div className="slider">
      <HeaderParagraph
        headerOne={"Your eyes are splendid."}
        headerTwo={"Let people see them clearly."}
        paragrapgh={
          "We know how frustrating glasses glare can be. Anti-reflective oranti-glare coating prevents glare on your lenses - letting almost alllight through. Not only do anti-reflective glasses help in computer useand driving at night, they also allow other people to see you clearly.You don't need to tilt your head at awkward angles while gettingphotographed, either! Since more light reaches your eyes, you'll alsonotice an improvement in your vision. And the best part? Anti-glare,anti-scratch, and anti-UV coatings are all free of cost at Specscart!"
        }
      />

      <div className="slider-main">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src="/assets/blur.png" alt="blur" />
          }
          itemTwo={
            <ReactCompareSliderImage src="/assets/normal.webp" alt="normal" />
          }
        />
      </div>
    </div>
  );
};

export default Slider;
