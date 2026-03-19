import React from "react"
import { motion } from "framer-motion"
import ThreadPath from "../components/ThreadPath"

const items = [
  { text: "Finalist - IndiaAI Impact Gen-AI Hackathon (IISc and IBM)", color: "#ff6b6b" },
  { text: "Trainee - EMC2 Lab (MATLAB/Simulink)", color: "#4dabf7" },
  { text: "Trainee - C4GT SheCodes (IIITH)", color: "#69db7c" },
  { text: "Simulink and Simscape Onramp - MathWorks", color: "#ffd43b" },
  { text: "Basic MATLAB Skills - MathWorks", color: "#ff6b6b" },
  { text: "Electronics Sector Member - VJTI", color: "#4dabf7" },
  { text: "Former VJTI Racing Club Member", color: "#69db7c" }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
}

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background thread wave */}
      <div className="thread-bg" style={{ position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none" }}>
        <svg width="120%" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q 150 5, 300 30 T 600 30 T 900 30 T 1200 30"
            fill="none" stroke="#ffd43b" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" />
        </svg>
      </div>

      <ThreadPath color="#ffd43b" d="M10 50 Q 200 10 400 50 T 790 50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 760, margin: "0 auto" }}
      >
        <p className="thread-label">chapter 04</p>
        <h2 className="section-title">
          Milestones
          <span style={{
            display: "block", height: 3, width: 120, marginTop: 8,
            background: "linear-gradient(90deg, #ffd43b, transparent)",
            borderRadius: 2, animation: "threadWave 4s ease-in-out infinite"
          }} />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#ffffff",
            border: "2px dashed #ffd43b",
            borderRadius: 6,
            padding: "8px 32px 28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", inset: 5, border: "1px dashed #ffd43b", borderRadius: 4, opacity: 0.3, pointerEvents: "none" }} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((item, i) => (
              <motion.div key={i} variants={itemVariants} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                padding: "14px 0", borderBottom: "1px dashed #dcdcdc"
              }}>
                <motion.svg
                  width="22" height="22" viewBox="0 0 22 22"
                  style={{ flexShrink: 0, marginTop: 2 }}
                  aria-hidden="true"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <circle cx="11" cy="11" r="5" fill="none" stroke={item.color} strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="11" cy="11" r="2.5" fill={item.color} />
                </motion.svg>
                <p style={{ fontSize: "1rem", color: "#333", lineHeight: 1.6 }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}