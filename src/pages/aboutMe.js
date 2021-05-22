import React, { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import Blobs from "../component/about/blobs";
import { Canvas } from "@react-three/fiber";
import FloatTitle from "../component/about/floatTitle";
import LinkPDF from "../component/about/linkPdf";
import TextInfo from "../component/about/textInfo";
import Layout from "../component/layout";
import ScrollProgress from "../component/scrollProgress";
import { aboutEnter } from "../component/transition/homeEnter";
import WallToHome from "../component/transition/wallToHome";
import WallToWorks from "../component/transition/wallToWorks";
import { aboutText } from "../data/text-data";
import { AboutWrapper, GraphicWrapper } from "./../styles/aboutStyles";
import { Html } from "@react-three/drei";
import Loader from "./../component/loader";
import AnimationModel from "../component/about/animationModel";
import { aboutDescription } from "../data/data-seo";
import SEO from "../component/seo";
import { useGlobalDispatchContext } from "../context/globalContext";

const Fallback = () => (
  <Html>
    <div>
      <Loader color="white" />
    </div>
  </Html>
);

const AboutMe = () => {
  
  const aboutWrapper = useRef(null);
  const panthomWrapper = useRef(null);
  const { aboutInfo, linkPdf } = aboutText;
  const globalDispatch = useGlobalDispatchContext()

  const pageChanger = (str) => {
    globalDispatch({
      type: "CURRENT_PAGE",
      payload: "about",
    });
  };

  const onScrollContact = (_) => {
    const loadBar = document.querySelector(".load-bar");
    const winScroll = document.documentElement.scrollTop;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const restScroll = scrollHeight - viewportHeight;
    const percent = (winScroll / restScroll) * 100;
    gsap.to(loadBar, {
      duration: 1,
      width: `${percent}%`,
      ease: "circ.out",
    });
  };
  
  useEffect(() => {
    pageChanger()
    aboutEnter(aboutWrapper.current);
    document.addEventListener("scroll", onScrollContact);
    window.addEventListener("resize", onScrollContact);

    return () => {
      document.removeEventListener("scroll", onScrollContact);
      window.removeEventListener("resize", onScrollContact);
    };
  }, []);

  return (
    <>  
      <SEO title="About" description={aboutDescription} pic={2}/>
      <Layout>
        <WallToWorks />
        <WallToHome />
        <AboutWrapper
          className="about-wrapper scroll-parent"
          ref={aboutWrapper}
        >
          <ScrollProgress provide="about" />
          <GraphicWrapper className="canvas-wrapper background-gradient">
            <FloatTitle />
            <Blobs />
            <TextInfo aboutInfoText={aboutInfo} />
            <LinkPDF linkPdfText={linkPdf} />
            <Canvas
              dpr={1.25}
              gl={{ antialias: false }}
              camera={{ position: [0, 0, 0.8], fov: 60, near: 0.5, far: 2.25 }}
              className="canvas-content"
            >
              <Suspense fallback={<Fallback />}>
                <AnimationModel position={[0, -1.4, 0]}/>
              </Suspense>
              <fog attach="fog" args={["#070710", 0, 2]} />
            </Canvas>
          </GraphicWrapper>
          <div className="panthom-wrapper" ref={panthomWrapper}>
            <div className="scroll-panthom sp-1"></div>
            <div className="scroll-panthom sp-2"></div>
            <div className="scroll-panthom sp-3"></div>
          </div>
        </AboutWrapper>
      </Layout>
    </>
  );
};

export default AboutMe;
