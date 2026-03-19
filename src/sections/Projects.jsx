import React from "react"
import { motion } from "framer-motion"
import StitchUnderline from "../components/StitchUnderline"

const projects = [
  { title: "ChainSentinel AI", sub: "Web3 Security", color: "#ff6b6b", tag: "Current", desc: "AI-powered Web3 threat detection system using ML for anomaly detection and risk scoring." },
  { title: "Power Supply Design", sub: "KiCad PCB", color: "#69db7c", tag: "Completed", desc: "Compact transformerless circuit with complete PCB-ready design." },
  { title: "Dual Screwdriver", sub: "Electromechanical", color: "#ffd43b", tag: "Completed", desc: "Bidirectional motor-based tool system with DPDT polarity reversal." },
  { title: "Gesture Wheelchair", sub: "Embedded Systems", color: "#4dabf7", tag: "Upcoming", desc: "Hand-controlled mobility using MPU6050 and NRF24L01 wireless sensors." }
]

const tagColor = { Current: "#ff6b6b", Completed: "#69db7c", Upcoming: "#4dabf7" }

export default function Projects() {
  return (
    <section id="projects" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 5vw", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        style={{ width: "100%", maxWidth: 960 }}
      >
        <p style={{ fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", color: "#ff6b6b", marginBottom: 12, fontStyle: "italic" }}>chapter 03</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 6 }}>My Fabric</h2>
        <StitchUnderline color="#ff6b6b" width={180} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 36 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "#fff", border: "2px dashed " + p.color,
                borderRadius: 8, padding: "24px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                position: "relative", cursor: "default"
              }}
            >
              <div style={{ position: "absolute", inset: 5, border: "1px dashed " + p.color, borderRadius: 6, opacity: 0.25, pointerEvents: "none" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: "0.68rem", letterSpacing: 3, textTransform: "uppercase", color: p.color }}>{p.sub}</span>
                <span style={{ fontSize: "0.65rem", padding: "2px 10px", borderRadius: 20, background: tagColor[p.tag] + "20", color: tagColor[p.tag], border: "1px solid " + tagColor[p.tag] }}>{p.tag}</span>
              </div>
              <h3 style={{ fontSize: "1.15rem", color: "#1a1a2e", marginBottom: 10 }}>{p.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.7 }}>{p.desc}</p>
              <div style={{ marginTop: 16, height: 3, width: 48, background: "linear-gradient(90deg," + p.color + ",transparent)", borderRadius: 2 }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}