import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import gsap from "gsap";
import TransitionLink from "gatsby-plugin-transition-link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { linearFunction } from "./../../helper/mathHelper";
import { BiographyWrapper } from "./../../styles/homeStyles";
import { worksOtherExit, worksEnter } from "./../transition/homeEnter";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { biography } from "../../data/text-data";
gsap.registerPlugin(ScrollTrigger);

const hShort = 650;
const biographyText = biography;
const toggle = true;

export default function Biography({ onCursor }) {
  const scrollPhoto = useRef(null);
  const biographyWrap = useRef(null);
  const photo_Head = useRef(null);
  const photoHeadWrapper = useRef(null);

  const { body } = useStaticQuery(graphql`
    query {
      body: file(relativePath: { eq: "images/body.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600)
        }
      }
    }
  `);

  const photo = getImage(body);

  const resetMarkers = (_) => {
    scrollPhoto.current.refresh();
  };

  const FancyImage = React.forwardRef((props, ref) => (
    <StaticImage
      className="photohead"
      tag="div"
      src="./../../images/ninja.svg"
      alt="mask"
    >
      {props.children}
    </StaticImage>
  ));

  const updateScroll = ({ progress }) => {
    if (window.innerWidth > hShort) {
      const scroll = progress.toFixed(3);
      const photo = biographyWrap.current.querySelector(".photo-wrapper");
      const bio = biographyWrap.current.querySelector(".biography-wrapper");
      const rotatePhoto = linearFunction(scroll, [0, 1], [4.5, 1.5]);
      const movePhoto = linearFunction(scroll, [0, 1], [10, -5]);
      const moveBio = linearFunction(scroll, [0, 1], [-30, 30]);
      const rotateBio = linearFunction(scroll, [0, 1], [-4.5, 1.5]);
      gsap.to(photo, {
        duration: 0.65,
        rotate: rotatePhoto,
        x: movePhoto,
      });
      gsap.to(bio, {
        duration: 0.65,
        rotate: rotateBio,
        x: moveBio,
      });
    }
  };

  const handleRobotFace = (e) => {
    if (window.innerWidth > hShort) {
      const { pageX, pageY } = e;
      const offsetY = e.currentTarget.offsetTop;
      const x = (pageX / e.currentTarget.getBoundingClientRect().width).toFixed(
        2
      );
      const y = (
        (pageY - offsetY) /
        e.currentTarget.getBoundingClientRect().height
      ).toFixed(2);

      const rotY = linearFunction(x, [0, 1], [-4, 8]);
      const rotX = linearFunction(y, [0, 1], [5, -5]);

      gsap.to(photoHeadWrapper.current, {
        duration: 2,
        rotateY: rotY,
        rotateX: rotX,
        rotateZ: rotY,
        ease: "expo.out",
        overwrite: true,
      });
    }
  };

  const leaveRobotFace = (_) => {
    if (window.innerWidth > hShort) {
      gsap.to(photoHeadWrapper.current, {
        duration: 1.5,
        rotateY: 0,
        rotateX: 0,
        rotateZ: 0,
        delay: 0.8,
        ease: "expo.out",
        overwrite: "allOnStart",
      });
    }
  };

  const hiddenRobotFace = (_) => {
    if (window.innerWidth > hShort) {
      gsap.to(photo_Head.current, {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "power3.out",
      });
    }
  };

  const showRobotFace = (_) => {
    if (window.innerWidth > hShort) {
      gsap.fromTo(
        photo_Head.current,
        {
          scale: 0,
        },
        {
          duration: 1,
          scale: 1,
          ease: "elastic.out",
          overwrite: 1,
        }
      );
      gsap.to(photo_Head.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.out",
      });
    }
  };

  useEffect(() => {
    scrollPhoto.current = ScrollTrigger.create({
      trigger: ".biography-wrapper",
      start: "-10% bottom",
      end: "100% top",
      onUpdate: (self) => updateScroll(self),
    });

    window.addEventListener("resize", resetMarkers);

    return () => {
      window.removeEventListener("resize", resetMarkers);
      scrollPhoto.current.kill();
    };
  }, []);
  return (
    <BiographyWrapper
      toggle={toggle}
      className="section-photo"
      ref={biographyWrap}
      onMouseMove={handleRobotFace}
      onMouseLeave={leaveRobotFace}
    >
      <div className="ticker-loop">
        <div className="ticker-word tw2">
          <h2 className="word-anim wanim-2">
            Akın Uman Front<span>end Developer -</span> Akın Uman Front
            <span>end Developer -</span>Akın Uman Front
            <span>end Developer -</span>Akın Uman Front
            <span>end Developer -</span>
          </h2>
        </div>
        <div className="ticker-word tw1">
          <h2 className="word-anim wanim-1">
            Akın Uman Front<span>end Developer -</span> Akın Uman Front
            <span>end Developer -</span>Akın Uman Front
            <span>end Developer -</span>Akın Uman Front{" "}
            <span>end Developer -</span>
          </h2>
        </div>
      </div>
      <div className="photo-wrapper">
        <GatsbyImage tag="div" alt="bodyBro" className="photo" image={photo} />
        <div className="photohead-wrapper" ref={photoHeadWrapper}>
          <div ref={photo_Head}>
            <FancyImage />
          </div>
        </div>
      </div>
      <div className="biography-wrapper">
        <div className="biography-res"></div>
        <h2>
          {biographyText.h2[0]} <b>Akın Uman</b>. {biographyText.h2[1]}{" "}
          <span
            role="img"
            aria-label="rocketjs"
            style={{ fontSize: "4.5vw", marginLeft: 10, marginTop: 10 }}
          >
            🏂
          </span>
        </h2>
        <div
          role="presentation"
          onMouseEnter={(_) => {
            onCursor("pointer");
            hiddenRobotFace();
          }}
          onMouseLeave={(_) => {
            onCursor();
            showRobotFace();
          }}>
          <p>
            {biographyText.p[0]} <b> React</b> & <b>Gatsby</b> &{" "}
            <b>React-Native</b> {biographyText.p[1]}{" "}
            <span role="img" aria-label="robotjs" style={{ fontSize: "2.5vw" }}>
              🤖
            </span>{" "}
            {biographyText.p[2]}
          </p>
        </div>
        <TransitionLink
          to="/works/"
          exit={{
            trigger: ({ node, e, exit, entry }) =>
              worksOtherExit(node, e, exit, entry),
            length: 1.45,
          }}
          entry={{
            delay: 1.45,
            trigger: ({ node, e, exit, entry }) =>
              worksEnter(node, e, exit, entry),
          }}
        >
          <p className="link-works-wrap">
            <button
              className="link-works"
            >
              {biographyText.button}
              <span role="img" aria-label="working">
                👨‍💻
              </span>
            </button>
          </p>
        </TransitionLink>
      </div>
    </BiographyWrapper>
  );
}
