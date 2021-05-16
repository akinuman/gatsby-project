import styled from "styled-components"

export const NotFoundWrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: white;
  overflow: hidden;

  .notfound-info {
    position: absolute;
    width: 50vw;
    top: 50%;
    left: 50%;
    perspective: 300px;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    h1 {
      text-align: center;
      font-size: 12vw;
      margin: 0;
      transform: translateY(230px) rotateX(-90deg);
      opacity: 0;
    }
    h5 {
      text-align: center;
      font-size: 2.5vw;
      margin: 0;
      transform: translateY(150px) rotateX(-85deg);
      opacity: 0;
    }
  }
`
