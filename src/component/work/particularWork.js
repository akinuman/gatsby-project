import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import Scrollbar from "smooth-scrollbar"
//Helpers
import EdgeEasing from "./../../helper/edgeEasing"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./../../context/globalContext.js"
import { useWorksStateContext } from "./../../context/worksContext"
//Components
import Info from "./info"
//import Slider from "./slider"
import TitleBack from "./titleBack"
//Styled Components
import {
  ScrollWork,
  WrapperInfo,
  WrapperSlider,
  WrapperWork,
} from "./../../styles/worksStyle"
//Data
import { wMediumShort } from "./../../data/data-responsive"

Scrollbar.use(EdgeEasing)

export default function ParticularWork({ page }) {
  const { cursorStyles, globalLanguage } = useGlobalStateContext()
  const { currentSlide } = useWorksStateContext()
  const globalDispatch = useGlobalDispatchContext()
    
  const containerW = useRef(null)
  const scrollbar = useRef(null)
  const deltaY = useRef(0)

  const { img, id, idLogo, bgFill } = page
  const width = img.size === undefined ? 0 : img.size.width
  const scale = img.size === undefined ? 0 : img.size.scale

  const onCursor = (entry = "hover") => {
    const style = cursorStyles[`${entry}`].style
    globalDispatch({ type: "CURSOR_TYPE", payload: style })
  }

  const onScroll = (e, scrollbar) => {
    if (window.innerWidth > wMediumShort) {
      const titleBack = document.querySelector(".title-back")
      const letterSplit = document.querySelectorAll(".letter-split")
      const offset = (scrollbar && scrollbar.offset.y) || 0
      const limit =
        containerW.current &&
        containerW.current.scrollHeight - containerW.current.clientHeight
      const x =
        (offset - limit / 2) * (window.innerHeight / window.innerWidth) * 5
      // // const x = linearFunction(offset, [0, limit], [-700, 700])
      const color = Math.abs((offset - limit) / limit) / 6 || 0
      const stroke = (1 - Math.abs((offset - limit) / limit)) / 6 || 0
      deltaY.current = offset - deltaY.current
      const mapDelta = deltaY.current * 1.8

      gsap.to(titleBack, {
        duration: 0.4,
        x,
        textStrokeColor: `rgba(255, 255, 255, ${stroke - 0.05})`,
        color: `rgba(255,255,255,${color})`,
        ease: "expo.out",
      })
      letterSplit &&
        gsap.to([...letterSplit], {
          duration: 0.4,
          skewX: mapDelta,
        })

      deltaY.current = offset
    }
  }

  const onProgressScroll = (e, scrollbar) => {
    const offset = (scrollbar && scrollbar.offset.y) || 0
    const limit =
      (scrollbar && scrollbar.limit.y) ||
      containerW.current.scrollHeight - containerW.current.clientHeight
    let progress = offset / limit
    progress = Number(progress.toFixed(3)) * 100
    gsap.to(document.querySelector(".load-bar"), {
      duration: 1,
      width: `${progress}%`,
      ease: "circ.out",
    })
  }

  const eventScrollHandler = e => {
    onScroll(e, scrollbar.current)
  }
  const progressScrollHandler = e => {
    onProgressScroll(e, scrollbar.current)
  }

  const handleTitleResize = _ => {
    if (window.innerWidth > wMediumShort) {
      onScroll(null, scrollbar.current)
      onProgressScroll(null, scrollbar.current)
    }
  }

  useEffect(() => {
    if (Scrollbar.has(containerW.current)) {
      scrollbar.current.removeListener(eventScrollHandler)
      scrollbar.current.removeListener(progressScrollHandler)
      setTimeout(() => {
        Scrollbar.destroy(containerW.current)
        gsap.to(document.querySelector(".load-bar"), {
          duration: 1,
          width: "0%",
          ease: "circ.out",
        })
      }, 1200)
      scrollbar.current = null
    } else {
      scrollbar.current = Scrollbar.init(containerW.current, {
        damping: 0.08,
        renderByPixels: false,
      })
      scrollbar.current && onScroll(null, scrollbar.current)
      scrollbar.current && scrollbar.current.addListener(eventScrollHandler)
      scrollbar.current && scrollbar.current.addListener(progressScrollHandler)
    }
    // eslint-disable-next-line
  }, [currentSlide])

  useEffect(() => {
    handleTitleResize()
    // eslint-disable-next-line
  }, [globalLanguage])

  useEffect(() => {
    handleTitleResize()
    window.addEventListener("resize", handleTitleResize)
    return () => {
      window.removeEventListener("resize", handleTitleResize)
      scrollbar.current && scrollbar.current.removeListener(eventScrollHandler)
      scrollbar.current &&
        scrollbar.current.removeListener(progressScrollHandler)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <WrapperWork>
      <TitleBack page={page} />
      <WrapperSlider
        scale={scale}
        width={width}
        bgFill={bgFill}
        className="slider-w"
      >
        {/* <Slider img={img} id={id} idLogo={idLogo} onCursor={onCursor} /> */}
      </WrapperSlider>
      <ScrollWork className="container-W" ref={containerW}>
        <WrapperInfo>
          <Info onCursor={onCursor} page={page} />
        </WrapperInfo>
      </ScrollWork>
    </WrapperWork>
  )
}
