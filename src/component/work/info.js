import React, { useEffect } from "react"
//Context
import InfoDescriptions from "./infoDescriptions"
//Styled Components
import { ContentInfo } from "./../../styles/worksStyle"
//Data
import { worksText } from "./../../data/text-data"
//Css
//import "./scrollbar.css"

const Info = ({ page, onCursor }) => {
  const { title, slug, mainColor, src } = page
  const { particular, enterHere } = worksText
const { mainDes, secunDes, developedIn } = particular[`${slug}`]

  return ( 
    <ContentInfo className="content-info">
      <div className="container-info">
        <div className="main-info margin-description">
          <h2 className="title-page-wrapper rot-p ">
            <p className="title-page">
              <span className="name ud-p1">{title}</span>
            </p>
          </h2>
          <p className="year-text-aling rot-p ">
            <span
              className="year ud-p1"
              style={{
                color: `${mainColor}`,
              }}
            >
              {developedIn}
            </span>
          </p>
        </div>
        <InfoDescriptions description={mainDes} />
        <div className="language-info">
          <a
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={() => onCursor()}
            href={src}
            target="_blank"
            rel="noreferrer"
          >
            <span className="language click-anim  ud-p1">
              <span
                className="underline"
                style={{
                  backgroundColor: `${mainColor}`,
                  opacity: "0.55",
                }}
              ></span>
              {enterHere}{" "}
              <span
                className="emoji-move"
                role="img"
                aria-label="hands here"
                style={{ padding: "5px", display: "inline-block" }}
              >
                👈🏻
              </span>
            </span>
          </a>
        </div>
        <InfoDescriptions description={secunDes} />
      </div>
    </ContentInfo>
  )
}

export default Info
