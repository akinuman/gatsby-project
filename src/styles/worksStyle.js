import styled from "styled-components"

export const WorksWrapper = styled.section`
  position: relative;
`

export const EnvoltWorks = styled.section`
  height: 100vh;
  overflow: hidden;
`

export const WrapperWork = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  overflow: hidden;
  @media (max-width: 1000px) {
    overflow: visible;
  }
`

export const ScrollWork = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 1000px) {
    height: auto !important;
  }
`

export const WrapperTitleBack = styled.h1`
  position: absolute;
  left: ${props => props.left};
  margin: 45vh 0 0 0;
  font-size: 50vw;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.2);
  -webkit-text-stroke-width: 3px;
  user-select: none;
  white-space: nowrap;
  overflow: visible;
  mix-blend-mode: difference;
  opacity: 0;
  .letter-split {
    position: relative;
    display: inline-block;
    perspective: 170px;
    transform-style: preserve-3d;
    .letter-translate {
      display: inline-block;
    }
  }
  @media (max-width: 1000px) {
    position: fixed;
    left: ${props => `calc(${props.left} + 50vw)`};
    color: rgba(255, 255, 255, 0.2) !important;
    -webkit-text-stroke: unset;
    margin: 2vh 0 0 0;
    transform: none !important;
  }
`
export const HiddenPage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 5;
`

export const WrapperInfo = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  padding: 80px 10px 60px;
  box-sizing: border-box;
  overflow: auto;

  .scroll-down {
    position: fixed;
    width: 70px;
    top: 20%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10;
    mix-blend-mode: difference;
    opacity: 0;
    /* opacity: 0; */
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
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;

    .main-info {
      margin-top: 0;
    }
  }
`

export const WrapperSlider = styled.div`
  position: fixed;
  top: 50%;
  right: 5%;
  height: 250px;
  width: 40vw;
  transform: translateY(-50%);
  z-index: 4;
  border-radius: 0px;

  .slider-size {
    width: inherit;
    height: inherit;
    position: relative;
    .slider-comp {
      position: relative;
      height: inherit;
      width: 100%;
      perspective: 400px;
      transform-style: preserve-3d;
      border-radius: inherit;

      .slider-wrapper {
        position: relative;
        top: 0;
        right: 0;
        width: 100%;
        height: inherit;
        perspective: 800px;
        transform-style: preserve-3d;
        opacity: 1;
        border-radius: inherit;
        transition: 1s box-shadow ease-out;

        .slider-content {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          border-radius: inherit;

          .video-wrapper {
            position: absolute;
            height: 100%;
            width: 100%;
            overflow: hidden;
            .video-inner {
              position: relative;
              height: 100%;
              video {
                object-fit: cover;
              }
              > div:nth-of-type(1) {
                position: absolute;
                top: -12.5%;
                left: -13%;
                /* right: 0; */
                height: 125%;
                width: 125% !important;
                overflow: hidden;

                > div {
                  height: 100% !important;
                  padding-top: 0 !important;
                }
              }
            }
          }

          .path-fill {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            ${props => props.bgFill};
          }
        }

        .page-fill {
          position: relative;
          height: 100%;
          overflow: visible;

          .page-logo {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 150px;
            transform: translate3d(-50%, -50%, 0);
            transform-style: preserve-3d;
            transform-origin: center;

            img,
            .bg-logo {
              position: absolute;
              height: 100%;
              width: ${props => `${props.width}px` || "auto"};
              ${props => props.scale};
              background-size: contain !important;
              transform-origin: center center -500px;
              user-select: none;
              pointer-events: none;
              opacity: 0;
              @media (max-width: 650px) {
                width: ${props => `calc(${props.width}px - 60px)` || "auto"};
              }
              &:before,
              &:after {
                background-size: contain !important;
              }
            }
          }
        }

        .slider-tap {
          display: none;
          position: absolute;
          height: 100%;
          width: 0%;
          top: 0;
          left: 0;
          background: white;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    position: relative;
    top: 0;
    right: 0;
    transform: translateY(0);
    width: 65vw;
    height: 25vw;
    margin: 50px auto 0;
  }
`

export const ContentInfo = styled.div`
  user-select: none;
  overflow: hidden;

  .emoji-move {
    animation: leftright 2s infinite ease-in-out;
    @keyframes leftright {
      0% {
        transform: translateX(0%);
      }
      50% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }

  .container-info {
    max-height: 900px;
    user-select: none;
  }

  .main-info {
    font-family: "Poppins";
    perspective: 200px;
    transform-style: preserve-3d;
    margin-top: 25vh;
    text-align: center;

    .year-text-aling {
      margin: 0;

      overflow: hidden;
      .year {
        display: block;
        margin-bottom: 0.8rem;
        font-weight: 600;
        opacity: 1;
        text-transform: uppercase;
      }
    }
    .title-page-wrapper {
      margin: 0;
      .title-page {
        margin: 0 0 0 40px;
        font-size: 3vw;
        text-transform: uppercase;
        overflow: hidden;
        span {
          display: block;
        }
      }
    }
  }

  .language-info {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0px 20% 0 35%;
    cursor: pointer;

    a {
      display: block;
      width: 100%;
      overflow: hidden;
      .language {
        position: relative;
        display: inline-block;
        font-size: 1.5vw;
        font-weight: 900;
        letter-spacing: 1px;
        .underline {
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 115%;
          height: 12px;
          z-index: -1;
        }
      }
      @media (max-width: 800px) {
        .language {
          font-size: 10px;
        }
      }
    }
  }
  .margin-description {
    perspective: 400px;
    transform-style: preserve-3d;
    .description-use {
      padding: 5vw;
      line-height: 2;
      color: #000;
    }
  }

  @media (max-width: 1000px) {
    margin: 50px 0 0 0;

    .container-info {
      /* max-height: 1200px;
      height: 1200px; */
      .main-info {
        margin: 0;
        .year {
          text-align: center;
          font-size: 2vw;
        }
      }
    }

    .language-info {
      margin: 0 5%;
      .language {
        font-weight: 500;
      }
      a {
        width: 65vw;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 700px) {
    .container-info {
      .main-info {
        .name {
          font-size: 20px;
        }
        .year {
          font-size: 17px;
        }
      }
    }
  }
`

export const InfoDescription = styled.div`
  position: relative;
  width: 500px;
  padding: 5vw;
  text-align: justify;
  line-height: 2;
  color: rgba(0, 0, 0, 0.7);
  .description-perspective {
    perspective: 600px;
    transform-style: preserve-3d;
    .description-wrapp-word {
      perspective: 200px;
      transform-style: preserve-3d;
      font-size: 1.8rem;
      .description-word {
        display: inline-block;
        margin-left: 15px;
        &::first-of-type {
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 20px 0;
    width: 70%;
    margin: 0 auto;
    box-sizing: border-box;
    .description-wrapp-word {
      font-size: 1.7rem !important;
    }
  }

  @media (max-width: 700px) {
    .description-wrapp-word {
      font-size: 1.5rem !important;
    }
  }
`

export const WrapperChoise = styled.div`
  position: fixed;
  top: calc(50% + 150px + 6vh);
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 120px;
  transform: translateY(-50%);
  z-index: 1;
  mix-blend-mode: difference;
  .circle-choise {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    outline: none;
    overflow: hidden;
    .point-choise {
      position: absolute;
      width: 28%;
      height: 28%;
      top: 50%;
      background: rgba(255, 255, 255, 1);
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      border-radius: 50%;
      transition: transform 1s ease-out;
    }
    &.current {
      border: 2px solid rgba(255, 255, 255, 1);

      .point-choise {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  @media (max-width: 1000px) {
    position: relative;
    top: 65px;
    right: 0;
    left: 0;
    width: 65vw;
    margin: 50px auto 0;
    justify-content: start;
    .circle-choise {
      margin: 0 2vw;
      &:first-of-type {
        margin: 0 2vw 0 5px;
      }
    }
  }
`

export const ArrowsWrap = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  /* left: 50%; */
  left: 0;
  display: ${props => (props.display ? props.display : "flex")};
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.4);
  transform: translateY(105%);
  background-color: #fff;
  z-index: 5;
  .arrow {
    padding: 20px 60px;
    border: none;
    border-radius: 12px;
    background: none;
    outline: none;
    cursor: pointer;
    opacity: 0.65;
    transition: all ease-in-out 0.5s;
  }
  .numbers {
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.4);
    user-select: none;
    > span {
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.75);
      font-weight: 700;
    }
  }
  @media (max-width: 1000px) {
    display: none;
  }
`
