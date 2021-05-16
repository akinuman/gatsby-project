import styled from "styled-components"

export const AboutWrapper = styled.section`
  position: relative;
  overflow: hidden;

  .scrollDown {
    position: fixed;
    width: 70px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    mix-blend-mode: difference;
    opacity: 0;
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

  .background-gradient {
    background: radial-gradient(
      circle at bottom center,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 70%
    );
  }

  .scroll-panthom {
    height: 50vh;
  }

  .sp-2 {
    height: calc(40vh + 1px);
  }

  .sp-3 {
    height: 70vh;
  }
`

export const GraphicWrapper = styled.div`
  &.canvas-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    user-select: none;

    .about-info {
      position: absolute;
      width: max-content;
      top: 18%;
      left: 6vw;
      color: #fff;
      padding: 1vw;
      mix-blend-mode: difference;

      .about-info-line {
        font-size: 3vw;
        font-weight: 800;
        text-transform: uppercase;
        overflow: hidden;
        .about-info-text {
          position: relative;
          transform: translateY(65px);
          span {
            color: transparent;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
          }
        }
        &.esp {
          font-size: 2.5vw;
        }
      }

      p {
        width: 55vw;
        transform: translateY(20px);
        opacity: 0;
        /* text-align: justify; */
        font-size: 2vw;
        line-height: 3vw;
        font-weight: 300;
        word-wrap: break-word;
      }
    }
    .onmouse-resume {
      position: absolute;
      height: 100vh;
      width: 500%;
      .resume-word-wrapper {
        position: absolute;
        top: 50vh;
        left: 45vw;
        transform: translate(-50%, -50%);
        font-size: 55vw;
        font-weight: 800;
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
        color: transparent;
        /* opacity: 0; */

        .resume-overflow {
          display: inline-block;
          overflow: hidden;
          margin: 0;
          &:nth-child(odd) span {
            transform: translateX(100%) skewY(-17deg);
          }
          &:nth-child(even) span {
            transform: translateX(-100%) skewY(17deg);
          }
          span {
            display: inline-block;
            /* text-shadow: -20px 30px 5px rgba(0, 0, 0, 0.1); */
          }
        }
      }
    }
    .resume-wrapper {
      .like-info {
        position: absolute;
        top: 40%;
        left: 45vw;
        max-width: 43.5vw;
        overflow: hidden;
        color: #524d4a;
        .content {
          font-size: 4.5vw;
          font-weight: 800;
          text-transform: uppercase;
          perspective: 400px;
          .like-info-overflow {
            overflow: hidden;
            .like-info-line {
              transform: translateY(90px);
              .link-pdf {
                color: #2d2d2d;
              }
              .emoji-icon {
                display: inline-block;
                padding: 3px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    &.canvas-wrapper {
      .canvas-content {
        position: absolute !important;
        bottom: 0 !important;
        height: 60vw !important;
      }
      .about-info {
        left: 50%;
        transform: translateX(-50%);
        .about-info-line {
          font-size: 5vw;
          &.esp {
            font-size: 3.5vw;
          }
        }
        p {
          width: 40vw;
          font-size: 2vw;
          line-height: 3.5vw;
        }
      }
    }
  }
  @media (max-width: 800px) {
    &.canvas-wrapper {
      .about-info {
        .about-info-line {
          font-size: 40px;
          &.esp {
            font-size: 20px;
          }
        }
        p {
          width: 50vw;
          font-size: 15px;
          line-height: 30px;
        }
      }
    }
  }
  @media (max-width: 650px) {
    &.canvas-wrapper {
      .canvas-content {
        height: 80vw !important;
      }
      .about-info {
        top: 25%;
        .about-info-line {
          font-size: 30px;
          &.esp {
            font-size: 18px;
          }
        }
        p {
          width: 50vw;
          font-size: 15px;
          line-height: 25px;
        }
      }
      .resume-wrapper {
        .like-info {
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: unset;
          white-space: nowrap;
          .content {
            width: max-content;
            font-size: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    &.canvas-wrapper {
      .canvas-content {
        height: 100vw !important;
      }
      .about-info {
        width: auto;
        padding: 0;
        box-sizing: border-box;
        .about-info-line {
          font-size: 20px;
          &.esp {
            font-size: 13px;
          }
        }
        p {
          font-size: 13px;
          line-height: 15px;
          width: 100%;
        }
      }
      .resume-wrapper {
        .like-info {
          top: 45%;
          .content {
            font-size: 30px;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    &.canvas-wrapper {
      .about-info {
        .about-info-line {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 300px) {
    &.canvas-wrapper {
      .resume-wrapper {
        .like-info {
          .content {
            font-size: 25px;
          }
        }
      }
    }
  }
`
export const InputChekedWrapper = styled.div`
  &#radios-wrapper {
    opacity: 0;
  }
`
export const BlobWrapper = styled.div`
  position: absolute;
  display: none;
  canvas.blob {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
`
