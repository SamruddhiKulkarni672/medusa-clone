"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Points, PointMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

function Particles() {
  const ref = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const positions = new Float32Array(3000)

    for (let i = 0; i < 3000; i++) {
      positions[i] = (Math.random() - 0.5) * 50
    }

    return positions
  }, [])

  useFrame((state) => {
    ref.current.rotation.y += 0.0005
    ref.current.rotation.x += 0.0003
  })

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#8A7CFF"
        size={0.15}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

function FloatingObjects() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial
            color="#6C5CE7"
            metalness={0.4}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[4, -2, -5]}>
          <torusGeometry args={[1, 0.4, 32, 100]} />
          <meshStandardMaterial color="#A29BFE" />
        </mesh>
      </Float>
    </>
  )
}

function CameraController() {
  const cameraRef = useRef<THREE.PerspectiveCamera>()

  useFrame((state) => {
    const { camera, mouse } = state
    camera.position.x = mouse.x * 2
    camera.position.y = mouse.y * 2
  })

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".home",
      start: "top top",
      end: "bottom+=1000 top",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.to(cameraRef.current?.position || {}, {
          z: 8 - progress * 5,
          duration: 0.1,
        })
      },
    })
  }, [])

  return null
}

export default function feature() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 10, 30]} />

        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Particles />
        <FloatingObjects />
        <CameraController />
      </Canvas>
    </div>
  )
}