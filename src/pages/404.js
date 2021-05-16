import React, { useEffect, useRef } from "react"
import gsap from "gsap"
//Styled Components
import { NotFoundWrapper } from "./../styles/notFoundStyle"
import WallToHome from "./../component/transition/wallToHome"
import WallToWorks from "./../component/transition/wallToWorks"
import WallToAbout from "./../component/transition/wallToAbout"
import Layout from "../component/layout"
//Data

const NotFoundPage = () => {

  const wrapperText = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const timeline = useRef(gsap.timeline())

  

  useEffect(() => {
    timeline.current
      .to(
        [text1.current, text2.current],
        {
          duration: 1,
          y: 0,
          rotateX: 0,
          opacity: 1,
          stagger: 0.45,
          delay: 0.2,
          ease: "circ.out",
        },
        "enter"
      )
      
  }, [])

  return (
    <>
        <Layout>
      <WallToHome />
      <WallToWorks />
      <WallToAbout />
      <NotFoundWrapper className="globalContainer">
        <div className="notfound-info" ref={wrapperText}>
          <h1 ref={text1}>404!</h1>
          <h5 ref={text2}>NOT FOUND.</h5>
        </div>
      </NotFoundWrapper>
        </Layout>
    </>
  )
}

export default NotFoundPage
