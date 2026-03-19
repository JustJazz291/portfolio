import React from "react"
import { motion } from "framer-motion"
import ThreadPath from "../components/ThreadPath"

const projects = [
  {
    title: "ChainSentinel AI",
    subtitle: "Web3 Security Platform",
    color: "#ff6b6b",
    tag: "Current",
    desc: ["AI-powered platform detecting smart contract threats and phishing in real time", "Uses machine learning for anomaly detection and risk scoring"]
  },
  {
    title: "Transformerless Power Supply",
    subtitle: "KiCad PCB Design",
    color: "#69db7c",
    tag: "Completed",
    desc: ["Designed compact transformerless circuit", "Developed complete PCB-ready design"]
  },
  {
    title: "Automatic Dual Work Screwdriver",
    subtitle: "Electromechanical Design",
    color: "#ffd43b",
    tag: "Completed",
    desc: ["Electromechanical screwdriver with bidirectional control", "DPDT-based polarity reversal system"]
  },
  {
    title: "Hand Gesture Controlled Wheelchair",
    subtitle: "Embedded Systems",
    color: "#4dabf7",
    tag: "Upcoming",
    desc: ["Gesture-based control using MPU6050 and NRF24L01", "Real-time embedded system with wireless communication"]
  }
]

const tagColors = { Current: "#ff6b6b", Completed: "#69db7c", Upcoming: "#4dabf7" }

export default function Projects() {
  return (
    <section id="projects" style={{ position: "relative", overflow: "hidden" }}>
      <ThreadPath color="#ff6b6b" d="M10 60 Q 300 10 500 70 T 790 50" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 960, margin: "0 auto" }}
      >
        <p className="thread-label">chapter 03</p>
        <h2 className="section-title">My Fabric</h2>
      </motion.div>

      <div style={{
        maxWidth: 960, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="patch-card"
            style={{ borderColor: p.color }}
          >
            <div style={{ position: "absolute", inset: 4, border: "1px dashed " + p.color, borderRadius: 2, opacity: 0.4, pointerEvents: "none" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <p style={{ fontSize: "0.7rem", letterSpacing: 3, textTransform: "uppercase", color: p.color }}>{p.subtitle}</p>
              <span style={{
                fontSize: "0.65rem", padding: "2px 8px", borderRadius: 20,
                background: tagColors[p.tag] + "22", color: tagColors[p.tag],
                border: "1px solid " + tagColors[p.tag], letterSpacing: 1
              }}>{p.tag}</span>
            </div>
            <h3 style={{ fontSize: "1.15rem", marginBottom: 14, color: "#1a1a2e" }}>{p.title}</h3>
            <ul style={{ paddingLeft: 18, color: "#555", lineHeight: 1.8 }}>
              {p.desc.map((d, j) => <li key={j} style={{ fontSize: "0.9rem" }}>{d}</li>)}
            </ul>
            <div style={{ marginTop: 16, width: 40, height: 3, background: "linear-gradient(90deg, " + p.color + ", transparent)", borderRadius: 2 }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}