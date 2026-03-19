import React from "react"
import { motion } from "framer-motion"
import StitchUnderline from "../components/StitchUnderline"
import { ThreadPattern } from "../components/EmbroideryElements"

const phrases = [
  { text:"Knitting ideas.",      color:"#ff6b6b" },
  { text:"Building systems.",    color:"#4dabf7" },
  { text:"Exploring tech.",      color:"#69db7c" },
  { text:"Learning endlessly.",  color:"#ffd43b" }
]

export default function Interests() {
  return (
    <section id="interests" style={{ minHeight:"60vh", display:"flex", alignItems:"center", padding:"80px 5vw", position:"relative", overflow:"hidden" }}>
      {/* Abstract thread patterns in background */}
      <ThreadPattern color="#ff6b6b" width={200} height={80} delay={0} />
      <ThreadPattern color="#4dabf7" width={160} height={60} delay={0.3} />
      <div style={{ position:"absolute", bottom:20, right:"5%", opacity:0.2 }}>
        <ThreadPattern color="#ffd43b" width={180} height={70} delay={0.6} />
      </div>

      <motion.div
        initial={{ opacity:0, x:-60 }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true, amount:0.3 }}
        transition={{ duration:0.7 }}
        style={{ maxWidth:700, position:"relative", zIndex:1 }}
      >
        <p style={{ fontSize:"0.72rem", letterSpacing:4, textTransform:"uppercase", color:"#69db7c", marginBottom:12, fontStyle:"italic" }}>chapter 05</p>
        <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", marginBottom:6 }}>Beyond Threads</h2>
        <StitchUnderline color="#69db7c" width={220} />

        <div style={{ display:"flex", flexWrap:"wrap", gap:16, marginTop:36 }}>
          {phrases.map((p,i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30, scale:0.9 }}
              whileInView={{ opacity:1, y:0, scale:1 }}
              viewport={{ once:true }}
              whileHover={{ scale:1.05, rotate: i%2===0 ? 1 : -1 }}
              transition={{ duration:0.5, delay:i*0.12 }}
              style={{ background:"#fff", border:"2px dashed "+p.color, borderRadius:8, padding:"14px 28px", boxShadow:"0 8px 24px rgba(0,0,0,0.04)", fontSize:"1.1rem", color:p.color, fontStyle:"italic", position:"relative" }}
            >
              {/* Small stitch dots on corners */}
              {[[-4,-4],[4,-4],[-4,4],[4,4]].map(([dx,dy],j) => (
                <motion.div key={j} style={{ position:"absolute", width:5, height:5, borderRadius:"50%", background:p.color, top: dy < 0 ? -2 : "auto", bottom: dy > 0 ? -2 : "auto", left: dx < 0 ? -2 : "auto", right: dx > 0 ? -2 : "auto" }}
                  animate={{ scale:[1,1.3,1] }} transition={{ duration:2, repeat:Infinity, delay:j*0.3+i*0.2 }} />
              ))}
              {p.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}