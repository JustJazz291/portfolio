import React from "react"
import { motion } from "framer-motion"
import StitchUnderline from "../components/StitchUnderline"
import { TimelineKnot } from "../components/EmbroideryElements"

const items = [
  { text:"Gen-AI Hackathon Finalist (IISc & IBM)", color:"#ff6b6b" },
  { text:"EMC2 Lab Trainee (MATLAB/Simulink)",     color:"#4dabf7" },
  { text:"C4GT SheCodes (IIITH)",                  color:"#69db7c" },
  { text:"MathWorks Certifications",               color:"#ffd43b" },
  { text:"VJTI Electronics Sector",                color:"#ff6b6b" }
]

const container = { hidden:{}, visible:{ transition:{ staggerChildren:0.18 } } }
const item = { hidden:{ opacity:0, x:-28 }, visible:{ opacity:1, x:0, transition:{ duration:0.5 } } }

export default function Achievements() {
  return (
    <section id="achievements" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"flex-end", padding:"80px 5vw", position:"relative" }}>
      {/* Background thread wave */}
      <div style={{ position:"absolute", top:0, left:0, width:"100%", overflow:"hidden", opacity:0.12, pointerEvents:"none" }}>
        <svg width="110%" height="60" viewBox="0 0 1200 60" aria-hidden="true" style={{ animation:"threadWave 6s ease-in-out infinite" }}>
          <path d="M0 30 Q200 5,400 30 T800 30 T1200 30" fill="none" stroke="#ffd43b" strokeWidth="2.5" strokeDasharray="8 6" strokeLinecap="round" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity:0, x:60 }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true, amount:0.3 }}
        transition={{ duration:0.7 }}
        style={{ maxWidth:600, width:"100%" }}
      >
        <p style={{ fontSize:"0.72rem", letterSpacing:4, textTransform:"uppercase", color:"#ffd43b", marginBottom:12, fontStyle:"italic" }}>chapter 04</p>
        <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", marginBottom:6 }}>Milestones</h2>
        <StitchUnderline color="#ffd43b" width={180} />

        {/* Stitched timeline thread connecting knots */}
        <div style={{ position:"relative", marginTop:32 }}>
          {/* Vertical thread line */}
          <motion.svg style={{ position:"absolute", left:15, top:0, width:4, height:"100%", overflow:"visible" }} aria-hidden="true">
            <motion.line x1="2" y1="0" x2="2" y2="100%"
              stroke="#ffd43b" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round"
              initial={{ pathLength:0 }} whileInView={{ pathLength:1 }} viewport={{ once:true }}
              transition={{ duration:1.5 }} />
          </motion.svg>

          <motion.div
            initial={{ opacity:0, y:50, scale:0.96 }}
            whileInView={{ opacity:1, y:0, scale:1 }}
            viewport={{ once:true }}
            transition={{ duration:0.6, delay:0.2 }}
            style={{ background:"#fff", border:"2px dashed #ffd43b", borderRadius:8, padding:"12px 24px 24px 20px", boxShadow:"0 10px 40px rgba(0,0,0,0.05)", position:"relative" }}
          >
            <div style={{ position:"absolute", inset:5, border:"1px dashed #ffd43b", borderRadius:6, opacity:0.25, pointerEvents:"none" }} />
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once:true, amount:0.2 }}>
              {items.map((it,i) => (
                <motion.div key={i} variants={item} style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 0", borderBottom: i < items.length-1 ? "1px dashed #dcdcdc" : "none" }}>
                  <TimelineKnot color={it.color} index={i} />
                  <p style={{ fontSize:"1rem", color:"#333", lineHeight:1.6 }}>{it.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}