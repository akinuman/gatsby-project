import React, { useEffect, useState } from "react";

import hoverEffect from "hover-effect";
import AOS from "aos";
import { ImageWrapper } from "./../../styles/worksStyle";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const ImageSlider = ({ id }) => {
  const [size, setSize] = useState({
    height: 800,
    width: 375,
  });
  const { loppyOne, loppyTwo } = useStaticQuery(graphql`
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
    }
  `);
  const loppy1 = getImage(loppyOne).images.fallback.src;
  const loppy2 = getImage(loppyTwo).images.fallback.src;

  const resizer = (id, loppyOne) => {
    if (id === 0) {
      setSize({
        ...size,
        height: loppyOne.childImageSharp.gatsbyImageData.height,
        width: loppyOne.childImageSharp.gatsbyImageData.width,
      });
    } 
  };

  useEffect(() => {
    resizer(id, loppyOne);
    AOS.init();
    new hoverEffect({
      parent: document.querySelector("#honne-image"),
      intensity: 0.4,
      image1: loppy2,
      image2:  loppy1,
      displacementImage: loppy2,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 2.25,
    });
    // eslint-disable-next-line
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
