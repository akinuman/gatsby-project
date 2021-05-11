import React, { useEffect, useRef } from "react"
import gsap from "gsap"

export default function FloatTitle() {
  const wrapper = useRef(null)
  const pageWidth = useRef(null)

  const moveLetters = _ => {
    const letter = wrapper.current.querySelectorAll(".resume-overflow")
    const widthPercent = pageWidth.current && pageWidth.current * 0.5

    gsap.to([...letter], {
      duration: 4,
      yoyo: true,
      repeat: -1,
      repeatDelay: 0,
      y: gsap.utils.wrap([100, -100]),
      ease: "sine.inOut",
    })

    widthPercent &&
      gsap.to(wrapper.current, {
        duration: 25,
        yoyo: true,
        repeat: -1,
        repeatDelay: 2,
        x: widthPercent,
        ease: "sine.inOut",
      })
  }

  const calculateWidth = _ => {
    pageWidth.current = window.innerWidth
  }

  useEffect(() => {
    calculateWidth()
    moveLetters()

    window.addEventListener("resize", calculateWidth)
    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [])

  return (
    <div className="onmouse-resume">
      <div className="resume-word-wrapper" ref={wrapper}>
        <div className="resume-overflow">
          <span>R</span>
        </div>
        <div className="resume-overflow">
          <span>E</span>
        </div>
        <div className="resume-overflow">
          <span>S</span>
        </div>
        <div className="resume-overflow">
          <span>U</span>
        </div>
        <div className="resume-overflow">
          <span>M</span>
        </div>
        <div className="resume-overflow">
          <span>E</span>
        </div>
      </div>
    </div>
  )
}
