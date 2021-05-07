import React from "react"
//Context
import {
  useWorksStateContext,
  useWorksDispatchContext,
} from "./../../context/worksContext.js"
//Styled Components
import { WrapperChoise } from "./../../styles/worksStyle"


export default function WorksChoise({ onCursor, pages }) {
  const workDispatch = useWorksDispatchContext()
  const { currentSlide, buttonBlocked } = useWorksStateContext()

  const handlerChoise = e => {
      console.log("akın")
    workDispatch({
      type: "BLOCK_BUTTON",
      payload: true,
    })
    if (!buttonBlocked) {
      const choise = Number(e.currentTarget.getAttribute("id"))
      workDispatch({
        type: "SLIDER",
        payload: choise,
      })
    }
  }
  
  return (
    <WrapperChoise>
      {pages.map((page, index) => {
        const act = currentSlide === index ? "current" : ""
        return (
          <button
            aria-label={`Go to work ${index + 1}`}
            key={page.id}
            id={page.id}
            className={`circle-choise ${act}`}
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={() => onCursor()}
            onClick={handlerChoise}
          >
            <div className="point-choise"></div>
          </button>
        )
      })}
    </WrapperChoise>
  )
}
