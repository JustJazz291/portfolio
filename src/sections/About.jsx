import React from "react"
import { motion } from "framer-motion"
import WordReveal from "../components/WordReveal"
import StitchUnderline from "../components/StitchUnderline"

const lines = [
  { text: "I'm Janhavi — an Electrical Engineering student exploring the space where hardware meets software.", highlight: ["hardware", "software"] },
  { text: "I build systems, experiment with ideas, and turn concepts into reality.", highlight: ["build", "reality"] },
  { text: "Currently working on Web3 security and data-driven solutions.", highlight: ["Web3", "data-driven"] }
]

export default function About() {
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 5vw", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 640 }}
      >
        <p style={{ fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", color: "#69db7c", marginBottom: 12, fontStyle: "italic" }}>chapter 01</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 6 }}>My Pattern</h2>
        <StitchUnderline color="#69db7c" width={200} />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: 32, background: "#fff",
            border: "2px dashed #69db7c", borderRadius: 8,
            padding: "32px 36px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", inset: 6, border: "1px dashed #69db7c", borderRadius: 6, opacity: 0.25, pointerEvents: "none" }} />
          {lines.map((l, i) => (
            <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#333", marginBottom: i < lines.length - 1 ? 16 : 0 }}>
              <WordReveal text={l.text} highlightWords={l.highlight} delay={0.3 + i * 0.15} />
            </p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}