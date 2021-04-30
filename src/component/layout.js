import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./header"
//Components

const GLobalStyle = createGlobalStyle`

  * {
    text-decoration: none;
  }


  ::-webkit-scrollbar {
    display: none;
  }

  html {
    box-sizing: boder-box;
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    height: 100%;

    main {
      background-color: #fff;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
`
const theme = {
  theme: {
    main: "mediumseagreen"
  }
}
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <GLobalStyle />
        <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout





