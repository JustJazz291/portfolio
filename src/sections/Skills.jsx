import React, { Suspense } from "react"
import { motion } from "framer-motion"
import StitchUnderline from "../components/StitchUnderline"
import { StitchSampler } from "../components/EmbroideryElements"
import SkillBadges3D from "../components/SkillBadges3D"

const groups = [
  { label:"Code",    color:"#ff6b6b", skills:["Python","C++","Embedded C","MATLAB"] },
  { label:"Tools",   color:"#4dabf7", skills:["Simulink","KiCad","Power BI","Git"] },
  { label:"Domains", color:"#69db7c", skills:["Embedded Systems","Power Electronics","Data","Web3"] }
]

export default function Skills() {
  return (
    <section id="skills" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"flex-end", padding:"80px 5vw", position:"relative" }}>
      <motion.div
        initial={{ opacity:0, x:60 }}
        whileInView={{ opacity:1, x:0 }}
        viewport={{ once:true, amount:0.3 }}
        transition={{ duration:0.7 }}
        style={{ maxWidth:680, width:"100%" }}
      >
        <p style={{ fontSize:"0.72rem", letterSpacing:4, textTransform:"uppercase", color:"#4dabf7", marginBottom:12, fontStyle:"italic" }}>chapter 02</p>
        <h2 style={{ fontSize:"clamp(1.8rem,4vw,3rem)", marginBottom:6 }}>Stitches I Know</h2>
        <StitchUnderline color="#4dabf7" width={240} />

        {/* Stitch sampler decoration */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7, delay:0.1 }}
          style={{ marginTop:24, background:"#fff", border:"1px dashed #dcdcdc", borderRadius:8, padding:"16px 20px", boxShadow:"0 4px 20px rgba(0,0,0,0.04)" }}
        >
          <p style={{ fontSize:"0.65rem", letterSpacing:3, color:"#aaa", marginBottom:10, textTransform:"uppercase" }}>stitch sampler</p>
          <StitchSampler width={Math.min(560, typeof window !== "undefined" ? window.innerWidth - 80 : 560)} height={100} />
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:14, marginTop:24 }}>
          {groups.map((g,i) => (
            <motion.div key={g.label}
              initial={{ opacity:0, y:30, scale:0.96 }}
              whileInView={{ opacity:1, y:0, scale:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.12 }}
              style={{ background:"#fff", border:"2px dashed "+g.color, borderRadius:8, padding:"16px 24px", boxShadow:"0 8px 30px rgba(0,0,0,0.04)" }}
            >
              <span style={{ fontSize:"0.72rem", letterSpacing:3, textTransform:"uppercase", color:g.color, display:"block", marginBottom:10 }}>{g.label}</span>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {g.skills.map(s => (
                  <span key={s} style={{ padding:"4px 14px", border:"1.5px solid "+g.color, borderRadius:20, fontSize:"0.85rem", color:"#333", background:g.color+"15" }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}