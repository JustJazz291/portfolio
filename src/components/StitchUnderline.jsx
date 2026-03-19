import React from "react"
import { motion } from "framer-motion"

export default function StitchUnderline({ color = "#ff6b6b", width = 180 }) {
  return (
    <svg width={width} height="14" viewBox={"0 0 " + width + " 14"} style={{ display: "block", marginTop: 4 }} aria-hidden="true">
      <motion.path
        d={"M4 8 Q " + (width*0.25) + " 3, " + (width*0.5) + " 8 T " + (width-4) + " 8"}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  )
}