import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function WaveSpline({ color, yOffset, speed, amplitude }) {
  const ref = useRef()
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 60; i++) {
      pts.push(new THREE.Vector3((i / 60) * 20 - 10, yOffset, 0))
    }
    return pts
  }, [yOffset])

  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points)
    const pts = curve.getPoints(80)
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    return geo
  }, [points])

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    const positions = ref.current.geometry.attributes.position
    for (let i = 0; i <= 80; i++) {
      const x = (i / 80) * 20 - 10
      const y = yOffset + Math.sin(x * 0.8 + t * speed) * amplitude + Math.sin(x * 1.3 + t * speed * 0.7) * amplitude * 0.4
      positions.setY(i, y)
    }
    positions.needsUpdate = true
  })

  return (
    <line ref={ref}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial color={color} transparent opacity={0.5} linewidth={2} />
    </line>
  )
}

export default function ThreadSplines() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.7 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={1} />
        <WaveSpline color="#ff6b6b" yOffset={3} speed={0.6} amplitude={0.4} />
        <WaveSpline color="#4dabf7" yOffset={1} speed={0.4} amplitude={0.6} />
        <WaveSpline color="#ffd43b" yOffset={-1} speed={0.8} amplitude={0.3} />
        <WaveSpline color="#69db7c" yOffset={-3} speed={0.5} amplitude={0.5} />
      </Canvas>
    </div>
  )
}