import React, { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import * as THREE from 'three'
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
import Loader from "./../component/loader"
import AnimationModel from "../component/about/animationModel";
import Model from "../component/about/scene.js";

const Fallback = () => (
  <Html>
    <div>
      <Loader color="white" marginTop />
    </div>
  </Html>
)

const AboutMe = () => {
  const aboutWrapper = useRef(null);
  const panthomWrapper = useRef(null) 
  const { aboutInfo, linkPdf } = aboutText;

  const onScrollContact = _ => {
    const loadBar = document.querySelector(".load-bar")
    const winScroll = document.documentElement.scrollTop
    const viewportHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight
    const restScroll = scrollHeight - viewportHeight
    const percent = (winScroll / restScroll) * 100
    gsap.to(loadBar, {
      duration: 1,
      width: `${percent}%`,
      ease: "circ.out",
    })
  }

  useEffect(() => {
    aboutEnter(aboutWrapper.current)
    document.addEventListener("scroll", onScrollContact)
    window.addEventListener("resize", onScrollContact)

    return () => {
      document.removeEventListener("scroll", onScrollContact)
      window.removeEventListener("resize", onScrollContact)
    }
  }, [])

  return (
    <>
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
            className="canvas-content"
            shadowMap
            camera={{ position: [0, 0, 10], fov: 30, near: 1, far: 200 }}
            style={{ height: "100%", width: "100%" }}
          >
            <fog attach="fog" args={["black", 1, 200]} />
            <Suspense fallback={Fallback}>
              <Model/>
            </Suspense>
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
