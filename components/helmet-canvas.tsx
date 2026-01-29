"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, PerspectiveCamera } from "@react-three/drei"
import Helmet3DModel from "./helmet-3d-model"

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 16, 16]} />
      <meshStandardMaterial color="#1a1f1a" wireframe />
    </mesh>
  )
}

export function HelmetCanvas() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 6.5]} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#CFFF04" />
      <Suspense fallback={<LoadingFallback />}>
        <Helmet3DModel modelPath="/3d/helmet-lorenzo.glb" />
      </Suspense>
      <Environment preset="city" />
    </Canvas>
  )
}
