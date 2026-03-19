import React, { useState, useRef, Suspense } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Landing from "./sections/Landing"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Achievements from "./sections/Achievements"
import Interests from "./sections/Interests"
import Contact from "./sections/Contact"
import ScrollYarnBall from "./components/ScrollYarnBall"
import "./App.css"

const X_STOPS = [0, 0.12, 0.22, 0.34, 0.46, 0.58, 0.70, 0.82, 1.0]
const X_VALS  = [50,   68,   30,   70,   28,   72,   30,   68,  50]

function ContinuousThread({ containerRef }) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Build SVG path matching yarn ball waypoints
  const W = 100 // percent units
  const pts = X_STOPS.map((p, i) => ({ p, x: X_VALS[i], y: p * 100 }))
  let d = `M ${pts[0].x}% ${pts[0].y}%`
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i-1], curr = pts[i]
    const cy = (prev.y + curr.y) / 2
    d += ` C ${prev.x}% ${cy}%, ${curr.x}% ${cy}%, ${curr.x}% ${curr.y}%`
  }
  // Heart at end
  d += ` C 52% 93%, 56% 94%, 54% 95% S 50% 96%, 52% 97%`

  return (
    <svg style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:2, overflow:"visible" }} aria-hidden="true">
      <motion.path d={d} fill="none" stroke="#ff6b6b" strokeWidth="14" strokeLinecap="round" style={{ pathLength, opacity: 0.07 }} />
      <motion.path d={d} fill="none" stroke="#ff6b6b" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="10 7" style={{ pathLength }} />
    </svg>
  )
}

export default function App() {
  const [entered, setEntered] = useState(false)
  const containerRef = useRef(null)

  const handleEnter = () => {
    setEntered(true)
    setTimeout(() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }), 100)
  }

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {entered && (
        <>
          <ContinuousThread containerRef={containerRef} />
          <Suspense fallback={null}>
            <ScrollYarnBall containerRef={containerRef} />
          </Suspense>
        </>
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Landing onEnter={handleEnter} />
        {entered && (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Interests />
            <Contact />
          </>
        )}
      </div>
    </div>
  )
}