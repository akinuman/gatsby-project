import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

function SEO({ lang, meta, title, description, pic }) {
  const { site, img } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        img: file(relativePath: { eq: "images/uman.png" }) {
            childImageSharp {
            gatsbyImageData(width: 600)
            }
        }
      }
    `
  )
  const ogimage = getImage(img)

  const metaDescription = description || site.siteMetadata.description
      console.log(ogimage)
  return (
    <Helmet
      title={title}
      titleTemplate={`%s | Akın Uman, Frontend Developer`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta property="og:image" content={ogimage} />
      <meta name="description" content={description} />
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
