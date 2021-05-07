import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
//Context
import {
  useWorksDispatchContext,
  useWorksStateContext,
} from "./../../context/worksContext.js"
//Components
// import VideoSlider from "./videoSlider"
// import LogoSlider from "./logoSlider"
import { linearFunction } from "./../../helper/mathHelper"
//Data
import { wSmall } from "./../../data/data-responsive"
import ImageSlider from "./imageSlider"

const Slider = ({ img, id, idLogo, onCursor }) => {
  const { currentSlide, buttonBlocked, lengthSlide } = useWorksStateContext()
  const worksDispatch = useWorksDispatchContext()

  const sliderWrapper = useRef(null)
  const animRot = useRef(null)
  const animMov = useRef(null)

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

  const onDragHandler = (_, info) => {
    if (!buttonBlocked) {
      if (Math.abs(info.offset.x) > 100) {
        info.offset.x < 0 ? nextSlide() : prevSlide()
        worksDispatch({
          type: "BLOCK_BUTTON",
          payload: true,
        })
      }
    }
  }

  const handleRotateSlide = e => {
    if (window.innerWidth > wSmall) {
      const video = document.querySelector("video.video-wrapper")
      const rect = e.currentTarget.getBoundingClientRect()
      const offsetTop = rect.y
      const offsetLeft = rect.x
      const pointerX = e.clientX - offsetLeft
      const pointerY = e.clientY - offsetTop

      const rotateY = linearFunction(pointerX, [0, rect.width], [-15, 15])
      const y = linearFunction(pointerY, [0, rect.height], [-60, 60])

      sliderWrapper.current &&
        (animRot.current = gsap.to(sliderWrapper.current, {
          duration: 2,
          y,
          x: rotateY * 5,
          rotateY,
          rotateX: y * -0.25,
          overwrite: true,
          ease: "power4.out",
        }))
      video &&
        (animMov.current = gsap.to(video, {
          duration: 2,
          y: -y * 0.4,
          x: -rotateY * 2,
          overwrite: true,
          ease: "power4.out",
        }))
    }
  }

  const leaveHover = e => {
    const video = document.querySelector("video.video-wrapper")
    const logo = document.querySelector(".page-logo")

    sliderWrapper.current &&
      video &&
      gsap.to([sliderWrapper.current, video], {
        duration: 2,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        x: 0,
        delay: 0.5,
        // overwrite: true,
        ease: "sine.out",
      })

    logo &&
      gsap.to(logo, {
        duration: 2,
        z: 0,
        delay: 0.5,
        overwrite: true,
        ease: "sine.out",
      })
  }
  const enterHover = _ => {
    if (window.innerWidth > wSmall) {
      const logo = document.querySelector(".page-logo")
      const sliderW = document.querySelector(".slider-wrapper")

      logo &&
        gsap.to(logo, {
          duration: 1.5,
          z: 80,
          overwrite: true,
          ease: "power2.out",
        })
    }
  }

  useEffect(() => {
    const sliderComp = document.querySelector(".slider-comp")
    setTimeout(() => {
      sliderComp.addEventListener("mousemove", handleRotateSlide)
      sliderComp.addEventListener("mouseenter", enterHover)
      sliderComp.addEventListener("mouseleave", leaveHover)
    }, 5000)
    return () => {
      sliderComp.removeEventListener("mousemove", handleRotateSlide)
      sliderComp.removeEventListener("mouseenter", enterHover)
      sliderComp.removeEventListener("mouseleave", leaveHover)
    }
  }, [])

  return (
    <div className="slider-size">
      <motion.div
        className="slider-comp"
        drag
        dragConstraints={{ left: 1, right: 1, top: -1, bottom: 1 }}
        dragTransition={{ bounceStiffness: 800, bounceDamping: 17 }}
        onDragEnd={(e, info) => onDragHandler(e, info)}
        onMouseEnter={() => onCursor("drag")}
        onMouseLeave={e => {
          onCursor()
        }}
        whileTap={{ scale: 0.65 }}
      >
        <div className="slider-wrapper" ref={sliderWrapper}>
          <div className="slider-content">
            {/* <VideoSlider id={id} /> */}
            <div className="brightness"></div>
          </div>
          <div className="page-fill">
            <ImageSlider />
          </div>
          <div className="slider-tap"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slider
