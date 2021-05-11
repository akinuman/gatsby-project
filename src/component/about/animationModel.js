import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader, useFrame } from "@react-three/fiber"
import * as THREE from "three";
//TL
// import {
//   textEnter1,
//   ironEnter1,
//   textLeave1,
//   ironLeave1,
//   titleEnter2,
//   blobEnter,
//   textEnter2,
//   ironEnter2,
//   titleLeave2,
//   blobLeave,
//   textLeave2,
//   blackBackground,
//   whiteBackground,
//   appearPointLight,
//   disAppearPointLight,
// } from "./../../tl/contact/ironScroll"
// //Assets Model
// import ironModel from "./../../assets/models/iron/source/iron.glb"
// //Helpers
// import selectPath from "./../../helpers/selectPath"

gsap.registerPlugin(ScrollTrigger)

const lerp = (start, end, speed) => {
  return start * (1 - speed) + end * speed
}

const Lights = () => {
  const front = useRef()

  useFrame(({ mouse }) => {
    if (front.current) {
      front.current.position.x = lerp(
        front.current.position.x,
        mouse.x * 12,
        0.4
      )
      front.current.position.y = lerp(
        front.current.position.y,
        7 + mouse.y * 5,
        0.4
      )
    }
  })

  return (
    <>
      <spotLight
        castShadow
        ref={front}
        penumbra={1}
        decay={1}
        angle={Math.PI / 1.5}
        position={[0, 0, 2]}
        distance={18}
        intensity={12}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  )
}

const AnimationModel = props => {
  const pointli = useRef(null)
  const desk = useRef(null)
//   const ironGeo = useRef(null)
//   const ironMat = useRef(null)
//   const scrollEvent1 = useRef(null)
//   const scrollEvent2 = useRef(null)

//   useFrame(({ mouse }) => {
//     desk.current.rotation.y = lerp(
//       desk.current.rotation.y,
//       mouse.x * (Math.PI / 10),
//       0.02
//     )
//   })

//   const resetMarkers = _ => {
//     scrollEvent1.current.refresh()
//     scrollEvent2.current.refresh()
//   }

//   useEffect(() => {
//     const fill = document.querySelector(".background-gradient")
//     const contactWrapper = document.querySelector(".about-wrapper")
//     const scrollDown = document.querySelector(".scroll-down")
//     const radioWrapper = document.querySelector("#radios-wrapper")

//     if (ironGeo.current && ironMat.current && contactWrapper) {
//       scrollEvent1.current = ScrollTrigger.create({
//         trigger: ".sp-1",
//         start: "0 top",
//         end: "100% top",
//         markers: true,
//         onEnter: () => {
//           appearPointLight(pointli.current)
//           ironEnter1(ironGeo.current, ironMat.current, contactWrapper)
//           textEnter1(contactWrapper)
//         },
//         onLeave: () => {
//           textLeave1(contactWrapper)
//         },
//         onLeaveBack: () => {
//           textLeave1(contactWrapper)
//           disAppearPointLight(pointli.current)
//           ironLeave1(ironGeo.current, ironMat.current, contactWrapper)
//         },
//       })
//       scrollEvent2.current = ScrollTrigger.create({
//         trigger: ".sp-2",
//         start: "0 top",
//         end: "100% top",
//         markers: true,
//         onEnter: () => {
//           whiteBackground(contactWrapper)
//           blobEnter(contactWrapper)
//           titleEnter2(contactWrapper)
//           textEnter2(contactWrapper)
//           ironEnter2(ironGeo.current, ironMat.current, contactWrapper)
//         },
//         onLeaveBack: () => {
//           blobLeave(contactWrapper)
//           titleLeave2(contactWrapper)
//           textLeave2(contactWrapper)
//           textEnter1(contactWrapper)
//           blackBackground(contactWrapper)
//           ironEnter1(ironGeo.current, ironMat.current, contactWrapper)
//         },
//       })
//     }
//     gsap.to(fill, {
//       duration: 1,
//       delay: 0.5,
//       background: `radial-gradient(
//           circle at bottom center,
//           rgba(60, 60, 60, 1) 0%,
//           rgba(0, 0, 0, 1) 70%
//         )`,
//       ease: "back.out",
//     })
//     gsap.to(ironGeo.current.position, {
//       duration: 1,
//       z: "-=1",
//       delay: 1,
//       ease: "expo.out",
//     })

//     gsap.to(ironMat.current, {
//       duration: 0.5,
//       opacity: 1,
//       delay: 1,
//       ease: "expo.out",
//     })
//     gsap.to(scrollDown, {
//       duration: 2,
//       opacity: 1,
//     })

//     gsap.to(radioWrapper, {
//       duration: 1.5,
//       opacity: 1,
//       ease: "expo.out",
//     })

//     window.addEventListener("resize", resetMarkers)

//     return () => {
//       window.removeEventListener("resize", resetMarkers)
//       scrollEvent1.current.kill()
//       scrollEvent2.current.kill()
//     }
//   }, [])

//   const obj = useLoader(GLTFLoader, ironModel)
//   const pathTextures = selectPath(props.quality)

//   const map = useLoader(TextureLoader, pathTextures.map)
//   const emissive = useLoader(TextureLoader, pathTextures.emissive)
//   const metalness = useLoader(TextureLoader, pathTextures.metalness)
//   const roughness = useLoader(TextureLoader, pathTextures.roughness)
//   const normal = useLoader(TextureLoader, pathTextures.normal)

  return (
    <group position={props.position} dispose={null}>
      <group ref={desk}>
        {/* <mesh
          ref={ironGeo}
          castShadow={props.quality !== "low"}
          receiveShadow={props.quality !== "low"}
          geometry={obj.nodes.steel_giant_Cube068.geometry}
          position={[0, -10.5, -5]}
        >
          <meshStandardMaterial
            ref={ironMat}
            attach="material"
            color="#332f2c"
            emissive={props.quality === "low" ? null : "#FFFF00"}
            emissiveIntensity={0}
            emissiveMap={emissive}
            map={map}
            metalnessMap={metalness}
            roughnessMap={roughness}
            normalMap={normal}
            roughness={0.2}
            metalness={0.2}
            transparent={true}
            opacity={0}
          />
        </mesh> */}
        <pointLight
          ref={pointli}
          color="white"
          position={[0.37, 3.2, 3.5]}
          intensity={0}
        />
        <Lights />
      </group>
    </group>
  )
}

export default AnimationModel
