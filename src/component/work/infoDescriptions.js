import React from "react"
import gsap from "gsap"
//Helpers
import { linearFunction } from "./../../helper/mathHelper"
//Styled Components
import { InfoDescription } from "./../../styles/worksStyle"
//Data
import { wMediumShort } from "./../../data/data-responsive"

export default function InfoDescriptions({ description }) {
  const handleMoveText = e => {
    if (window.innerWidth > wMediumShort) {
      const { clientX: x, clientY: y } = e
      const wrapper = e.currentTarget
      const content = wrapper.querySelector(".description-wrapp-word")
      const allWords = [...wrapper.querySelectorAll(".description-word")]
      const bounding = wrapper.getBoundingClientRect()
      const offsetX = x - bounding.x
      const offsetY = y - bounding.y
      const Rx = linearFunction(offsetX, [0, bounding.width], [-20, 20])
      const Ry = linearFunction(offsetY, [0, bounding.height], [30, -30])
      const Zl = linearFunction(offsetX, [0, bounding.width], [15, -15])
      const Zr = linearFunction(offsetX, [0, bounding.width], [-15, 15])

      gsap.to(content, {
        duration: 2,
        rotationX: Ry,
        rotationY: Rx,
        ease: "power3.out",
        overwrite: true,
      })
      allWords.forEach((word, i) => {
        const parity = i % 2
        const z = parity === 0 ? Zl : Zr
        gsap.to(word, {
          duration: 2,
          z,
          ease: "expo.out",
          overwrite: true,
        })
      })
    }
  }

  const handleTextLeave = e => {
    const content = e.currentTarget.querySelector(".description-wrapp-word")
    const allWords = [...e.currentTarget.querySelectorAll(".description-word")]
    gsap.to(allWords, {
      duration: 1.5,
      z: 0,
      opacity: 1,
      delay: 0.7,
      ease: "expo.out",
      overwrite: "allOnStart",
    })
    gsap.to(content, {
      duration: 1.5,
      rotationX: 0,
      rotationY: 0,
      delay: 0.7,
      ease: "power3.out",
      overwrite: "allOnStart",
    })
  }

  return (
    <InfoDescription
      className="description-page description-anim"
      onMouseMove={handleMoveText}
      onMouseLeave={handleTextLeave}
    >
      <div className="description-perspective">
        <div className="description-wrapp-word">
          {description.map((word, i) => {
            return (
              <div className="description-word" key={`desc-word-${i}`}>
                {word}
              </div>
            )
          })}
        </div>
      </div>
    </InfoDescription>
  )
}
