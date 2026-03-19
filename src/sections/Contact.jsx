import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ThreadPath from "../components/ThreadPath"

function HeartSignature() {
  const pathRef = useRef(null)
  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        path.style.transition = "stroke-dashoffset 2.5s ease 0.3s"
        path.style.strokeDashoffset = 0
        observer.unobserve(path)
      }
    }, { threshold: 0.3 })
    observer.observe(path)
    return () => observer.disconnect()
  }, [])
  return (
    <svg width="120" height="110" viewBox="0 0 120 110" style={{ display: "block", margin: "0 auto 24px" }} aria-hidden="true">
      <path ref={pathRef}
        d="M 60 90 C 20 65, 5 45, 5 30 C 5 15, 15 5, 30 5 C 42 5, 52 12, 60 22 C 68 12, 78 5, 90 5 C 105 5, 115 15, 115 30 C 115 45, 100 65, 60 90 Z"
        fill="none" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden", textAlign: "center" }}>
      <ThreadPath color="#4dabf7" d="M10 50 Q 200 10 400 55 T 790 45" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 680, margin: "0 auto" }}
      >
        <p className="thread-label">final stitch</p>
        <h2 className="section-title">Let's Connect Threads</h2>
        <p style={{ fontSize: "1.1rem", color: "#555", fontStyle: "italic", marginBottom: 48 }}>
          Let's connect and weave something meaningful together.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#ffffff", border: "2px dashed #ff6b6b", borderRadius: 6,
            padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            position: "relative", marginBottom: 60
          }}
        >
          <div style={{ position: "absolute", inset: 6, border: "1px dashed #ff6b6b", borderRadius: 4, opacity: 0.3, pointerEvents: "none" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
            {[
              { label: "Email", value: "jashete_b24@ee.vjti.ac.in", href: "mailto:jashete_b24@ee.vjti.ac.in", color: "#ff6b6b" },
              { label: "Phone", value: "+91 8104448175", href: "tel:+918104448175", color: "#4dabf7" },
              { label: "LinkedIn", value: "janhavi-shete-54880a312", href: "https://www.linkedin.com/in/janhavi-shete-54880a312", color: "#69db7c" },
              { label: "GitHub", value: "JustJazz291", href: "https://github.com/JustJazz291", color: "#ffd43b" }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ color: "#333", textDecoration: "none", fontSize: "1rem", display: "flex", gap: 12, alignItems: "center" }}
              >
                <span style={{ color: item.color, fontWeight: "bold", minWidth: 70, textAlign: "right" }}>{item.label}</span>
                <span>{item.value}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <HeartSignature />
        <p style={{ fontSize: "1.3rem", fontStyle: "italic", color: "#ff6b6b", letterSpacing: 2 }}>Let's connect.</p>
        <p style={{ marginTop: 48, fontSize: "0.75rem", color: "#aaa", letterSpacing: 2 }}>handcrafted with care by Janhavi</p>
      </motion.div>
    </section>
  )
}