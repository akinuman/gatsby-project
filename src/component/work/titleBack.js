import React from "react"
//Styled Components
import { WrapperTitleBack } from "./../../styles/worksStyle"

export default function NameTitleBack({ page }) {
  return (
    <WrapperTitleBack left={page.left} className="title-back">
      <span>
        {page.titleArray.map((letter, i) => {
          if (letter === " ") return " "
          return (
            <div key={`letter-${i}`} className={`letter-split letter-${i}`}>
              <span className="letter-translate">{letter}</span>
            </div>
          )
        })}
      </span>
    </WrapperTitleBack>
  )
}