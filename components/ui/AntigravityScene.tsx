"use client"
import { Canvas } from "@react-three/fiber"
import AntigravityParticles from "./Antigravity"
 

export default function AntigravityScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas gl={{ antialias: true }}>
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 30]} />

        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.8} position={[5,5,5]} />

        {/* <CameraScroll /> */}
        <AntigravityParticles />
      </Canvas>
    </div>
  )
}