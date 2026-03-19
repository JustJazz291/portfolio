import React from "react"
import { motion } from "framer-motion"
import ThreadPath from "../components/ThreadPath"

const items = [
  { icon: "*", text: "Knitting and creative design", color: "#ff6b6b" },
  { icon: "o", text: "Exploring emerging technologies", color: "#4dabf7" },
  { icon: "+", text: "Open-source collaboration", color: "#69db7c" },
  { icon: "#", text: "Building hardware and software systems", color: "#ffd43b" },
  { icon: "~", text: "Continuous learning", color: "#ff6b6b" }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export default function Interests() {
  return (
    <section id="interests" style={{ position: "relative", overflow: "hidden" }}>
      <ThreadPath color="#69db7c" d="M10 50 Q 180 10 400 55 T 790 45" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 700, margin: "0 auto" }}
      >
        <p className="thread-label">chapter 05</p>
        <h2 className="section-title">Beyond Threads</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariants} style={{
              display: "flex", alignItems: "center", gap: 20,
              background: "#ffffff", border: "2px dashed " + item.color,
              borderRadius: 6, padding: "16px 24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}>
              <span style={{ fontSize: "1.3rem", color: item.color, fontWeight: "bold", width: 28, textAlign: "center" }}>{item.icon}</span>
              <p style={{ fontSize: "1rem", color: "#333" }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}