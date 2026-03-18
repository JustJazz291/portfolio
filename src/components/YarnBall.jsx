import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshWobbleMaterial, OrbitControls } from '@react-three/drei'

function Ball() {
  const mesh = useRef()
  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.4
    mesh.current.rotation.x += delta * 0.15
  })
  return (
    <mesh ref={mesh}>
      <Sphere args={[1.4, 64, 64]}>
        <MeshWobbleMaterial color="#ff6b6b" factor={0.3} speed={1.2} roughness={0.6} metalness={0.1} />
      </Sphere>
    </mesh>
  )
}

export default function YarnBall({ size = 320 }) {
  return (
    <div style={{ width: size, height: size, margin: '0 auto' }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <pointLight position={[-3, -2, -2]} color="#4dabf7" intensity={0.5} />
        <Ball />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}