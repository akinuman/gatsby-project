import React from "react"
import styled from "styled-components"

export const WallWrapper = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 11;
  .wall {
    position: absolute;
    height: 100vh;
    width: 0vw;
    transform-origin: right bottom;
    transform: skewX(45deg);
  }
  .wall-1 {
    /* background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(69, 86, 102, 1) 0%,
      rgba(34, 34, 34, 1) 90%
    ); */

    background-image: linear-gradient(
      109.6deg,
      rgba(48, 207, 208, 1) 11.2%,
      rgba(51, 8, 103, 1) 92.5%
    );
  }
  .wall-2 {
    background-color: #fff;
  }
`
const WallToWorks = () => {
  return (
    <WallWrapper id="walltoworks">
      <div className="wall wall-1"></div>
      <div className="wall wall-2"></div>
    </WallWrapper>
  )
}

export default WallToWorks
