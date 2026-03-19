import { motion } from "framer-motion"

export default function ThreadPath({ color = "#ff6b6b", d = "M10 100 Q 200 20 400 100 T 790 100" }) {
  return (
    <svg width="100%" height="120" viewBox="0 0 800 120" style={{ overflow: "visible", pointerEvents: "none" }} aria-hidden="true">
      <motion.path
        d={d}
        fill="transparent"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  )
}