import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Typewriter from "../components/Typewriter"

export default function Landing({ onEnter }) {
  const path1 = useRef(null)
  const path2 = useRef(null)

  useEffect(() => {
    [path1, path2].forEach((r, i) => {
      const p = r.current
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = len
      p.style.strokeDashoffset = len
      setTimeout(() => {
        p.style.transition = (1.6 + i * 0.5) + "s ease"
        p.style.strokeDashoffset = 0
      }, 400 + i * 300)
    })
  }, [])

  return (
    <section id="landing" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", position: "relative", overflow: "hidden"
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} aria-hidden="true">
        <path ref={path1}
          d="M -40 120 C 100 80, 280 160, 480 100 S 780 40, 1000 120 S 1200 180, 1440 100"
          fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        <path ref={path2}
          d="M -40 280 C 120 240, 300 320, 520 260 S 820 200, 1060 280 S 1280 340, 1440 260"
          fill="none" stroke="#4dabf7" strokeWidth="1.5" strokeDasharray="5 8" strokeLinecap="round" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ position: "relative", zIndex: 2, maxWidth: 600 }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: 4, textTransform: "uppercase", color: "#ff6b6b", marginBottom: 24, fontStyle: "italic" }}>
          a handmade story
        </p>
        <Typewriter lines={["Every thread tells a story...", "Here's mine."]} speed={52} />
        <motion.button
          className="btn-stitch"
          onClick={onEnter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          style={{ marginTop: 48 }}
        >
          Enter
        </motion.button>
      </motion.div>
    </section>
  )
}