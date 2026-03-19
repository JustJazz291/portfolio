import React, { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ScrollYarnMesh } from "./AnimatedYarnBall"

const X_STOPS = [0,    0.12, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82, 1.0]
const X_VALS  = [50,   68,   30,   70,   28,   72,   30,   68,   50]

// Build the SVG path string matching the waypoints (in vw/vh percent units)
function buildPath(xStops, xVals) {
  const pts = xStops.map((p, i) => ({ x: xVals[i], y: p * 100 }))
  let d = `M ${pts[0].x}vw ${pts[0].y}vh`
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1], curr = pts[i]
    const cy = (prev.y + curr.y) / 2
    d += ` C ${prev.x}vw ${cy}vh, ${curr.x}vw ${cy}vh, ${curr.x}vw ${curr.y}vh`
  }
  return d
}

// Red trailing thread SVG that draws progressively with scroll
function TrailingThread({ scrollYProgress }) {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Path using percentage-based viewBox coords (0-100 x, 0-100 y)
  const pts = X_STOPS.map((p, i) => ({ x: X_VALS[i], y: p * 100 }))
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1], curr = pts[i]
    const cy = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${cy}, ${curr.x} ${cy}, ${curr.x} ${curr.y}`
  }

  return (
    <svg
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        pointerEvents: "none",
        zIndex: 9,
        overflow: "visible"
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Glow layer */}
      <motion.path
        d={d}
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="1.2"
        strokeLinecap="round"
        style={{ pathLength, opacity: 0.18 }}
      />
      {/* Main red thread */}
      <motion.path
        d={d}
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray="2 1.5"
        style={{ pathLength }}
      />
    </svg>
  )
}

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

  return (
    <>
      <TrailingThread scrollYProgress={scrollYProgress} />
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
    </>
  )
}