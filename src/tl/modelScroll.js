import gsap from "gsap"

export const textEnter1 = node => {
  const aboutTitle = node.querySelectorAll(".about-info-line > div")
  const paragraph = node.querySelector(".about-info p")
  gsap.to([...aboutTitle], {
    duration: 1,
    delay: 0.5,
    y: 0,
    stagger: 0.15,
    ease: "power3.out",
    overwrite: true,
  })
  gsap.to(paragraph, {
    duration: 1,
    delay: 1,
    y: 0,
    opacity: 1,
    ease: "power3.out",
    overwrite: true,
  })
}

export const ironEnter1 = (model, material, node) => {
  if (model && material) {
    gsap.to(model.position, {
      duration: 1.5,
      x: 2.6,
      y: -8.77,
      z: -8.47,
      ease: "expo.inOut",
      overwrite: true,
    })
    gsap.to(model.rotation, {
      duration: 1.5,
      x: 0.39,
      y: -1.09,
      ease: "expo.inOut",
      overwrite: true,
    })
    gsap.to(material, {
      duration: 1.5,
      opacity: 1,
      emissiveIntensity: 1,
      ease: "expo.inOut",
      overwrite: true,
    })
  }
}

export const textLeave1 = node => {
  const aboutTitle = node.querySelectorAll(".about-info-line > div")
  const paragraph = node.querySelector(".about-info p")
  gsap.to([...aboutTitle], {
    duration: 0.6,
    y: 65,
    ease: "power3.in",
    stagger: -0.15,
    overwrite: true,
  })
  gsap.to(paragraph, {
    duration: 0.6,
    y: 20,
    opacity: 0,
    ease: "power3.in",
    overwrite: true,
  })
}

export const ironLeave1 = (model, material, node) => {
  if (model && material) {
    gsap.to(model.position, {
      duration: 1.5,
      x: 0,
      y: -10.5,
      z: -5,
      ease: "expo.inOut",
      overwrite: true,
    })
    gsap.to(model.rotation, {
      duration: 1.5,
      x: 0,
      y: 0,
      z: 0,
      ease: "expo.inOut",
      overwrite: true,
    })

    gsap.to(material, {
      duration: 1.5,
      emissiveIntensity: 0,
      ease: "expo.inOut",
      overwrite: true,
    })
  }
}

export const ironEnter2 = (model, material, node) => {
  const durFirst = 1.5
  if (model && material) {
    gsap.to(model.rotation, {
      duration: durFirst,
      delay: durFirst - 1,
      x: 0.06,
      y: -5,
      z: 0.01,
      ease: "expo.inOut",
      overwrite: true,
    })
    gsap.to(model.position, {
      duration: 1.5,
      delay: durFirst,
      x: -3.33,
      y: -10.77,
      z: -4,
      ease: "expo.inOut",
      overwrite: true,
    })
  }
}

export const titleEnter2 = node => {
  const letters = node.querySelectorAll(".resume-overflow > span")
  gsap.to([...letters], {
    duration: 2,
    x: 0,
    delay: 1,
    ease: "expo.inOut",
    overwrite: true,
  })
}

export const blobEnter = node => {
  const blobWrapper = node.querySelector(".blob-wrapper")
  const blob = blobWrapper.querySelector(".blob")
  gsap.set(blobWrapper, { display: "block" })
  gsap.to(blob, {
    duration: 1.5,
    opacity: 1,
    delay: 1.2,
    ease: "expo.inOut",
    overwrite: true,
  })
}

export const textEnter2 = node => {
  const likeInfo = node.querySelector(".like-info")
  const pdfTitle = node.querySelectorAll(".like-info-line")
  gsap.set(likeInfo, {
    zIndex: 10,
  })
  gsap.to([...pdfTitle], {
    duration: 1,
    delay: 2.3,
    y: 0,
    stagger: 0.15,
    ease: "power3.out",
    overwrite: true,
  })
}

export const blobLeave = node => {
  const blobWrapper = node.querySelector(".blob-wrapper")
  const blob = blobWrapper.querySelector(".blob")
  gsap.set(blobWrapper, { display: "none", delay: 1.2 })
  gsap.to(blob, {
    duration: 1,
    opacity: 0,
    ease: "expo.inOut",
    overwrite: true,
  })
}

export const textLeave2 = node => {
  const likeInfo = node.querySelector(".like-info")
  const pdfTitle = node.querySelectorAll(".like-info-line")
  gsap.set(likeInfo, {
    zIndex: 0,
  })
  gsap.to([...pdfTitle], {
    duration: 0.5,
    y: 90,
    ease: "power3.in",
    overwrite: true,
  })
}

export const titleLeave2 = node => {
  // const resume = node.querySelector(".resume-word-wrapper")
  const letters = node.querySelectorAll(".resume-overflow > span")
  // gsap.to(resume, {
  //   duration: 0.6,
  //   opacity: 0,
  //   ease: "expo.inOut",
  //   overwrite: true,
  // })
  gsap.to([...letters], {
    duration: 1,
    x: gsap.utils.wrap(["100%", "-100%"]),
    // skewY: gsap.utils.wrap([-25, 25]),
    ease: "expo.inOut",
    overwrite: true,
  })
}

export const blackBackground = node => {
  const background = node.querySelector(".background-gradient")
  gsap.to(background, {
    duration: 1.5,
    background: `radial-gradient(circle at center bottom, rgb(60, 60, 60) 0%, rgb(0, 0, 0) 70%)`,
    ease: "expo.out",
    overwrite: true,
  })
}

export const whiteBackground = node => {
  const background = node.querySelector(".background-gradient")
  gsap.to(background, {
    duration: 1.5,
    background: `radial-gradient(circle at center bottom, rgba(0, 0, 0, 0) 0%, rgb(230, 230, 230) 0%)`,
    ease: "expo.inOut",
    overwrite: true,
  })
}

export const appearPointLight = pointlight => {
  pointlight &&
    gsap.to(pointlight, {
      duration: 1.5,
      intensity: 2.5,
      overwrite: true,
    })
}

export const disAppearPointLight = pointlight => {
  pointlight &&
    gsap.to(pointlight, {
      duration: 1.5,
      intensity: 0,
      overwrite: true,
    })
}
