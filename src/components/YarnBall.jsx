import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { motion } from "framer-motion"

function Yarn() {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.18
    meshRef.current.rotation.z = Math.sin(t * 0.4) * 0.06
    meshRef.current.position.y = Math.sin(t * 0.6) * 0.08
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color="#ff6b6b" roughness={0.9} metalness={0.05} />
    </mesh>
  )
}

export default function YarnBall() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ width: 280, height: 280, margin: "0 auto", position: "relative" }}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 42 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 4]} intensity={0.9} />
        <pointLight position={[-3, -2, 2]} color="#ffd43b" intensity={0.3} />
        <Yarn />
      </Canvas>
      {/* Thread coming out of ball */}
      <svg style={{ position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", overflow: "visible", pointerEvents: "none" }} width="4" height="50" aria-hidden="true">
        <motion.path
          d="M 2 0 C 4 15, 0 30, 2 50"
          fill="none" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  )
}