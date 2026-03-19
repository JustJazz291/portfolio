import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import StitchUnderline from "../components/StitchUnderline"

function HeartThread() {
  const pathRef = useRef(null)
  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        path.style.transition = "stroke-dashoffset 2.8s ease 0.4s"
        path.style.strokeDashoffset = 0
        obs.unobserve(path)
      }
    }, { threshold: 0.4 })
    obs.observe(path)
    return () => obs.disconnect()
  }, [])
  return (
    <svg width="140" height="130" viewBox="0 0 140 130" style={{ display: "block", margin: "0 auto 28px" }} aria-hidden="true">
      <path ref={pathRef}
        d="M 70 108 C 22 78, 6 54, 6 36 C 6 18, 18 6, 35 6 C 49 6, 61 14, 70 26 C 79 14, 91 6, 105 6 C 122 6, 134 18, 134 36 C 134 54, 118 78, 70 108 Z"
        fill="none" stroke="#ff6b6b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const links = [
  { label: "Email", value: "jashete_b24@ee.vjti.ac.in", href: "mailto:jashete_b24@ee.vjti.ac.in", color: "#ff6b6b" },
  { label: "Phone", value: "+91 8104448175", href: "tel:+918104448175", color: "#4dabf7" },
  { label: "LinkedIn", value: "janhavi-shete-54880a312", href: "https://www.linkedin.com/in/janhavi-shete-54880a312", color: "#69db7c" },
  { label: "GitHub", value: "JustJazz291", href: "https://github.com/JustJazz291", color: "#ffd43b" }
]

export default function Contact() {
  return (
    <section id="contact" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 5vw", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 600, width: "100%" }}
      >
        <p style={{ fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", color: "#ff6b6b", marginBottom: 12, fontStyle: "italic" }}>final stitch</p>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: 6 }}>Let's Connect Threads</h2>
        <StitchUnderline color="#ff6b6b" width={280} />

        <p style={{ fontSize: "1.05rem", color: "#555", fontStyle: "italic", margin: "24px auto 40px", maxWidth: 440 }}>
          Let's connect and create something meaningful.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "#fff", border: "2px dashed #ff6b6b", borderRadius: 8,
            padding: "36px 40px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
            position: "relative", marginBottom: 60
          }}
        >
          <div style={{ position: "absolute", inset: 5, border: "1px dashed #ff6b6b", borderRadius: 6, opacity: 0.25, pointerEvents: "none" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ color: "#333", textDecoration: "none", fontSize: "1rem", display: "flex", gap: 14, alignItems: "center" }}
              >
                <span style={{ color: l.color, fontWeight: "bold", minWidth: 72, textAlign: "right", fontStyle: "italic" }}>{l.label}</span>
                <span>{l.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <HeartThread />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 3 }}
          style={{ fontSize: "1.4rem", fontStyle: "italic", color: "#ff6b6b", letterSpacing: 2 }}
        >
          Let's connect.
        </motion.p>
        <p style={{ marginTop: 40, fontSize: "0.72rem", color: "#bbb", letterSpacing: 3 }}>handcrafted with care by Janhavi</p>
      </motion.div>
    </section>
  )
}