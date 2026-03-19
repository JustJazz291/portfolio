import React, { Suspense } from "react"
import { motion } from "framer-motion"
import YarnBall from "../components/YarnBall"
import WordReveal from "../components/WordReveal"
import StitchUnderline from "../components/StitchUnderline"

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", position: "relative", padding: "80px 5vw"
    }}>
      <Suspense fallback={<div style={{ height: 280, display: "flex", alignItems: "center", justifyContent: "center", color: "#ff6b6b" }}>...</div>}>
        <YarnBall />
      </Suspense>

      <motion.div style={{ marginTop: 60 }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", marginBottom: 8 }}
        >
          Janhavi Amit Shete
        </motion.h1>
        <StitchUnderline color="#ff6b6b" width={320} />

        <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#555", fontStyle: "italic", marginTop: 20, maxWidth: 520, margin: "20px auto 0" }}>
          <WordReveal
            text="Connecting threads of code and creativity"
            highlightWords={["threads", "code", "creativity"]}
            delay={0.3}
          />
        </p>
      </motion.div>
    </section>
  )
}