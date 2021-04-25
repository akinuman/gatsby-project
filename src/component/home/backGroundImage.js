import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const WallPaper = () => {
  const {
    img: { edges },
  } = useStaticQuery(graphql`
    query {
      img: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "wallImage.jpg" }
        }
      ) {
        edges {
          node {
            sharp: childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const bgImg = edges[0].node.sharp.fluid

  return (
    <>
      <BackgroundImage
        Tag="span"
        className="bg"
        fluid={bgImg}
        backgroundColor={`#040e18`}
      ></BackgroundImage>
    </>
  )
}

export default WallPaper