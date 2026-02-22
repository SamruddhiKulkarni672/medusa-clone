"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import { createNoise3D } from "simplex-noise"

export default function AntigravityParticles() {
  const ref = useRef<THREE.Points>(null!)

  const { positions, noise3D } = useMemo(() => {
    const positions = new Float32Array(6000)
    const noise3D = createNoise3D()

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30
      positions[i + 1] = (Math.random() - 0.5) * 30
      positions[i + 2] = (Math.random() - 0.5) * 30
    }

    return { positions, noise3D }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.2

    const pos = ref.current.geometry.attributes.position
      .array as Float32Array

    for (let i = 0; i < pos.length; i += 3) {
      pos[i] += noise3D(pos[i] * 0.1, pos[i + 1] * 0.1, t) * 0.01
      pos[i + 1] += noise3D(pos[i + 1] * 0.1, pos[i + 2] * 0.1, t) * 0.01
      pos[i + 2] += noise3D(pos[i + 2] * 0.1, pos[i] * 0.1, t) * 0.01
    }

    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#8A7CFF"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}