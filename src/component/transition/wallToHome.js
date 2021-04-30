import React from "react"
import styled from "styled-components"


const colorWallHome = `radial-gradient(
    circle farthest-corner at -0.1% 100.8%,
    rgba(0, 234, 255, 1) 0.2%,
    rgba(0, 124, 255, 1) 59.1%,
    rgba(198, 0, 255, 1) 100.2%
  )`

export const WallWrapper = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 11;
  .to-video {
    position: absolute;
    height: 100vh;
    width: 100vw;
    /* background-color: #252850; */
    background-image: ${colorWallHome};
    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  }
`
const WallToHome = () => {
  return (
    <WallWrapper id="walltohome">
      <div className="to-video"></div>
    </WallWrapper>
  )
}

export default WallToHome