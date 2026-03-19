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
import "./App.css"

// Single continuous thread path weaving through all sections
// Uses percentage-based x so it works on any screen width
const THREAD = "M 50% 5% C 62% 10%, 38% 18%, 50% 24% S 70% 30%, 60% 38% S 32% 44%, 40% 52% S 68% 58%, 62% 66% S 34% 72%, 42% 80% S 66% 86%, 50% 92% C 54% 94%, 56% 95%, 54% 96% S 50% 97%, 52% 98%"

function ContinuousThread({ containerRef }) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2, overflow: "visible" }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Glow */}
      <motion.path d={THREAD} fill="none" stroke="#ff6b6b" strokeWidth="14" strokeLinecap="round" style={{ pathLength, opacity: 0.06 }} />
      {/* Main stitched thread */}
      <motion.path d={THREAD} fill="none" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 7" style={{ pathLength }} />
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
      {entered && <ContinuousThread containerRef={containerRef} />}
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