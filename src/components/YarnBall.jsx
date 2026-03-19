import { motion } from "framer-motion"
import { HeroYarnBall } from "./AnimatedYarnBall"

export default function YarnBall() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      <HeroYarnBall />
    </motion.div>
  )
}