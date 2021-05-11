import React, { useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import {
  useWorksDispatchContext,
  useWorksStateContext,
} from "./../../context/worksContext.js";
import ImageSlider from "./imageSlider";

const Slider = ({ img, id, idLogo, onCursor }) => {
  const { currentSlide, buttonBlocked, lengthSlide } = useWorksStateContext();
  const worksDispatch = useWorksDispatchContext();
  const sliderTap = useRef(null);
  

  const prevSlide = () => {
    if (currentSlide === 0) {
      const sliderSize = lengthSlide - 1;
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      });
    } else {
      const sliderSize = currentSlide - 1;
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide === lengthSlide - 1) {
      const sliderSize = 0;
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      });
    } else {
      const sliderSize = currentSlide + 1;
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      });
    }
  };

  const onDragHandler = (_, info) => {
    if (!buttonBlocked) {
      if (Math.abs(info.offset.x) > 100) {
        info.offset.x < 0 ? nextSlide() : prevSlide();
        worksDispatch({
          type: "BLOCK_BUTTON",
          payload: true,
        });
      }
    }
  };

  

  const animStart = () => {
    gsap.to(sliderTap.current, {
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    });
  };
  const animFinish = () => {
    gsap.to(sliderTap.current, {
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    });
  };


  return (
    <div className="slider-size">
      <motion.div
        className="slider-comp"
        drag
        dragConstraints={{ left: 1, right: 1, top: -1, bottom: 1 }}
        dragTransition={{ bounceStiffness: 800, bounceDamping: 17 }}
        onDragEnd={(e, info) => onDragHandler(e, info)}
        onMouseEnter={() => onCursor("drag")}
        onMouseLeave={(e) => {
          onCursor();
        }}
        whileTap={{ scale: 0.65 }}
        onTapStart={() => animStart()}
        onTap={() => animFinish()}
      >
        {id === 0 ? <ImageSlider id={id} /> : null}

        {/* <div className="slider-wrapper" ref={sliderWrapper}>
          <div className="slider-content">
            <VideoSlider id={id} />
            <div className="brightness"></div>
          </div>
          <div className="page-fill">
            <ImageSlider id={id} />
          </div> */}
      </motion.div>
      <div className="slider-tap" ref={sliderTap}>
        <h3>Slide</h3>
        <span
          className="emoji-move"
          role="img"
          aria-label="hands here"
          style={{ padding: "5px", height: 25 }}
        >
          👈🏻
        </span>
      </div>
    </div>
  );
};

export default Slider;
