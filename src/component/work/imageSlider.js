import React, { useEffect, useState, useRef } from "react";

import hoverEffect from "hover-effect";
import AOS from "aos";
import { ImageWrapper } from "./../../styles/worksStyle";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const ImageSlider = ({ id }) => {
  const [size, setSize] = useState({
    height: 800,
    width: 375,
  });
  const { loppyOne, loppyTwo, webOne, webTwo } = useStaticQuery(graphql`
    query {
      loppyOne: file(relativePath: { eq: "images/loppy1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 450)
        }
      }
      loppyTwo: file(relativePath: { eq: "images/loppy2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 450)
        }
      }
      webOne: file(relativePath: { eq: "images/web1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
      webTwo: file(relativePath: { eq: "images/web2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
    }
  `);
  const loppy1 = getImage(loppyOne).images.fallback.src;
  const loppy2 = getImage(loppyTwo).images.fallback.src;
  const web1 = getImage(webOne).images.fallback.src;
  const web2 = getImage(webTwo).images.fallback.src;

  const resizer = (id, loppyOne, webOne) => {
    if (id === 0) {
      setSize({
        ...size,
        height: loppyOne.childImageSharp.gatsbyImageData.height,
        width: loppyOne.childImageSharp.gatsbyImageData.width,
      });
    } else {
      setSize({
        ...size,
        height: webOne.childImageSharp.gatsbyImageData.height,
        width: webOne.childImageSharp.gatsbyImageData.width,
      });
    }
  };

  useEffect(() => {
    resizer(id, loppyOne, webOne);
    AOS.init();
    new hoverEffect({
      parent: document.querySelector("#honne-image"),
      intensity: 0.4,
      image1: id === 0 ? loppy2 : web1,
      image2: id === 0 ? loppy1 : web2,
      displacementImage: id === 0 ? loppy2 : web2,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 2.25,
    });
  }, []);

  return (
    <ImageWrapper
      height={size.height}
      width={size.width}
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-duration="2000"
      data-aos-easing="ease"
      id="honne-image"
    >
    </ImageWrapper>
  );
};

export default React.memo(ImageSlider);
