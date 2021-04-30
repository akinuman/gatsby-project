import styled from "styled-components";



const colorWallHome = `radial-gradient(
  circle farthest-corner at -0.1% 100.8%,
  rgba(0, 234, 255, 1) 0.2%,
  rgba(0, 124, 255, 1) 59.1%,
  rgba(198, 0, 255, 1) 100.2%
)`




export const HomeContainer = styled.div`
  position: relative;
`;

export const HomeWrapper = styled.div`
  position: fixed;
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
        height: 80%;
        width: 100%;
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
        background-image: ${colorWallHome};
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
        font-family: "Poppins";
        width: 100%;
        text-transform: uppercase;
        font-size: 10vw;
        font-weight: 600;
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
        @media (max-width: 680px) {
          .row-bro {
            margin-top: -12px;
          }
        }
        .upperWord {
          display: flex;
          position: fixed;
          z-index: 2;
          bottom: 65%;
          background: white;
          justify-content: flex-end;
          flex-direction: column;
          padding: 1rem;
          padding-right: 5vw;
          padding-left: 6vw;
          overflow: hidden;
          span {
            display: inline-block;
            transform: translate(-40%, 100%);
          }
        }
        @media (max-width: 450px) {
          .upperWord {
            bottom: 55%;
            padding-right: 7vh; 
          }
        }
        @media (max-width: 650px) {
          .upperWord {
            bottom: 55%;
          }
        }
        @media (max-width: 800px) {
          .upperWord {
            bottom: 60%;
          }
        }
        
        .split-parag {
          margin-top: 70px;
          padding: 0.1rem;
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

export const SloganWrapper = styled.section`
  position: relative;
  height: 100%;
  margin: 0;
  background-color: "#FFF";
  transition: background-color cubic-bezier(0.2, 0, 0, 1) 1s;
  .difference {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    mix-blend-mode: difference;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    backface-visibility: hidden;
  }
  .home-design-content {
    position: relative;
    height: inherit;
    h2 {
      margin: 0;

      p {
        margin: 0;
        user-select: none;
        font-size: 13vw;
        line-height: 11.74vw;
      }
    }

    .stroke {
      position: relative;
      -webkit-text-stroke: 1.5px;
      -webkit-text-stroke-color: gray;
      transition: cubic-bezier(0.2, 0, 0, 1) 1s;
      color: transparent;
      p {
        text-align: center;
        text-transform: uppercase;
        line-height: 0.8;
        span {
          position: relative;
          display: inline-block;
          transition: cubic-bezier(0.2, 0, 0, 1) 1s;
          -webkit-text-stroke: 0px;
          color: #000;
          &:nth-of-type(2) {
            z-index: 4;
          }
        }
      }
      .stroke-text1 {
        font-size: 12vw;
      }
      .stroke-text2 {
        font-size: 14vw;
      }
    }

    .img-central-wrapper {
      position: absolute;
      left: 50%;
      top: 45%;
      height: 31.32vw;
      width: 21.94vw;
      margin-top: -15.66vw;
      margin-left: -10.97vw;
      transform: rotateZ(-6deg);
      overflow: hidden;
      box-shadow: 2px 2px 2px 1px;
      transition: box-shadow cubic-bezier(0.2, 0, 0, 1) 1s;
      backface-visibility: hidden;
      /* @media (max-height: 500px) {
        height: 25vw;
        width: 16vw;
        margin-top: -12.5vw;
        margin-left: -8vw;
      } */
      .img-central {
        position: absolute !important;
        height: inherit;
        width: inherit;
        backface-visibility: hidden;
      }
    }
    .fill {
      font-family: "Poppins";
      position: relative;
      padding: 20% 0 10%;
      text-align: center;
      color: "#000";
      transition: color cubic-bezier(0.2, 0, 0, 1) 1s;
      box-sizing: border-box;
      p {
        text-align: center;
        text-transform: uppercase;
        line-height: 0.8;
      }
      .fill-text1 {
        font-size: 12vw;
        /* word-break: break-all; */
      }
      .fill-text2 {
        font-size: 16vw;
      }
    }
    .logo-js {
      position: absolute !important;
      height: 12vw;
      width: 12vw;
      border-radius: 50%;
      background-color: #f7e020;
      background-size: cover !important;
      overflow: hidden;
      right: 38vw;
      bottom: 14.07vw;
      transition: right 0.5s ease-out;
      @media (max-width: 650px) {
        right: 20vw;
      }

      &:before,
      &:after {
        background-size: contain !important;
      }
    }
  }

  @media (max-width: 800px) {
    .home-design-content {
      .fill {
        padding: 20% 0 25% 0;
      }
      p {
        font-size: 18vw !important;
      }
      .fill-text1,
      .stroke-text1 {
        font-size: 12vw !important;
      }
      .img-central-wrapper {
        height: 53.32vw;
        width: 40.94vw;
        margin-top: -16.66vw;
        margin-left: -19.97vw;
      }
      .logo-js {
        height: 17vw;
        width: 17vw;
      }
    }
  }

  @media (max-width: 650px) {
    .home-design-content {
      .fill {
        padding: 20% 0 20% 0;
      }
      .logo-js {
        bottom: 35vw;
      }
    }
  }
`
