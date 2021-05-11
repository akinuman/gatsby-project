import React, { useEffect, useRef } from "react"
import Navigation from "./navigation"
import { homeEnter, homeExit } from "./transition/homeEnter"
import { HeaderWrap, Logo } from "./../styles/headerStyles"
import {  useGlobalDispatchContext, useGlobalStateContext } from "../context/globalContext"
import gsap from "gsap/gsap-core"

const Header = () => {
   const { currentPage } = useGlobalStateContext()
  
   const headerRef = useRef(null)
   const logoRef = useRef(null)
  useEffect(() => {
    console.log(currentPage)
    if(currentPage === "works") {
      gsap.to(headerRef.current, {
        duration: 1,
        background: "white",
        ease: "power4.out",
      })
      gsap.to(logoRef.current, {
        duration: 1,
        color: "#000",
        ease: "power4.out",
      })
    }
    if(currentPage === "home") {
      gsap.to(headerRef.current, {
        duration: 1,
        background: "none",
        ease: "power4.out",
      })
      gsap.to(logoRef.current, {
        duration: 1,
        color: "#000",
        ease: "power4.out",
      })
      
    }
    if(currentPage === "about") {
      gsap.to(headerRef.current, {
        duration: 1,
        background: "none",
        ease: "power4.out",
      })
      gsap.to(logoRef.current, {
        duration: 1,
        color: "#FFF",
        ease: "power4.out",
      })
    }

   }, [currentPage])
   
   const globalDispath = useGlobalDispatchContext();

  const pageChanger = (str) => {
    globalDispath({
      type: "CURRENT_PAGE",
      payload: str,
    });
  };
  return (
    <HeaderWrap ref={headerRef}>
      <Logo ref={logoRef}
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
            { 
              pageChanger("home")
              homeEnter(node, e, exit, entry)
            },
        }}
      >
        UMAN.
      </Logo>
      <Navigation />
    </HeaderWrap>
  )
}

export default Header