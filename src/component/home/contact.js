import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactWrapper } from "./../../styles/homeStyles";
import Locate from "./locate";
import AnimePresentation from "./canvas"

gsap.registerPlugin(ScrollTrigger);
const toggle = true;

export default function Contact() {
  const scrollActive = useRef(null);

  const showInfo = (_) => {
    const items = document.querySelectorAll(".item-envolt");
    gsap.to([...items], {
      duration: 1.5,
      y: 0,
      overwrite: true,
      ease: "power3.out",
      stagger: 0.03,
    });
  };

  const hiddenInfo = (_) => {
    const items = document.querySelectorAll(".item-envolt");
    gsap.to([...items], {
      duration: 1.5,
      y: 60,
      overwrite: true,
      ease: "power3.out",
      stagger: -0.03,
    });
  };

  // useEffect(() => {
  //   //initCanvas()
  //   window.addEventListener("resize", resizeWindow)

  //   return () => {
  //    // cancelAnimationFrame(rafContract.current)
  //    // cancelAnimationFrame(rafDisperse.current)
  //     window.removeEventListener("resize", resizeWindow)
  //    // window.removeEventListener("mousemove", onMouseMove)
  //   }
  //   // eslint-disable-next-line
  // }, [])

  useEffect(() => {
    scrollActive.current = ScrollTrigger.create({
      trigger: ".iron-points-wrap",
      start: "80% bottom",
      // markers: true,
      onEnter: () => {
        // setDisperse(false);
        showInfo();
      },
      onLeaveBack: () => {
        // setDisperse(true);
        hiddenInfo();
      },
    });

    return () => {
      scrollActive.current.kill();
    };
  }, []);

  return (
    <ContactWrapper toggle={toggle}>
      <div className="iron-points-wrap">
        <Locate />
        <AnimePresentation />
      </div>
    </ContactWrapper>
  );
}
