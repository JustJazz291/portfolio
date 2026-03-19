import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

function YarnMesh() {
  const mesh = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.18
    mesh.current.rotation.z = Math.sin(t * 0.4) * 0.07
    mesh.current.position.y = Math.sin(t * 0.6) * 0.09
  })
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.4, 64, 64]} />
      <meshStandardMaterial color="#ff6b6b" roughness={0.88} metalness={0.05} />
    </mesh>
  )
}

// scroll progress -> x position (vw units), alternates opposite to text
const xWaypoints = [0, 0.12, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82, 1.0]
const xValues    = [50,   68,   30,   70,   28,   72,   30,   68,  50]

export default function ScrollYarnBall({ containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const rawX = useTransform(scrollYProgress, xWaypoints, xValues)
  const rawY = useTransform(scrollYProgress, [0, 1], [6, 90])
  const x = useSpring(rawX, { stiffness: 55, damping: 20 })
  const y = useSpring(rawY, { stiffness: 55, damping: 20 })

  const left = useTransform(x, v => `calc(${v}vw - 60px)`)
  const top  = useTransform(y, v => `${v}vh`)

  return (
    <motion.div style={{
      position: "fixed",
      left: 0, top: 0,
      width: 120, height: 120,
      zIndex: 10,
      pointerEvents: "none",
      x: left,
      y: top,
    }}>
      <Canvas camera={{ position: [0, 0, 3.8], fov: 42 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 4]} intensity={0.9} />
        <pointLight position={[-3, -2, 2]} color="#ffd43b" intensity={0.3} />
        <YarnMesh />
      </Canvas>
    </motion.div>
  )
}