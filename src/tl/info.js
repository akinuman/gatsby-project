import gsap from "gsap"

export const infoEnter = node => {
  const infoEnter = gsap.timeline()
  const titleBack = node.querySelector(".title-back")
  const letTrans = node.querySelectorAll(".letter-translate")

  const titles = node.querySelectorAll(".rot-p")
  const descriptionAnim = node.querySelectorAll(".description-anim")
  const language = node.querySelector(".language")
  const underline = node.querySelector(".underline")
  infoEnter.set(titleBack, { opacity: 1 })
  infoEnter.from(
    [...titles],
    {
      duration: 1,
      y: 80,
      rotateX: -85,
      opacity: 0,
      stagger: 0.45,
      ease: "circ.out",
    },
    "entering"
  )

  infoEnter.from(
    [...letTrans],
    {
      duration: 1.5,
      x: gsap.utils.random(-100, 100, true),
      y: gsap.utils.random(-100, 100, true),
      rotateX: gsap.utils.random(-50, 50, true),
      rotateY: gsap.utils.random(-50, 50, true),
      rotateZ: gsap.utils.random(-45, 45, true),
      opacity: 0,
      ease: "back.out(2.5)",
    },
    "entering"
  )

  infoEnter.from(
    [...descriptionAnim],
    {
      duration: 1,
      y: 60,
      stagger: 0.2,
      opacity: 0,
      ease: "circ.out",
      overwrite: true,
    },
    "entering+=0.1"
  )

  infoEnter.from(
    language,
    {
      duration: 0.5,
      y: 50,
      ease: "circ.out",
    },
    "entering+=0.1"
  )

  infoEnter.to(
    underline,
    {
      duration: 0.8,
      width: "130%",
      ease: "elastic.out(2,0.4)",
    },
    "entering+=.1"
  )
}

export const infoExit = node => {
  const titles = node.querySelectorAll(".ud-p1")
  const descriptionAnim = node.querySelectorAll(".description-anim")
  const letTrans = node.querySelectorAll(".letter-translate")
  const infoExit = gsap.timeline()

  infoExit.to(
    [...titles],
    {
      duration: 0.8,
      y: 65,
      opacity: 0,
      stagger: -0.15,
      ease: "sine.in",
    },
    "exiting"
  )

  infoExit.to(
    [...descriptionAnim],
    {
      duration: 0.6,
      y: 45,
      stagger: -0.05,
      opacity: 0,
      ease: "sine.in",
      overwrite: true,
    },
    "exiting"
  )

  infoExit.to(
    [...letTrans],
    {
      duration: 1.5,
      x: gsap.utils.random(-100, 100, true),
      y: gsap.utils.random(-100, 100, true),
      rotateX: gsap.utils.random(-50, 50, true),
      rotateY: gsap.utils.random(-50, 50, true),
      rotateZ: gsap.utils.random(-45, 45, true),
      opacity: 0,
      ease: "back.out",
    },
    "exiting"
  )
}
