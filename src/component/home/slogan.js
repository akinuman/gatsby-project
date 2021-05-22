import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { linearFunction } from "./../../helper/mathHelper";
import { SloganWrapper } from "./../../styles/homeStyles";

gsap.registerPlugin(ScrollTrigger);

export default function Slogan() {
  const scrollImg = useRef(null);
  const scrollBg = useRef(null);

 

  const { pic, logo } = useStaticQuery(graphql`
    query {
      pic: file(relativePath: {eq: "images/5.png"}) {
        childImageSharp {
          gatsbyImageData(width: 500)
        }
      }
      logo: file(relativePath: {eq: "images/js-logo.png"}) {
        childImageSharp {
          gatsbyImageData(width: 300, quality: 50)
        }
      }
    }
  `);

  const logoImage = getImage(logo)
  const nicePic = getImage(pic)
  
  
  const resetMarkers = (_) => {
    scrollImg.current.refresh();
    scrollBg.current.refresh();
  };

  

  const updateScroll = ({ progress, trigger }, yLimit, rotLimit) => {
    const scroll = progress.toFixed(3);
    const rotate = linearFunction(scroll, [0, 1], [rotLimit, -2]);
    const y = linearFunction(scroll, [0, 1], [yLimit, -yLimit]);
    gsap.to(trigger, {
      duration: 0.65,
      rotate,
      y,
    });
  };

  useEffect(() => {
    scrollImg.current = ScrollTrigger.create({
      trigger: ".img-central-wrapper",
      start: "0% bottom",
      end: "100% top",
      // markers: true,
      onUpdate: (self) => updateScroll(self, 120, -6),
    });
    scrollBg.current = ScrollTrigger.create({
      trigger: ".logo-js",
      start: "0% bottom",
      end: "100% top",
      // markers: true,
      onUpdate: (self) => updateScroll(self, 180, -45),
    });

    window.addEventListener("resize", resetMarkers);

    return () => {
      window.removeEventListener("resize", resetMarkers);
      scrollImg.current.kill();
      scrollBg.current.kill();
    };
  }, []);
  return (
    <SloganWrapper>
      {console.log("slogannnnnn")}
      <div className="home-design-content">
        <h2 className="stroke">
          <p className="stroke-text1">INSPIRED BY</p>
          <p className="stroke-text2">
            a<span>w</span>
            <span>w</span>
            <span>w</span>ards.
          </p>
        </h2>
        <div className="img-central-wrapper">
          <GatsbyImage
          image={nicePic}
          alt="mainPic"
          className="img-central" />
        </div>
        <h2 className="fill">
          <p className="fill-text1">Developed</p>
          <p className="fill-text2">with React</p>
        </h2>
        <GatsbyImage
          tag="div"
          alt="logoPic"
          className="logo-js"
          image={logoImage}
        ></GatsbyImage>
      </div>
    </SloganWrapper>
  );
}
