import styled, {keyframes} from "styled-components";



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
          position: relative;
          -webkit-text-stroke: 1.5px;
          -webkit-text-stroke-color: black;
          color: transparent;
          margin-top: 10px;
          opacity: 0;
          margin-left: 10px
        }
        .split-parag.block2 {
          position: relative;
      -webkit-text-stroke: 1.5px;
      -webkit-text-stroke-color: black;
      color: transparent;
          margin-top: 10px;
          opacity: 0;
          margin-left: 15px;
        }
      }
    }
  }
  .social-wrapper {
    position: absolute;
    right: 5vw;
    bottom: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  
  
    .social-item-link {
      display: block;
      padding: 10px;
      font-weight: 900;
      font-size: 18px;
      color: black;
      overflow: hidden;
      svg {
      transform: translateY(60px);
      opacity: 0;
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
const looping1 = keyframes`
  0%{
    transform: translate(-150%);
  }

  50% {
    transform: translate(0%);

  }

  100%{
    transform: translate(-150%);
  }

`

const looping2 = keyframes`
  0%{
    transform: translate(-150%);
  }

  50% {
    transform: translate(0%);

  }
  100%{
    transform: translate(-150%);
  }
`

const photoGravity = keyframes`
  0%{
    transform: translateY(10%);
  }

  50% {
    transform: translateY(20%);

  }

  100%{
    transform: translateY(10%);
  }

`

export const BiographyWrapper = styled.section`
  position: relative;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: ${props => (props.toggle ? "#FFF" : "#000")};
  transition: background-color cubic-bezier(0.2, 0, 0, 1) 1s;
  .ticker-loop {
    position: absolute;
    height: 100%;
    display: block;
    width: 100%;
    user-select: none;
    .ticker-word {
      position: absolute;
      font-size: 8vw;
      font-weight: 900;
      width: 150%;
      text-transform: uppercase;
      padding: 3px 5px;
      background: ${props => (props.toggle ? "#000" : "#FFF")};
      color: ${props => (props.toggle ? "#FFF" : "#000")};
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      &.tw1 {
        top: 45%;
        left: -20%;
        transform: rotateZ(-5deg) translateY(-50%);
        transform-origin: left top;
        span {
          color: ${props =>
            props.toggle ? "#f4dd1e" : "transparent"} !important;
          -webkit-text-stroke: ${props =>
            props.toggle ? "unset" : "2px #000"} !important;
        }
      }
      &.tw2 {
        top: 55%;
        transform: rotateZ(1deg) translateY(-50%);
        transform-origin: left top;
        background: #f4dd1e;
        color: #000;
      }
      .word-anim {
        margin: 0;
        white-space: nowrap;
        > span {
          color: transparent;
          -webkit-text-stroke: 2px #000;
        }
      }
    }
    .wanim-1 {
      animation: ${looping1} 70s ease-in-out infinite;
    }
    .wanim-2 {
      animation: ${looping2} 45s ease-in-out infinite;
    }
  }
  .photo-wrapper {
    position: relative;
    left: 0px;
    width: 32.08vw;
    transform-origin: 80% 90%;
    transform: rotate(3deg);
    transfrom: translateZ(-10px);
    perspective: 100px;
    transform-style: preserve-3d;
    border-radius: 10px;

    .photo {
      height: 500px;
      opacity: 1 !important;
      border-radius: inherit;

      &:before {
        border-radius: inherit;
      }
    }
    .photohead-wrapper {
      position: absolute !important;
      top: 0;
      height: 100%;
      width: 100%;
      transform: translateZ(15px) scale(0.9);
      .photohead {
        position: absolute !important;
        top: 80px;
        left: 60px;
        transform: rotate(-20deg);
        // height: 100%;
        // width: 100%;
      }
    }
    @media (max-width: 1600px) {
      .photohead-wrapper {
        transform: translateZ(15px) scale(0.72);
        .photohead {
          position: absolute !important;
          top: 80px;
          left: 20px;
          transform: rotate(-20deg);
        }
      }
    }
  }

  .biography-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25.42vw;
    transform: translate(13%, -16%) rotate(-3.39deg);
    transform-origin: 50% 90%;
    margin-top: 5vw;
    margin-left: -2.78vw;
    padding: 8.33vw 9.72vw 8.33vw 8.33vw;
    border-radius: 10px;
    color: rgb(255, 255, 255);
    background-image: radial-gradient(
      circle farthest-corner at -0.1% 100.8%,
      rgba(0, 234, 255, 1) 0.2%,
      rgba(0, 124, 255, 1) 59.1%,
      rgba(198, 0, 255, 1) 100.2%
    );
    opacity: 1;
    user-select: none;
    .biography-res {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle farthest-corner at -0.1% 100.8%,
        rgba(0, 234, 255, 1) 0.2%,
        rgba(0, 124, 255, 1) 59.1%,
        rgba(198, 0, 255, 1) 100.2%
      );
      transform: skewY(-25deg);
      z-index: -1;
    }
    h2 {
      font-size: 2.78vw;
      line-height: 2.5vw;
      padding-right: 1.46vw;
      margin-top: 0vw;
    }
    p {
      font-size: 1.85vw;
      line-height: 2.2vw;
      padding: 1.39vw 2.08vw 2.08vw 0px;
    }
    .link-works-wrap {
      padding: 1.39vw 0 2.08vw;

      .link-works {
        display: block;
        background: transparent;
        color: #fff;
        font-size: 2.2vw;
        font-weight: 700;
        text-align: center;
        border: none;
        outline: none;
        transition: -webkit-text-stroke-color cubic-bezier(0.2, 0, 0, 1) 1s;
      }
    }
  }

  @media (max-width: 800px) {
    display: block;
    .ticker-loop {
      .ticker-word.tw1 {
        top: 35%;
      }
      .ticker-word.tw2 {
        top: 45%;
      }
    }
    .photo-wrapper {
      top: 15vw;
      width: 45%;
      z-index: 1;
      .photo {
        height: 400px;
      }
    }

    .biography-wrapper {
      width: 40%;
      margin: -40% 0 0 35%;
      z-index: 2;
      h2 {
        font-size: 2.5rem;
        line-height: 2.5rem;
      }
      p {
        font-size: initial;
        line-height: initial;
      }
      .link-works {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 650px) {
    .ticker-loop {
      display: none;
    }

    .photo-wrapper {
      position: absolute;
      top: -38%;
      left: 80%;
      width: 35vw;
      height: 35vw;
      margin: 0 0 0 -25%;
      border-radius: 50%;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      z-index: 4;
      animation: ${photoGravity} 5s ease-in-out infinite;

      .photo {
        height: inherit;
        &:before {
          background-position: 49% 35%;
          background-size: 200%;
        }
      }
      .photohead-wrapper {
        display: none;
      }
    }
    .biography-wrapper {
      width: 100%;
      transform: none !important;
      margin: 0% 0 0 0;
      box-sizing: border-box;
      border-radius: unset;
      background: ${props => (props.toggle ? "#FFF" : "#000")} !important;
      .biography-res {
        display: block;
      }
      h2 {
        mix-blend-mode: difference;
      }

      p {
        padding: 1.39vw 2.08vw 2.08vw;
      }
    }
  }

  @media (max-width: 500px) {
    .photo-wrapper {
      top: -32vw;
      /* left: 97%; */
    }
  }
`
export const ContactWrapper = styled.section`
  position: relative;
  height: 100vh;
  margin: 0;
  background-color: ${props => (props.toggle ? "#FFF" : "#000")};
  transition: background-color cubic-bezier(0.2, 0, 0, 1) 1s;
  font-family: "Poppins";

  .iron-points-wrap {
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    mix-blend-mode: difference;

    .canvas-wrap {
      position: absolute;
      height: 10%;
    }
  }
`

const rotationSide = keyframes`
  0%{
    transform: rotateZ(-6deg);
  }

  100%{
    transform: rotateZ(6deg);
  }  
`

export const LocateWrapper = styled.div`
  .section-contact-inner {
    position: absolute;
    left: 50%;
    top: -3%;
    transform: translate(-50%, -50%);
    z-index: 11;
    .wrapper-text {
      animation: ${rotationSide} 2s infinite alternate;
      h2,
      h3 {
        font-size: 8vw;
        margin: 0;
        white-space: nowrap;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        padding: 2px;
        border-radius: 5px;
        mix-blend-mode: difference;
      }
    }
  }

  .legend {
    position: absolute;
    display: none;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 15px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.8;
    color: #fff;
    z-index: 3;
    @media (max-width: 450px) {
      display: block;
    }
  }

  .locate-me-wrapper {
    position: absolute;
    top: 50%;
    left: 6vw;
    width: 22vw;
    font-size: 2vw;
    font-weight: 500;
    transform: translateY(-50%);
    perspective: 400px;
    transform-style: preserve-3d;
    z-index: 11;
    color: rgba(255, 255, 255, 1);
    mix-blend-mode: normal;
    .locate-wrapper-item {
      cursor: pointer;
      position: relative;
      margin: 5px 0;
      letter-spacing: 0.2px;
      perspective: 200px;
      transform: rotateY(20deg);
      /* background: transparent; */
      border: none;
      outline: none;
      transform-style: preserve-3d;
      overflow: hidden;
      .item-envolt {
        position: relative;
        transform: translateY(60px);
        .item-content {
          position: relative;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          svg {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
          .to-copy {
            display: none;
          }
        }
        .clipboard {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          text-align: center;
          color: #000;
          padding: 5px;
          background: #fff;
          user-select: none;
          svg {
            display: none;
          }
          @media (max-width: 450px) {
            height: auto;
            width: auto;
            left: 50%;
            transform: translateX(-50%);
            span {
              display: none;
            }
            svg {
              display: block;
            }
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    .locate-me-wrapper {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 650px) {
    .section-contact-inner {
      top: 10%;
    }
  }
`