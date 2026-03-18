import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { RoundedBox, Text } from "@react-three/drei"

function Badge3D({ label, color, position, delay }) {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const progress = useRef(0)
  const started = useRef(false)

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const t = clock.getElapsedTime()
    if (!started.current && t > delay) started.current = true
    if (started.current && progress.current < 1) {
      progress.current = Math.min(1, progress.current + 0.03)
    }
    const p = progress.current
    mesh.current.rotation.y = (1 - p) * Math.PI * 2 + Math.sin(t * 0.5) * 0.08
    mesh.current.scale.setScalar(p * (hovered ? 1.15 : 1))
    mesh.current.position.y = position[1] + Math.sin(t * 0.8 + delay) * 0.05
  })

  return (
    <mesh ref={mesh} position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <RoundedBox args={[2.2, 0.7, 0.15]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={hovered ? color : "#ffffff"} metalness={0.1} roughness={0.4} />
      </RoundedBox>
      <Text position={[0, 0, 0.1]} fontSize={0.22} color={hovered ? "#ffffff" : color} anchorX="center" anchorY="middle" font={undefined}>
        {label}
      </Text>
    </mesh>
  )
}

const BADGES = [
  { label: "Python", color: "#ff6b6b", position: [-2.5, 1.2, 0], delay: 0 },
  { label: "C++", color: "#4dabf7", position: [0, 1.2, 0], delay: 0.15 },
  { label: "Embedded C", color: "#69db7c", position: [2.5, 1.2, 0], delay: 0.3 },
  { label: "Arduino", color: "#ffd43b", position: [-2.5, 0.2, 0], delay: 0.45 },
  { label: "ESP32", color: "#ff6b6b", position: [0, 0.2, 0], delay: 0.6 },
  { label: "KiCad", color: "#4dabf7", position: [2.5, 0.2, 0], delay: 0.75 },
  { label: "Web3", color: "#69db7c", position: [-2.5, -0.8, 0], delay: 0.9 },
  { label: "MATLAB", color: "#ffd43b", position: [0, -0.8, 0], delay: 1.05 },
  { label: "Git", color: "#ff6b6b", position: [2.5, -0.8, 0], delay: 1.2 },
]

export default function SkillBadges3D() {
  return (
    <div style={{ width: "100%", height: 280 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-4, -2, 2]} color="#4dabf7" intensity={0.4} />
        {BADGES.map((b) => (
          <Badge3D key={b.label} {...b} />
        ))}
      </Canvas>
    </div>
  )
}