import React, { Suspense } from "react"
import { motion } from "framer-motion"
import ThreadPath from "../components/ThreadPath"
import SkillBadges3D from "../components/SkillBadges3D"

const skillGroups = [
  { label: "Programming", color: "#ff6b6b", skills: ["Python", "C++", "Embedded C", "MATLAB"] },
  { label: "Tools and Platforms", color: "#4dabf7", skills: ["MATLAB", "Simulink", "Simscape", "KiCad", "TinkerCAD", "Power BI", "VS Code", "Google Colab"] },
  { label: "Embedded Systems and IoT", color: "#69db7c", skills: ["Arduino Nano", "ESP32", "NRF24L01", "H-Bridge Motor Drivers"] },
  { label: "Development and Workflow", color: "#ffd43b", skills: ["Git and GitHub", "PCB Design", "Circuit Simulation", "System Modeling"] },
  { label: "Core Areas", color: "#ff6b6b", skills: ["Power Electronics", "Embedded Systems", "Data Analysis", "Web3 and Cybersecurity"] }
]

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", overflow: "hidden" }}>
      <ThreadPath color="#4dabf7" d="M10 60 Q 250 15 500 60 T 790 55" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        <p className="thread-label">chapter 02</p>
        <h2 className="section-title">Stitches I Know</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ maxWidth: 900, margin: "0 auto 40px" }}
      >
        <Suspense fallback={<div style={{ height: 280, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>Loading badges...</div>}>
          <SkillBadges3D />
        </Suspense>
      </motion.div>

      <div style={{
        maxWidth: 900, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24
      }}>
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            style={{
              background: "#ffffff", border: "2px dashed " + g.color,
              borderRadius: 6, padding: "20px 24px", position: "relative",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ position: "absolute", inset: 5, border: "1px dashed " + g.color, borderRadius: 4, opacity: 0.3, pointerEvents: "none" }} />
            <h3 style={{ fontSize: "0.75rem", letterSpacing: 3, textTransform: "uppercase", color: g.color, marginBottom: 14 }}>{g.label}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.skills.map(s => (
                <span key={s} style={{
                  padding: "4px 12px", border: "1.5px solid " + g.color,
                  borderRadius: 20, fontSize: "0.85rem", color: "#333",
                  background: g.color + "18"
                }}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}