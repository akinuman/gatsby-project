import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactWrapper } from "./../../styles/homeStyles";
import Locate from "./locate";
import HelloScreen from "./helloScreen";

gsap.registerPlugin(ScrollTrigger)

const toggle = true;

function Contact() {
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
    <ContactWrapper
      toggle={toggle}
    >
      <div className="iron-points-wrap">
        <Locate />
        <HelloScreen  id="canvas-wrap" className="canvas-wrap"/>
      </div>
    </ContactWrapper>
  );
}
export default React.memo(Contact);