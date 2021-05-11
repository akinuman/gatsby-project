import React, { useEffect, useRef, useState } from "react";
import { PresentationWrapper } from "../../styles/homeStyles";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import VideoPresentation from "./videoPresentation";
import gsap from "gsap";
import { linearFunction } from "./../../helper/mathHelper";

const word1 = "Hi, I'm";
const word2 = "A";
const word3 = "KIN";
const word4 = "CODER";
const word5 = "DESIGNER";

const Presentation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const firstBlock = useRef(null);
  const firstBlock1 = useRef(null);
  const firstBlock2 = useRef(null);
  const titleName = useRef(null);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (window.innerWidth < 800) {
      setScrollPosition(position / 2);
    } else {
      setScrollPosition(position);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onMove3D = (e) => {
    const { clientX: x, clientY: y } = e;
    const Tx = linearFunction(x, [0, window.innerWidth], [-40, 40]);
    const Ty = linearFunction(y, [0, window.innerHeight], [-40, 40]);
    const Rx = linearFunction(x, [0, window.innerWidth], [-8, 8]);
    const Ry = linearFunction(y, [0, window.innerHeight], [8, -8]);

    gsap.to(containerRef.current, {
      duration: 1.5,
      x: Tx,
      y: Ty,
      rotationX: Ry,
      rotationY: Rx,
      overwrite: true,
      ease: "expo.out",
    });
  };
  

  useEffect(() => {
    gsap.to(titleName.current, {
      duration: 1.5,
      delay: 1,
      opacity: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const presNode = document.querySelector(".presentation-wrapper");
    setTimeout(() => {
      presNode.addEventListener("mousemove", onMove3D);
    }, 1500);

    return () => {
      presNode.removeEventListener("mousemove", onMove3D);
    };
  }, []);
  

  useEffect(() => {
    const wi = window.innerWidth;
    var withTheProgress = gsap.utils.mapRange(
      wi > 600 ? 0 : 0,
      wi > 600 ? 50 : 0,
      0,
      1
    );
    var withTheProgress2 = gsap.utils.mapRange(
      wi > 600 ? 100 : 40,
      wi > 600 ? 150 : 80,
      0,
      1
    );
    if (window.innerWidth > 600) {
      if (scrollPosition > 80) {
        gsap.set(firstBlock1.current, {
          opacity: 0,
        });
      } else {
        gsap.set(firstBlock1.current, {
          opacity: 1,
        });
      }
    }
    if (scrollPosition < 85 && window.innerWidth < 800) {
      gsap.set(firstBlock.current, {
        translateY: -scrollPosition + 7,
      });
      gsap.set(firstBlock1.current, {
        translateY: -scrollPosition,
        opacity: withTheProgress(scrollPosition),
      });
      gsap.set(firstBlock2.current, {
        translateY: -scrollPosition,
        opacity: withTheProgress2(scrollPosition),
      });
    }
    if (scrollPosition < 182 && window.innerWidth > 800) {
      gsap.set(firstBlock.current, {
        translateY: -scrollPosition + 5,
      });
      gsap.set(firstBlock1.current, {
        translateY: -scrollPosition,
        opacity: withTheProgress(scrollPosition),
      });
      gsap.set(firstBlock2.current, {
        translateY: -scrollPosition,
        opacity: withTheProgress2(scrollPosition),
      });
    }
    if (scrollPosition > 60) {
      gsap.set(firstBlock.current, {
        opacity: 0,
      });
    } else {
      gsap.set(firstBlock.current, {
        opacity: 1,
      });
    }
  }, [scrollPosition]);

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
                  <div className="split-parag block" ref={firstBlock}>
                    {word3}
                  </div>
                  <div className="split-parag block1 " ref={firstBlock1}>
                    {word4}
                  </div>
                  <div className="split-parag block2" ref={firstBlock2}>
                    {word5}
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <div className="wrapper-img">
            <VideoPresentation />
          </div>
        </div>
        <div className="social-wrapper">
          <a
            className="social-item-link"
            rel="noreferrer"
            aria-label="Instagram"
            target="_blank"
            href="https://instagram.com/akinuman"
          >
            <FaInstagram />
          </a>
          <a
            className="social-item-link"
            rel="noreferrer"
            aria-label="Linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/ak%C4%B1n-y-uman-652479144/"
          >
            <FaLinkedin />
          </a>

          <a
            className="social-item-link"
            rel="noreferrer"
            aria-label="Github"
            target="_blank"
            href="https://github.com/akinuman"
          >
            <FaGithub />
          </a>
        </div>
      </PresentationWrapper>
    </>
  );
};

export default Presentation;
