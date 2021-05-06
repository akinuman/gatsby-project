import React, { useEffect, useRef } from "react"
import Navigation from "./navigation"
import { homeEnter, homeExit } from "./transition/homeEnter"
import { HeaderWrap, Logo } from "./../styles/headerStyles"
import { useGlobalStateContext } from "../context/globalContext"
import gsap from "gsap/gsap-core"

const Header = () => {
   const { currentPage } = useGlobalStateContext()
   const headerRef = useRef(null)
   useEffect(() => {
    if(currentPage === "works") {
      gsap.to(headerRef.current, {
        duration: 1,
        background: "white",
        ease: "power4.out",
      })
    }
    return () => {
      if(currentPage === "works") {
        gsap.to(headerRef.current, {
          duration: 1,
          background: "none",
          overwrite: true
        })
      }
    }
   }, [currentPage])
  return (
    <HeaderWrap ref={headerRef}>
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