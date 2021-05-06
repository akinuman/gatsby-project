import gsap from "gsap"

export const homeEnter = (node, e, exit, entry) => {
    const videoWrap = node.querySelector(".wrapper-img")
    const socials = node.querySelectorAll(".social-item-link svg")
    const tl = gsap.timeline()
    tl.to(
      videoWrap,
      {
        duration: 1.5,
        delay: 0.5,
        x: "15%",
        y: "20%",
        z: -500,
        ease: "expo.inOut",
      },
      "unWrap"
    )
    tl.to(
      [...socials],
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "back.out",
      },
      "unWrap+=1.5"
    )
}
export const homeExit = (node, e, exit, entry) => {
  const walltohome = node.querySelector("#walltohome")
  const videoWrap = node.querySelector(".to-video")
  const phantomWrap = node.querySelector(".panthom-wrapper")
  phantomWrap && (phantomWrap.style.display = "none")
  const tl = gsap.timeline()
  tl.set(walltohome, { display: "block" })
  tl.to(videoWrap, {
    duration: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "expo.inOut",
  })
}
export const aboutOtherExit = (node, e, exit, entry) => {
  const walltoabout = node.querySelector("#walltoabout")
  
  const leaf = node.querySelectorAll(".leaf")
  const globalContainer = node.querySelector(".globalContainer")
  const tl = gsap.timeline()
  tl.set(walltoabout, { display: "block" })
  tl.to(
    globalContainer,
    {
      duration: 1.8,
      y: -500,
      ease: "expo.inOut",
    },
    "tl"
  )
  tl.to(
    leaf,
    {
      duration: 1.8,
      height: "100vh",
      ease: "expo.inOut",
    },
    "tl"
  )
  
}

export const aboutEnter = (node, e, exit, entry) => {
  const radioWrapper = node.querySelector("#radios-wrapper")
  const tl = gsap.timeline()
  tl.to(radioWrapper, {
    duration: 1.5,
    delay: 1.5,
    opacity: 1,
    ease: "expo.out",
  })
}
export const worksOtherExit = (node, e, exit, entry) => {
  const walltoworks = node.querySelector("#walltoworks")
  const walls = node.querySelectorAll(".wall")
  const tl = gsap.timeline()
  tl.set(walltoworks, { display: "block" })
  tl.to([...walls], {
    duration: 1,
    width: "100vw",
    skewX: 0,
    ease: "circ.inOut",
    stagger: 0.45,
  })
}

export const worksEnter = (node, e, exit, entry) => {
  const arrowsWrap = node.querySelector(".arrows-wrap")
  const decoration = node.querySelector(".hidden-page")

  const tl = gsap.timeline()

  decoration &&
    tl.to(decoration, {
      duration: 0.5,
      delay: 0.55,
      opacity: 0,
      onComplete: () => {
        gsap.set(decoration, { display: "none" })
      },
    })

  arrowsWrap &&
    tl.to(
      arrowsWrap,
      {
        duration: 1,
        y: 0,
        ease: "circ.out",
      },
      "entering"
    )
}