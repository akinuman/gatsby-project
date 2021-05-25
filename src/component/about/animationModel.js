import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import { RectAreaLightUniformsLib, FlakesTexture } from "three-stdlib"
//TL
import {
  textEnter1,
  ironEnter1,
  textLeave1,
  ironLeave1,
  titleEnter2,
  blobEnter,
  textEnter2,
  ironEnter2,
  titleLeave2,
  blobLeave,
  textLeave2,
  blackBackground,
  whiteBackground,
  appearPointLight,
  disAppearPointLight,
} from "./../../tl/modelScroll.js";

import { useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";



gsap.registerPlugin(ScrollTrigger);

//--------------------------------------------------------------

RectAreaLightUniformsLib.init();

function YBot() {
  const ref = useRef();
  const [texture] = useState(() => {
    const t = new THREE.CanvasTexture(
      new FlakesTexture(),
      THREE.UVMapping,
      THREE.RepeatWrapping,
      THREE.RepeatWrapping
    );
    t.repeat.set(35, 35);
    return t;
  });
  const { nodes, materials } = useGLTF("/robot-draco.glb");
  
  return (
    <group ref={ref} dispose={null}>
      <mesh geometry={nodes.Alpha_Surface.geometry}>
        <meshStandardMaterial
          metalness={0.25}
          roughness={0.3}
          color={materials.Alpha_Body_MAT.color}
          normalMap={texture}
          normalScale={[0.2, 0.2]}
        />
      </mesh>
      <mesh geometry={nodes.Alpha_Joints.geometry}>
        <meshStandardMaterial
          metalness={1}
          roughness={0.2}
          color={materials.Alpha_Joints_MAT.color}
          normalMap={texture}
          normalScale={[1, 1]}
        />
      </mesh>
    </group>
  );
}

const LightsRobot = () => {
  const lights = useRef();
  useFrame((state) => {
    lights.current.rotation.x = THREE.MathUtils.lerp(
      lights.current.rotation.x,
      state.mouse.x * Math.PI,
      0.1
    );
    lights.current.rotation.y = THREE.MathUtils.lerp(
      lights.current.rotation.y,
      Math.PI * 0.25 - state.mouse.y * Math.PI,
      0.1
    );
  });
  return (
    <group ref={lights}>
      <rectAreaLight
        intensity={6}
        position={[4.5, 0, -3]}
        width={10}
        height={10}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
      <rectAreaLight
        intensity={5}
        position={[-10, 2, -10]}
        width={15}
        height={15}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </group>
  );
};

//--------------------------------------------------------------

const lerp = (start, end, speed) => {
  return start * (1 - speed) + end * speed;
};

const Lights = () => {
  const front = useRef();

  useFrame(({ mouse }) => {
    if (front.current) {
      front.current.position.x = lerp(
        front.current.position.x,
        mouse.x * 12,
        0.4
      );
      front.current.position.y = lerp(
        front.current.position.y,
        7 + mouse.y * 5,
        0.4
      );
    }
  });

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
  );
};

const AnimationModel = (props) => {
  const pointli = useRef(null);
  const desk = useRef(null);
  const ironGeo = useRef(null);
  const scrollEvent1 = useRef(null);
  const scrollEvent2 = useRef(null);

  useFrame(({ mouse }) => {
    desk.current.rotation.y = lerp(
      desk.current.rotation.y,
      mouse.x * (Math.PI / 6),
      0.04
    );
  });

  const resetMarkers = (_) => {
    scrollEvent1.current.refresh();
    scrollEvent2.current.refresh();
  };

  useEffect(() => {
    const fill = document.querySelector(".background-gradient");
    const contactWrapper = document.querySelector(".about-wrapper");
    const scrollDown = document.querySelector(".scroll-down");
    const radioWrapper = document.querySelector("#radios-wrapper");


    if (ironGeo.current && contactWrapper) {
      scrollEvent1.current = ScrollTrigger.create({
        trigger: ".sp-1",
        start: "0 top",
        end: "100% top",
      // markers: true,
        onEnter: () => {
          appearPointLight(pointli.current);
          ironEnter1(ironGeo.current, contactWrapper);
          textEnter1(contactWrapper);
        },
        onLeave: () => {
          textLeave1(contactWrapper);
        },
        onLeaveBack: () => {
          textLeave1(contactWrapper);
          disAppearPointLight(pointli.current);
          ironLeave1(ironGeo.current, contactWrapper);
        },
      });
      scrollEvent2.current = ScrollTrigger.create({
        trigger: ".sp-2",
        start: "0 top",
        end: "100% top",
      // markers: true,
        onEnter: () => {
          whiteBackground(contactWrapper);
          blobEnter(contactWrapper);
          titleEnter2(contactWrapper);
          textEnter2(contactWrapper);
          ironEnter2(ironGeo.current, contactWrapper);
        },
        onLeaveBack: () => {
          blobLeave(contactWrapper);
          titleLeave2(contactWrapper);
          textLeave2(contactWrapper);
          textEnter1(contactWrapper);
          blackBackground(contactWrapper);
          ironEnter1(ironGeo.current, contactWrapper);
        },
      });
    }
    gsap.to(fill, {
      duration: 1,
      delay: 0.5,
      // background: `radial-gradient(
      //     circle at bottom center,
      //     rgba(60, 60, 60, 1) 0%,
      //     rgba(0, 0, 0, 1) 70%
      //   )`,
      ease: "back.out",
    });
    gsap.to(ironGeo.current.position, {
      duration: 1,
      z: "0",
      delay: 1,
      ease: "expo.out",
    });

    // gsap.to(ironMat.current, {
    //   duration: 0.5,
    //   opacity: 1,
    //   delay: 1,
    //   ease: "expo.out",
    // });

    gsap.to(scrollDown, {
      duration: 2,
      opacity: 1,
    });

    gsap.to(radioWrapper, {
      duration: 1.5,
      opacity: 1,
      ease: "expo.out",
    });

    window.addEventListener("resize", resetMarkers);

    return () => {
      window.removeEventListener("resize", resetMarkers);
      scrollEvent1.current.kill();
      scrollEvent2.current.kill();
    };
  }, []);

  

  // const obj = useLoader(GLTFLoader, ironModel);
  //const pathTextures = selectPath(props.quality);

  // const map = useLoader(TextureLoader, pathTextures.map);
  // const emissive = useLoader(TextureLoader, pathTextures.emissive);
  // const metalness = useLoader(TextureLoader, pathTextures.metalness);
  // const roughness = useLoader(TextureLoader, pathTextures.roughness);
  // const normal = useLoader(TextureLoader, pathTextures.normal);

  return (
    <group  dispose={null}>
      <group ref={desk}>
        <group ref={ironGeo} position={props.position}>
          <ambientLight intensity={0.1} />
          <LightsRobot />
          <pointLight
            intensity={1}
            position={[2, 2, 0]}
            color="red"
            distance={5}
          />
            <YBot />
            <EffectComposer>
              {/* eslint-disable-next-line */}
              <SSAO
                luminanceInfluence={0.9}
                radius={20}
                scale={0.25}
                bias={0.25}
              />
              <Bloom
                kernelSize={KernelSize.SMALL}
                luminanceThreshold={0.65}
                luminanceSmoothing={0.07}
                height={600}
              />
            </EffectComposer>
        </group>
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
  );
};

export default React.memo(AnimationModel);
