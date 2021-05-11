import React from "react"
import styled from "styled-components"

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 120px;
  margin-top: ${props => (props.marginTop ? "20vh" : "0")};
  z-index: 1000;
  mix-blend-mode: difference;
  .spinner {
    margin: 0 auto 0;
    text-align: center;
  }

  .spinner > div {
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: ${props =>
      props.color === "white"
        ? "rgba(255, 255, 255, 0.65)"
        : "rgba(0, 0, 0, 0.65)"};

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.5s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const Loader = ({ color, marginTop }) => {
  return (
    <Spinner color={color} marginTop={marginTop}>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </Spinner>
  )
}

export default Loader
