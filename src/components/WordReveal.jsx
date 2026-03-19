import React from "react"
import { motion } from "framer-motion"

export default function WordReveal({ text, className = "", style = {}, highlightWords = [], delay = 0 }) {
  const words = text.split(" ")
  return (
    <span className={className} style={{ display: "inline", ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + i * 0.08 }}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            color: highlightWords.includes(word) ? "#ff6b6b" : "inherit"
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}