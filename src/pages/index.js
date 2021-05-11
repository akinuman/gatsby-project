import React, { useRef, useEffect } from "react";
import Biography from "../component/home/biography";
import Contact from "../component/home/contact";
import Presentation from "../component/home/presentation";
import Slogan from "../component/home/slogan";
import { homeEnter } from "../component/transition/homeEnter";
import WallToAbout from "../component/transition/wallToAbout";
import WallToWorks from "../component/transition/wallToWorks";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import { HomeContainer, HomeWrapper } from "../styles/homeStyles";
import Layout from "./../component/layout";

const IndexPage = () => {

  const { cursorStyles } = useGlobalStateContext();
  const globalDispatch = useGlobalDispatchContext()

  const homeContainer = useRef(null);
  const requestRef = useRef(null);
  const dataScroll = useRef({
    ease: 0.095,
    actual: 0,
    previous: 0,
    rounded: 0,
  });

  const smoothScrolling = () => {
    dataScroll.current.actual = window.scrollY;
    dataScroll.current.previous +=
      (dataScroll.current.actual - dataScroll.current.previous) *
      dataScroll.current.ease;
    dataScroll.current.rounded =
      Math.round(dataScroll.current.previous * 100) / 100;

    if (homeContainer.current) {
      homeContainer.current.style.transform = `translate3d(0, -${dataScroll.current.rounded}px, 0)`; // skewY(${skew}deg)`
      requestRef.current = requestAnimationFrame(smoothScrolling);
    }
  };

  const setBodyHeight = () => {
    const page = document.body;
    page.style.height = `${
      homeContainer.current.getBoundingClientRect().height
    }px`;
  };

  const onResize = (_) => {
    setBodyHeight();
  };
  
  //Effects Hooks
  useEffect(() => {
    
    window.scrollTo(0, 0);
    homeEnter(homeContainer.current);
    setBodyHeight();
    requestRef.current = requestAnimationFrame(smoothScrolling);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", onResize);
      document.body.style.height = 0;
    };
    //eslint-disable-next-line
  }, []);

  const onCursor = (entry = "hover") => {
    const style = cursorStyles[`${entry}`].style
    globalDispatch({ type: "CURSOR_TYPE", payload: style })
  }


  return (
    <>
        <Layout>
          <WallToWorks />
          <WallToAbout />
          <HomeWrapper className="globalContainer">
            <HomeContainer className="home-container" ref={homeContainer}>
              <Presentation />
              <Slogan />
              <Biography onCursor={onCursor} />
              <Contact />
            </HomeContainer>
          </HomeWrapper>
        </Layout>
    </>
  );
};

export default IndexPage;
