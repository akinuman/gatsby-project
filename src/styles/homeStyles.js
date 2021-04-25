import styled, { createGlobalStyle } from "styled-components";


const  ComfortaaBold = require("../images/ComfortaaBold.ttf")


export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Comfortaa-Bold';
  src: url(${ComfortaaBold}) format('truetype');
}
`


export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
export const HomeWrapper = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const PresentationWrapper = styled.section`
  position: relative;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  perspective: 700px;
  transition: background-color cubic-bezier(0.2, 0, 0, 1) 1s;
  --interpolationX: 50;
  --interpolationY: 50;

  .container {
    font-family: "Comfortaa-Bold";
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    transform-origin: center center;
    transform-style: preserve-3d;

    .wrapper-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      overflow: hidden;
      .img-relative {
        position: relative;
        height: 50%;
        width: 60%;
        top: 0%;
        left: 0%;
        overflow: hidden;
        > div {
          position: relative;
          width: 100%;
          height: 100%;
          > div {
            height: 100% !important;
            width: 100%;
            padding-top: 0 !important;
            position: absolute !important;
          }
        }
      }

      .black-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #252850;
        z-index: 5;
      }

      .video-wrapper,
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        opacity: 0.95;
        /* opacity: 0; */
      }
    }
    .title-name {
      position: relative;
      width: 100%;
      /* max-width: none; */
      padding-left: 10vw;
      padding-right: 25px;
      opacity: 0;
      margin-right: auto;
      margin-left: auto;
      margin-top: 10%;
      transform: translate3d(0, 0, 70px);
      user-select: none;
      z-index: 2;
      h1.contrast {
        width: 100%;
        text-transform: uppercase;
        font-size: 10vw;
        font-weight: 800;
        line-height: 0.8;
        
        padding: 3rem;
        -webkit-font-smoothing: antialiased;
        transition: color cubic-bezier(0.2, 0, 0, 1) 1s;
        opacity: 1;

        @media (min-width: 650px) {
          font-size: 60px;
        }
        @media (min-width: 800px) {
          font-size: 72px;
        }
        @media (min-width: 1000px) {
          font-size: 98px;
        }
        .row-bro {
          margin-top: 20px;
          display: flex;
          .content-changer {
            z-index: 1;
            left: 280px;
          }
        }
        .upperWord {
          display: flex;
          position: fixed;
          z-index: 2;
          bottom: 65%;
          background: white;
          
          min-height: 250px;
          justify-content: flex-end;
          flex-direction: column;
          padding: 1rem;
          padding-right: 9vw;
          overflow: hidden;
          span {
            display: inline-block;
            transform: translate(-40%, 100%);
          }
        }
        .split-parag {
          margin-top: 70px;
          padding: 0.2rem;
          overflow: hidden;
          span {
            display: inline-block;
            transform: translate(-40%, 100%);
          }
        }
        .split-parag.a {
          padding-top: 8px;
          
        }
        split-parag.make {
          display: flex;
          align-self: flex-end;
        }
        
        .split-parag.block1 {
          margin-top: 10px;
          opacity: 0;
          margin-left: 10px
        }
        .split-parag.block2 {
          margin-top: 10px;
          opacity: 0;
          margin-left: 15px;
        }
      }
    }


    
  }
`
