import React from "react"
import styled from "styled-components"

export const WallWrapper = styled.div`
  position: fixed;
  display: none;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 11;
  .leaf {
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    background: #000;
  }
`
const WallToAbout = () => {
  return (
    <WallWrapper id="walltoabout">
      <div className="leaf"></div>
    </WallWrapper>
  )
}
export default WallToAbout;