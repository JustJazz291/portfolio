import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Threads({ count = 60 }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
      z: (Math.random() - 0.5) * 5,
      speed: 0.002 + Math.random() * 0.004,
      offset: Math.random() * Math.PI * 2,
      amplitude: 0.5 + Math.random() * 1.5,
    }))
  }, [count])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed * 10 + p.offset) * p.amplitude,
        p.y + Math.cos(t * p.speed * 8 + p.offset) * 0.3,
        p.z
      )
      dummy.rotation.z = t * p.speed * 5
      dummy.scale.set(1, 1, 1)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <capsuleGeometry args={[0.015, 0.3, 2, 6]} />
      <meshStandardMaterial color="#4dabf7" transparent opacity={0.5} />
    </instancedMesh>
  )
}

export default function ParticleThreads() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.6
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <Threads count={55} />
      </Canvas>
    </div>
  )
}