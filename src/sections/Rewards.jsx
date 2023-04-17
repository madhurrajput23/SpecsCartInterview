import React from "react";
import HeaderParagraph from "../components/HeaderParagraph";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rewards = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="rewards">
      <div className="rewards-info">
        <HeaderParagraph
          headerOne={"Awards."}
          headerTwo={"Followers. Rewads"}
          paragrapgh={
            "Our work speaks for itself - Specscart has been awarded first prize inVenture Further 2018 Business Category. We are constantly workingto innovate new ways and technology to become UK’s leading EyeCare provider."
          }
        />
      </div>
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          <div>
            <img src="/assets/rewards-1.png"></img>
          </div>
          <div>
            <img src="/assets/rewards-2.png"></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Rewards;
