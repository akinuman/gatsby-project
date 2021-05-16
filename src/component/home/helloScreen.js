import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Model, Fragments } from './helloModel'




function Scene() {
    
  const vec = new THREE.Vector3()

  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  useFrame((state) => {
    state.camera.position.lerp(vec.set(clicked ? -10 : 0, clicked ? 10 : 0, 20), 0.1)
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <group>
      <Fragments visible={clicked} />
      <Model visible={!clicked} onClick={() => setClicked(true)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />
    </group>
  )
}

const HelloScreen = () => {
     
  return (
    <Canvas  concurrent pixelRatio={[1, 2]} orthographic camera={{ zoom: 400 }}>
        <spotLight
        position={[30, 0, 30]}
        angle={0.3}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <Suspense fallback={null}>
        <Scene />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default React.memo(HelloScreen)
