import React from "react"
import Navigation from "./navigation"
import { homeEnter, homeExit } from "./transition/homeEnter"
import { HeaderWrap, Logo } from "./../styles/headerStyles"

const Header = () => {

  return (
    <HeaderWrap>
      <Logo
        to="/"
        // onMouseEnter={() => onCursor("pointer")}
        // onMouseLeave={() => onCursor()}
        exit={{
          trigger: ({ node, e, exit, entry }) =>
            homeExit(node, e, exit, entry),
          length: 1,
        }}
        entry={{
          delay: 1,
          trigger: ({ node, e, exit, entry }) =>
            homeEnter(node, e, exit, entry),
        }}
      >
        UMAN.
      </Logo>
      <Navigation />
    </HeaderWrap>
  )
}

export default Header