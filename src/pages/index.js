import React, { useRef, useEffect } from "react";
import Biography from "../component/home/biography";
import Contact from "../component/home/contact";
import Presentation from "../component/home/presentation";
import Slogan from "../component/home/slogan";
import SEO from "../component/seo";
import { homeEnter } from "../component/transition/homeEnter";
import WallToAbout from "../component/transition/wallToAbout";
import WallToWorks from "../component/transition/wallToWorks";
import { homeDescription } from "../data/data-seo";
import { HomeContainer, HomeWrapper } from "../styles/homeStyles";
import Layout from "./../component/layout";
import gsap from "gsap"

const IndexPage = () => {
  
  const homeContainer = useRef(null);
  const requestRef = useRef(null);
  const dataScroll = useRef({
    ease: 0.15,
    actual: 0,
    previous: 0,
    rounded: 0,
  });

  const smoothScrolling = () => {
    dataScroll.current.actual = window.scrollY;
    dataScroll.current.previous += (dataScroll.current.actual - dataScroll.current.previous) * dataScroll.current.ease;
    dataScroll.current.rounded = Math.round(dataScroll.current.previous * 100) / 100;
    
    if (homeContainer) {
      gsap.to(homeContainer.current, {
        y: -dataScroll.current.rounded 
      })
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

  return (
    <>
      <SEO title="Home" description={homeDescription} pic={0} />
      <Layout>
        <WallToWorks />
        <WallToAbout />
        <HomeWrapper className="globalContainer">
          <HomeContainer className="home-container" ref={homeContainer}>
            <Presentation />
            <Slogan />
            <Biography />
            <Contact />
          </HomeContainer>
        </HomeWrapper>
      </Layout>
    </>
  );
};

export default IndexPage;
