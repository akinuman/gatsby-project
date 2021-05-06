import gsap from "gsap"

export const sliderExit = node => {
  const sliderComp = node.querySelector(".slider-comp")
  const sliderW = node.querySelector(".slider-wrapper")
  const video = node.querySelector("video.video-wrapper")
  const bgLogo = node.querySelector(".bg-logo")

  const sliderExit = gsap.timeline()

  bgLogo &&
    sliderExit.to(
      bgLogo,
      {
        duration: 1.2,
        scale: 0,
        ease: "expo.out",
      },
      "leaveLogo"
    )

  sliderW &&
    gsap.to(
      [sliderW, video],
      {
        duration: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        x: 0,
        overwrite: true,
      },
      "leaveLogo"
    )

  sliderComp &&
    sliderExit.to(
      sliderComp,
      {
        duration: 1,
        width: 0,
        overwrite: true,
        ease: "expo.out",
      },
      "leaveLogo+=.5"
    )
}

export const sliderEnter = (node, worksDispatch) => {
  const sliderComp = node.querySelector(".slider-comp")
  const sliderW = node.querySelector(".slider-wrapper")
  const bgLogo = node.querySelector(".bg-logo")

  const sliderEnter = gsap.timeline()

  bgLogo &&
    sliderEnter.from(
      bgLogo,
      {
        duration: 1,
        scale: 0,
        ease: "expo.out",
      },
      "entering+=1.8"
    )
  sliderW &&
    sliderEnter.from(
      sliderW,
      {
        duration: 2,
        boxShadow: "-18px 10px 20px -12px rgba(0,0,0,0.5)",
        ease: "expo.out",
      },
      "entering+=1.8"
    )

  sliderComp &&
    sliderEnter.fromTo(
      sliderComp,
      {
        duration: 1,
        width: "0",
        overwrite: true,
        ease: "expo.out",
      },
      {
        duration: 1,
        width: "100%",
        overwrite: true,
        ease: "expo.out",
        onStart: () => {
          setTimeout(() => {
            worksDispatch({
              type: "BLOCK_BUTTON",
              payload: false,
            })
          }, 200)
        },
      },
      "entering+=1.63" // add 0.13 plus that sliderExiting
    )
}
