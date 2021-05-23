import React from "react"
import gsap from "gsap"
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaCheck } from "react-icons/fa"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./../../context/globalContext.js"
import { LocateWrapper } from "./../../styles/homeStyles"

export default function Locate() {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()

  const onCursor = (entry = "hover") => {
    const style = cursorStyles[`${entry}`].style
    dispatch({ type: "CURSOR_TYPE", payload: style })
  }

  const copyText = e => {
    clickBoard(e)
    const select = e.currentTarget.getAttribute("data-locate")
    const textArea = document.createElement("textarea")
    textArea.value = select
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand("copy")
    } catch (err) {
      console.log("Oops, unable to copy")
    }
    document.body.removeChild(textArea)
  }

  const appearInfo = e => {
    const clipboard = e.currentTarget.querySelector(".clipboard")
    gsap.to(clipboard, {
      duration: 0.8,
      top: "-100%",
      ease: "power4.out",
      overwrite: true,
    })
  }

  const clickBoard = e => {
    const clipboard = e.currentTarget.querySelector(".clipboard")
    gsap.from(clipboard, {
      duration: 3,
      background: "red",
      ease: "power1.out"
    }
    )
  }

  const disAppearInfo = e => {
    const clipboard = e.currentTarget.querySelector(".clipboard")
    gsap.to(clipboard, {
      duration: 0.8,
      top: "100%",
      background: "#fff",
      ease: "power4.out",
      overwrite: true,
    })
  }

  return (
    <LocateWrapper>
      <div className="section-contact-inner">
        <div className="wrapper-text">
          <h2>
            Locate Me{" "}
            <span role="img" aria-label="location">
              📍
            </span>
          </h2>
        </div>
      </div>
      <div className="legend">tap icons to copy</div>
      <div className="locate-me-wrapper">
        <div
          role="presentation"
          className="locate-wrapper-item"
          onMouseEnter={e => {
            appearInfo(e)
            onCursor("pointer")
          }}
          onMouseLeave={e => {
            disAppearInfo(e)
            onCursor()
          }}
          onClick={copyText}
          data-locate="akinuman26@gmail.com"
        >
          <div className="item-envolt">
            <p className="item-content">
              <FaEnvelope />
              <span className="to-copy">akinuman26@gmail.com</span>
            </p>
            <p className="clipboard">
              <span>tap to copy</span>
              <FaCheck />
            </p>
          </div>
        </div>
        <div
          role="presentation"
          className="locate-wrapper-item"
          onMouseEnter={e => {
            appearInfo(e)
            onCursor("pointer")
          }}
          onMouseLeave={e => {
            disAppearInfo(e)
            onCursor()
          }}
          onClick={copyText}
          data-locate="(+90) 543 280-9752"
        >
          <div className="item-envolt">
            <p className="item-content">
              <FaPhoneAlt />
              <span className="to-copy">(+90) 543 280-9752</span>
            </p>
            <p className="clipboard">
              <span>tap to copy</span>
              <FaCheck />
            </p>
          </div>
        </div>
        <div
          role="presentation"
          className="locate-wrapper-item"
          onMouseEnter={e => {
            appearInfo(e)
            onCursor("pointer")
          }}
          onMouseLeave={e => {
            disAppearInfo(e)
            onCursor()
          }}
          onClick={copyText}
          data-locate="Antalya, Turkey"
        >
          <div className="item-envolt">
            <p className="item-content">
              <FaMapMarkerAlt />
              <span className="to-copy">Antalya, Turkey</span>
            </p>
            <p className="clipboard">
              <span>tap to copy</span>
              <FaCheck />
            </p>
          </div>
        </div>
      </div>
    </LocateWrapper>
  )
}
