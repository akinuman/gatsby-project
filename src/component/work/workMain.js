import React from "react"
import { TransitionGroup, Transition } from "react-transition-group"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./../../context/globalContext.js"
import {
  useWorksStateContext,
  useWorksDispatchContext,
} from "./../../context/worksContext.js"
import ParticularWork from "./particularWork"
import WorksChoise from "./worksChoise"
import Arrows from "./arrows"
import ScrollProgress from "./../../component/scrollProgress"
import { EnvoltWorks } from "./../../styles/worksStyle"
import { pages } from "./../../data/data-works"
import { infoEnter, infoExit } from "./../../tl/info"
import { sliderExit, sliderEnter } from "./../../tl/slider"

export default function WorkMain() {
  const { cursorStyles } = useGlobalStateContext()
  const globalDispatch = useGlobalDispatchContext()

  const workDispatch = useWorksDispatchContext()
  const { currentSlide } = useWorksStateContext()
  
  
  const onCursor = (entry = "hover") => {
    const style = cursorStyles[`${entry}`].style
    globalDispatch({ type: "CURSOR_TYPE", payload: style })
  }

  return (
    <EnvoltWorks>
      <ScrollProgress provide="works" />
      <WorksChoise onCursor={onCursor} pages={pages} />
      <TransitionGroup>
        {pages.map((page, index) => {
          if (currentSlide !== index) return null
          return (
            <Transition
              key={`page-proyect-${index}`}
              unmountOnExit={true}
              mountOnEnter={true}
              in={true}
              appear={true}
              timeout={{
                exit: 1500,
                appear: 0,
                enter: 1500,
              }}
              onEntered={node => {
                infoEnter(node)
              }}
              onEntering={node => {
                sliderEnter(node, workDispatch)
              }}
              onExiting={node => {
                sliderExit(node)
                infoExit(node)
              }}
            >
              <ParticularWork page={page} />
            </Transition>
          )
        })}
      </TransitionGroup>
      <Arrows />
    </EnvoltWorks>
  )
}
