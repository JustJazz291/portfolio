import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Yarn() {
  const meshRef = useRef()
  useFrame(() => {
    meshRef.current.rotation.y += 0.008
    meshRef.current.rotation.x += 0.003
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color="#ff6b6b" roughness={0.9} metalness={0.1} />
    </mesh>
  )
}

export default function YarnBall() {
  return (
    <Canvas style={{ height: "400px" }} camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-4, -2, -2]} color="#4dabf7" intensity={0.4} />
      <Yarn />
    </Canvas>
  )
}