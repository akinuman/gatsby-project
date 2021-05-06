import React, { createContext, useReducer, useContext } from "react"
import { pages } from "./../data/data-works"

const defaultState = {
  currentSlide: 0,
  lengthSlide: pages.length,
  buttonBlocked: true,
}

const WorksStateContext = createContext(defaultState)
const WorksDispatchContext = createContext()

const worksReducer = (state, action) => {
  switch (action.type) {
    case "SLIDER":
      return {
        ...state,
        currentSlide: action.payload,
      }
    case "BLOCK_BUTTON":
      return {
        ...state,
        buttonBlocked: action.payload,
      }
    default:
      return state
  }
}

export const WorksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(worksReducer, {
    currentSlide: 0,
    lengthSlide: pages.length,
    buttonBlocked: true,
  })

  return (
    <WorksStateContext.Provider value={state}>
      <WorksDispatchContext.Provider value={dispatch}>
        {children}
      </WorksDispatchContext.Provider>
    </WorksStateContext.Provider>
  )
}

export const useWorksStateContext = () => useContext(WorksStateContext)
export const useWorksDispatchContext = () => useContext(WorksDispatchContext)
