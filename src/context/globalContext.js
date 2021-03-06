import React, { createContext, useReducer, useContext } from "react"

const defaultState = {
  globalLanguage: "en",
  cursorType: "hover",
  cursorStyles: {
    hover: { style: "hover", text: false },
    pointer: { style: "pointer", text: false },
    drag: { style: "drag", text: "drag" },
  },
  isGreeted: false,
  currentPage: "home",
}

const GlobalStateContext = createContext(defaultState)
const GlobalDispatchContext = createContext()

const globalReducer = (state, action) => {
  switch (action.type) {
    case "SLIDER":
      return {
        ...state,
        currentSlide: action.payload,
      }
    case "CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    case "BLOCK_BUTTON":
      return {
        ...state,
        buttonBlocked: action.payload,
      }


    case "CONSOLE_GREET": {
      return {
        ...state,
        isGreeted: true,
      }
    }
    

    default:
      return state
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    globalLanguage: "en",
    cursorType: "hover",
    cursorStyles: {
      hover: { style: "hover", text: false },
      pointer: { style: "pointer", text: false },
      drag: { style: "drag", text: "drag" },
    },
    isGreeted: false,
    currentPage: "home"
  })

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
