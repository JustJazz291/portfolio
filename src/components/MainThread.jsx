import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// One continuous SVG path that weaves through all sections
// viewBox height = 8000 to cover full page scroll
const THREAD_PATH = `
  M 50% 120
  C 60% 200, 40% 320, 50% 440
  C 60% 560, 75% 640, 65% 760
  C 55% 880, 30% 960, 35% 1100
  C 40% 1240, 70% 1320, 65% 1480
  C 60% 1640, 35% 1720, 40% 1880
  C 45% 2040, 72% 2120, 68% 2280
  C 64% 2440, 32% 2520, 38% 2680
  C 44% 2840, 70% 2920, 66% 3080
  C 62% 3240, 34% 3320, 50% 3480
  C 58% 3560, 62% 3600, 58% 3640
  C 54% 3660, 50% 3680, 52% 3700
  C 56% 3720, 60% 3730, 58% 3750
  C 54% 3770, 48% 3760, 50% 3780
`

export default function MainThread({ containerRef }) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <svg
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 2,
        overflow: "visible"
      }}
      aria-hidden="true"
    >
      {/* Shadow/glow layer */}
      <motion.path
        d={THREAD_PATH}
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ pathLength, opacity: 0.08 }}
      />
      {/* Main thread */}
      <motion.path
        d={THREAD_PATH}
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="10 6"
        style={{ pathLength }}
      />
    </svg>
  )
}