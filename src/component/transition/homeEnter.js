import gsap from "gsap"

export const homeEnter = (node, e, exit, entry) => {
    const videoWrap = node.querySelector(".wrapper-img")
    const lines = [...node.querySelectorAll(".split-parag")]
    const tl = gsap.timeline()
    tl.to(
      videoWrap,
      {
        duration: 1.5,
        delay: 0.5,
        x: "25%",
        y: "30%",
        z: 0,
        ease: "expo.inOut",
      },
      "unWrap"
    )
  
    lines.forEach((line, i) => {
      const chars = line.querySelectorAll("span")
      tl.to(
        [...chars],
        {
          duration: 1,
          y: "-5%",
          x: "0%",
          stagger: 0.015,
          ease: "power1.inOut",
        },
        `unWrap+=${1.5 + (1 * i) / 8}`
      )
    })
}