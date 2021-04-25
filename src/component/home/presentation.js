import React, { useEffect, useRef, useState } from "react";
import { GlobalStyle, PresentationWrapper } from "../../styles/homeStyles";
import VideoPresentation from "./videoPresentation";
import gsap from "gsap"
import { linearFunction } from "./../../helper/mathHelper"



const word1 = "Hi, I'm";
const word2 = "A";
const word3 = "KIN";
const word4 = "CODER";
const word5 = "DESIGNER";




const Presentation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onMove3D = e => {
    const { clientX: x, clientY: y } = e
    const Tx = linearFunction(x, [0, window.innerWidth], [-40, 40])
    const Ty = linearFunction(y, [0, window.innerHeight], [-40, 40])
    const Rx = linearFunction(x, [0, window.innerWidth], [-8, 8])
    const Ry = linearFunction(y, [0, window.innerHeight], [8, -8])
  
    gsap.to(containerRef.current, {
      duration: 1.5,
      x: Tx,
      y: Ty,
      rotationX: Ry,
      rotationY: Rx,
      overwrite: true,
      ease: "expo.out",
    })
  }
  const titleName = useRef(null)

  useEffect(() => {
    gsap.to(titleName.current, {
      duration: 1.5,
      delay: 1,
      opacity: 1,
      ease: "power3.out",
    });

  }, [])

  useEffect(() => {
    const presNode = document.querySelector(".presentation-wrapper")
    setTimeout(() => {
      presNode.addEventListener("mousemove", onMove3D)
    }, 1500)

    return () => {
      presNode.removeEventListener("mousemove", onMove3D)
    }
  }, [])
  const firstBlock = useRef(null)
  const firstBlock1 = useRef(null)
  const firstBlock2 = useRef(null)

  useEffect(() => {

    var withTheProgress = gsap.utils.mapRange(0, 50, 0, 1)
    var withTheProgress2 = gsap.utils.mapRange(0, 200, 0, 1)

    if(scrollPosition < 190) {
      gsap.set(firstBlock.current, { 
        translateY: -scrollPosition + 5

      })
      gsap.set(firstBlock1.current, {   
        translateY: -scrollPosition,
        opacity: withTheProgress(scrollPosition)
      })
      gsap.set(firstBlock2.current, {   
        translateY: -scrollPosition,
        opacity: withTheProgress2(scrollPosition)

      })
    }
    
  }, [scrollPosition])

  return (
    <>
      <PresentationWrapper className="presentation-wrapper">
        <div className="container" ref={containerRef}>
          <div className="title-name" ref={titleName}>
            <h1 className="contrast">
              <div className="upperWord">
                <div className="split-parag.make">{word1}</div>
              </div>
              <div className="row-bro">
                <div className="split-parag a">{word2}</div>
                <div className="content-changer">
                  <div className="split-parag block" ref={firstBlock}>{word3}</div>
                  <div className="split-parag block1 " ref={firstBlock1}>{word4}</div>
                  <div className="split-parag block2" ref={firstBlock2}>{word5}</div>
                </div>
              </div>
            </h1>
          </div>
          <div className="wrapper-img">
            <VideoPresentation />
          </div>
        </div>
      </PresentationWrapper>
    </>
  );
};

export default Presentation;
