import React from "react"
import styled from "styled-components"

const ScrollDown = styled.div`
  position: fixed;
  width: 70px;
  top: 12%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  mix-blend-mode: difference;
  opacity: 1;
  transition: top 0.5s ease-out;
  p {
    width: inherit;
    margin: 5px 0 0 0;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
    user-select: none;
    text-align: center;
    text-transform: uppercase;
  }
  .progress-bar {
    position: relative;
    width: inherit;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    .load-bar {
      position: absolute;
      height: 100%;
      width: 0;
      background: rgba(255, 255, 255, 1);
    }
  }
  @media (max-width: 1000px) {
    display: ${props => (props.provide === "works" ? "none" : "block")};
  }
  @media (max-width: 800px) {
    top: ${props => (props.provide === "about" ? "20%" : "12%")};
  }
  @media (max-width: 650px) {
    /* display: ${props => (props.provide === "about" ? "none" : "block")}; */
  }
`

export default function ScrollProgress({ provide }) {
  return (
    <ScrollDown className="scroll-down" provide={provide}>
      <div className="progress-bar">
        <div className="load-bar"></div>
      </div>
      <p>scroll down</p>
    </ScrollDown>
  )
}
