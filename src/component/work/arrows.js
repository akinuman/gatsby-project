import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { linearFunction } from "./../../helper/mathHelper"
import { ArrowsWrap } from "./../../styles/worksStyle"
import { ArrowRight, ArrowLeft } from "./../../images/icons"
//Transition
import { worksEnter } from "./../transition/homeEnter"
//Context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./../../context/globalContext.js"
import {
  useWorksStateContext,
  useWorksDispatchContext,
} from "./../../context/worksContext.js"

const Arrows = ({ display }) => {
  const arrowRef = useRef(null)
  const { cursorStyles } = useGlobalStateContext()
  const { currentSlide, lengthSlide, buttonBlocked } = useWorksStateContext()
  const globalDispatch = useGlobalDispatchContext()
  const worksDispatch = useWorksDispatchContext()

  const prevSlide = () => {
    if (currentSlide === 0) {
      const sliderSize = lengthSlide - 1
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      })
    } else {
      const sliderSize = currentSlide - 1
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      })
    }
  }

  const nextSlide = () => {
    if (currentSlide === lengthSlide - 1) {
      const sliderSize = 0
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      })
    } else {
      const sliderSize = currentSlide + 1
      worksDispatch({
        type: "SLIDER",
        payload: sliderSize,
      })
    }
  }

  const forkSlide = (_, side) => {
    if (!buttonBlocked) {
      side === "next" ? nextSlide() : prevSlide()
      worksDispatch({
        type: "BLOCK_BUTTON",
        payload: true,
      })
    }
  }

  const arrowMagnetOn = e => {
    const { clientX, clientY } = e
    const arrow = e.currentTarget.querySelector("svg")
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetWidth = e.currentTarget.offsetWidth
    const offsetHeight = e.currentTarget.offsetHeight
    const diffX = clientX - rect.left
    const diffY = clientY - rect.top
    const x = linearFunction(
      diffX,
      [0, offsetWidth],
      [-offsetWidth / 2, offsetWidth / 2]
    )
    const y = linearFunction(
      diffY,
      [0, offsetHeight],
      [-offsetHeight / 2, offsetHeight / 2]
    )

    // paragraph.style.overflow = "visible"

    gsap.to(arrow, {
      duration: 1,
      x: x,
      y: y,
      ease: "expo.out",
    })
  }

  const arrowMagnetOff = e => {
    const arrow = e.currentTarget.querySelector("svg")
    gsap.to(arrow, {
      duration: 1.5,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.65,
      ease: "elastic.out(1.5,0.4)",
    })
  }

  const arrowMouseEnter = e => {
    const arrow = e.currentTarget.querySelector("svg")

    gsap.to(arrow, {
      duration: 1,
      opacity: 1,
      scale: 1.3,
      ease: "expo.out",
    })
  }

  const onCursor = (entry = "hover") => {
    const style = cursorStyles[`${entry}`].style
    globalDispatch({ type: "CURSOR_TYPE", payload: style })
  }

  useEffect(() => {
    worksEnter(arrowRef.current)
  }, [])

  return (
    <ArrowsWrap className="arrows-wrap" ref={arrowRef} display={display}>
      <button
        className="arrow left"
        onMouseMove={arrowMagnetOn}
        onMouseEnter={e => {
          arrowMouseEnter(e)
          onCursor("pointer")
        }}
        onMouseLeave={e => {
          arrowMagnetOff(e)
          onCursor()
        }}
        onClick={e => forkSlide(e, "prev")}
      >
        <ArrowLeft />
      </button>

      <p>
        <span className="numbers">
          <span>{`${currentSlide + 1}`}</span>
          {` / ${lengthSlide}`}
        </span>
      </p>

      <button
        className="arrow rigth"
        onMouseMove={arrowMagnetOn}
        onMouseEnter={e => {
          arrowMouseEnter(e)
          onCursor("pointer")
        }}
        onMouseLeave={e => {
          arrowMagnetOff(e)
          onCursor()
        }}
        onClick={e => forkSlide(e, "next")}
      >
        <ArrowRight />
      </button>
    </ArrowsWrap>
  )
}

export default Arrows
