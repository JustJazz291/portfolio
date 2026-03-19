import React from "react"
import { motion } from "framer-motion"
import ThreadPath from "../components/ThreadPath"

export default function About() {
  return (
    <section id="about" style={{ position: "relative", overflow: "hidden" }}>
      <ThreadPath color="#69db7c" d="M10 40 Q 150 5 400 40 T 790 40" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 760, margin: "0 auto", paddingTop: "20px" }}
      >
        <p className="thread-label">chapter 01</p>
        <h2 className="section-title">My Pattern</h2>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#ffffff",
            border: "2px dashed #69db7c",
            borderRadius: 6,
            padding: "36px",
            position: "relative",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          <div style={{ position: "absolute", inset: 6, border: "1px dashed #69db7c", borderRadius: 4, pointerEvents: "none", opacity: 0.3 }} />
          <h3 style={{ fontSize: "1.3rem", marginBottom: 4, color: "#1a1a2e" }}>Janhavi Amit Shete</h3>
          <p style={{ fontSize: "0.85rem", color: "#ff6b6b", letterSpacing: 2, marginBottom: 20, fontStyle: "italic" }}>Electrical Engineering @ VJTI, Mumbai</p>
          <p style={{ lineHeight: 1.9, fontSize: "1.02rem", color: "#333", marginBottom: 16 }}>
            A tech enthusiast driven by the fusion of hardware and software, I explore everything from embedded systems and power electronics to web and AI innovations.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: "1.02rem", color: "#333", marginBottom: 16 }}>
            Currently building a Web3-based security intelligence platform while pursuing a BS in Data Science from IIT Madras, I thrive on hands-on problem solving, simulations, and real-world system design.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: "1.02rem", color: "#333" }}>
            I enjoy open-source, experimenting with emerging tech, and transforming ideas into functional solutions — aiming to build intelligent, scalable systems that bridge the physical and digital world.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}