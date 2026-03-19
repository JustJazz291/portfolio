import React, { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ScrollYarnMesh } from "./AnimatedYarnBall"

const X_STOPS = [0,    0.12, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82, 1.0]
const X_VALS  = [50,   68,   30,   70,   28,   72,   30,   68,   50]

export default function ScrollYarnBall({ containerRef }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const rawX = useTransform(scrollYProgress, X_STOPS, X_VALS)
  const rawY = useTransform(scrollYProgress, [0, 1], [6, 90])
  const x = useSpring(rawX, { stiffness: 55, damping: 20 })
  const y = useSpring(rawY, { stiffness: 55, damping: 20 })

  const left = useTransform(x, v => `calc(${v}vw - 55px)`)
  const top  = useTransform(y, v => `${v}vh`)

  // Pass scroll progress to mesh for rotation speed
  const scrollT = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div style={{
      position: "fixed",
      left: 0, top: 0,
      width: 110, height: 110,
      zIndex: 10,
      pointerEvents: "none",
      x: left,
      y: top,
    }}>
      <Canvas camera={{ position: [0, 0, 3.6], fov: 44 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 4]} intensity={0.8} />
        <pointLight position={[-3, -2, 2]} color="#ffd43b" intensity={0.4} />
        <ScrollYarnMesh />
      </Canvas>
    </motion.div>
  )
}