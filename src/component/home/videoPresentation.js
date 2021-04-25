import React, { useRef } from "react";
import gsap from "gsap";
import typingVideo from "./../../images/typing.mp4";

const VideoPresentation = () => {
  const blackWrapper = useRef(null);

  const loadVideo = () => {
    gsap.to(blackWrapper.current, {
      duration: 1.5,
      delay: 1,
      opacity: 0,
      ease: "power3.out",
    });
    // gsap.to(blackWrapper.current, {
    //   duration: 1.5,
    //   skewY: 400,
    //   ease: "power3.out",
    // })
  };

  return (
    <>
      <div className="img-relative">
        <video
          onLoadedData={loadVideo}
          preload="true"
          muted
          loop
          autoPlay
          src={typingVideo}
          type="video/mp4"
          className="video-wrapper"
        ></video>
      </div>
      <div className="black-wrapper" ref={blackWrapper}></div>
    </>
  );
};

export default VideoPresentation;
