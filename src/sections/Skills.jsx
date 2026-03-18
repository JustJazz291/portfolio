import React, { Suspense } from "react"
import { useScrollReveal } from "../components/useScrollReveal"
import SkillBadges3D from "../components/SkillBadges3D"

const skillGroups = [
  { label: "Programming", color: "#ff6b6b", skills: ["Python", "C++", "Embedded C", "MATLAB"] },
  { label: "Tools and Platforms", color: "#4dabf7", skills: ["MATLAB", "Simulink", "Simscape", "KiCad", "TinkerCAD", "Power BI", "VS Code", "Google Colab"] },
  { label: "Embedded Systems and IoT", color: "#69db7c", skills: ["Arduino Nano", "ESP32", "NRF24L01", "H-Bridge Motor Drivers"] },
  { label: "Development and Workflow", color: "#ffd43b", skills: ["Git and GitHub", "PCB Design", "Circuit Simulation", "System Modeling"] },
  { label: "Core Areas", color: "#ff6b6b", skills: ["Power Electronics", "Embedded Systems", "Data Analysis", "Web3 and Cybersecurity"] }
]

function SkillGroup({ group, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="section-reveal" style={{
      transitionDelay: (index * 0.12) + "s",
      background: "white", border: "2px solid " + group.color,
      borderRadius: 4, padding: "20px 24px", position: "relative",
      boxShadow: "3px 3px 0 #dcdcdc"
    }}>
      <div style={{ position: "absolute", inset: 5, border: "1px dashed " + group.color, borderRadius: 2, opacity: 0.35, pointerEvents: "none" }} />
      <h3 style={{ fontSize: "0.75rem", letterSpacing: 3, textTransform: "uppercase", color: group.color, marginBottom: 14 }}>
        {group.label}
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {group.skills.map(s => (
          <span key={s} style={{
            padding: "4px 12px", border: "1.5px solid " + group.color,
            borderRadius: 2, fontSize: "0.85rem", color: "#333",
            background: group.color + "18"
          }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useScrollReveal()
  const badgeRef = useScrollReveal()
  return (
    <section id="skills" style={{ position: "relative", overflow: "hidden" }}>
      <svg width="200" height="100" style={{ position: "absolute", top: 0, left: "10%", pointerEvents: "none" }} aria-hidden="true">
        <path d="M 0 0 C 40 20, 80 60, 100 80 S 160 100, 200 70"
          fill="none" stroke="#4dabf7" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" />
      </svg>
      <div ref={titleRef} className="section-reveal" style={{ maxWidth: 900, margin: "0 auto" }}>
        <p className="thread-label">chapter 02</p>
        <h2 className="section-title">Stitches I Know</h2>
      </div>

      <div ref={badgeRef} className="section-reveal" style={{ maxWidth: 900, margin: "0 auto 40px" }}>
        <Suspense fallback={<div style={{ height: 280, display: "flex", alignItems: "center", justifyContent: "center", color: "#aaa" }}>Loading badges...</div>}>
          <SkillBadges3D />
        </Suspense>
      </div>

      <div style={{
        maxWidth: 900, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24
      }}>
        {skillGroups.map((g, i) => <SkillGroup key={g.label} group={g} index={i} />)}
      </div>
    </section>
  )
}