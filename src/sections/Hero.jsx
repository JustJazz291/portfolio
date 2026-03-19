import React, { Suspense } from "react"
import { motion } from "framer-motion"
import YarnBall from "../components/YarnBall"
import ThreadPath from "../components/ThreadPath"

export default function Hero() {
  return (
    <section id="hero" style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", textAlign: "center", position: "relative", minHeight: "100vh"
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: "100%" }}
      >
        <Suspense fallback={<div style={{ height: 400, display: "flex", alignItems: "center", justifyContent: "center", color: "#ff6b6b", fontSize: "1.2rem" }}>Loading...</div>}>
          <YarnBall />
        </Suspense>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginTop: "16px", marginBottom: "12px" }}
      >
        Janhavi Amit Shete
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "#555", fontStyle: "italic", maxWidth: 500, margin: "0 auto 40px" }}
      >
        Connecting threads of code and creativity
      </motion.p>

      <ThreadPath color="#ff6b6b" d="M10 60 Q 200 10 400 60 T 790 60" />
    </section>
  )
}