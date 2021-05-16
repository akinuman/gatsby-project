import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./header"
import { useGlobalDispatchContext, useGlobalStateContext } from "../context/globalContext"
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
 const dispatch = useGlobalDispatchContext()
 const { isGreeted } = useGlobalStateContext()
  const greeting = _ => {
    if (!isGreeted) {
      console.clear()
      console.log(
        "\n %c %c %c🤖 Akın Uman 🤖 %c %c \n",
        "background: #961FFF;  padding:5px 0;",
        "background: #961FFF;  padding:5px 0;",
        "color: #FFF; font-weight: bold;font-size: 40px; background: #6B39FF; padding:5px 0;",
        "background: #961FFF;  padding:5px 0;",
        "background: #961FFF;  padding:5px 0;"
      )

      console.log(
        "%c⚛️ ReactJS \n♻️ GSAP \n🔺Three-React-Fiber \n💜 Gatsby \n💅 Styled-Components",
        "font-size: 25px; font-weight: bold;"
      )

      console.log(
        "%cInstagram: akinuman \nGithub: akinuman \nNumber: +905432809752 \nEmail: akinuman26@gmail.com",
        "text-align: center;"
       )
      

      dispatch({
        type: "CONSOLE_GREET",
      })
    }
  }

  useEffect(() => {
    greeting()
  }, [])
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





