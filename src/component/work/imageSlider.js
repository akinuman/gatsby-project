import React, { useEffect } from "react";
import hoverEffect from "hover-effect";
import AOS from "aos";
import loppy1 from "./../../images/loppy1.jpg"
import loppy2 from "./../../images/loppy2.jpg"
import { ImageWrapper } from "./../../styles/worksStyle"

const ImageSlider = () => {
  useEffect(() => {
    AOS.init();
    new hoverEffect({
      parent: document.querySelector("#honne-image"),
      intensity: 0.4,
      image1: loppy2,
      image2: loppy1,
      displacementImage: loppy1,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 2.25,
    });
  }, []);

  return (
    <ImageWrapper
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-duration="2000"
      data-aos-easing="ease"
      id="honne-image"
    >
    </ImageWrapper>
  );
};


export default React.memo(ImageSlider);

