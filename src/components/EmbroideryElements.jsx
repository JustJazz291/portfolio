import React from "react"
import { motion } from "framer-motion"

// Floral cross-stitch patch for About
export function FloralPatch({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <rect width="120" height="120" fill="white" stroke="#dcdcdc" strokeWidth="1" rx="4" />
      {/* Cross stitches */}
      {[[20,20],[40,20],[60,20],[80,20],[100,20],
        [20,40],[40,40],[60,40],[80,40],[100,40],
        [20,60],[40,60],[60,60],[80,60],[100,60],
        [20,80],[40,80],[60,80],[80,80],[100,80],
        [20,100],[40,100],[60,100],[80,100],[100,100]
      ].map(([x,y],i) => (
        <g key={i} opacity="0.18">
          <line x1={x-5} y1={y-5} x2={x+5} y2={y+5} stroke="#dcdcdc" strokeWidth="1" />
          <line x1={x+5} y1={y-5} x2={x-5} y2={y+5} stroke="#dcdcdc" strokeWidth="1" />
        </g>
      ))}
      {/* Flower center */}
      <motion.circle cx="60" cy="60" r="8" fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="4 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }} />
      {/* Petals */}
      {[0,60,120,180,240,300].map((angle, i) => {
        const rad = angle * Math.PI / 180
        const x1 = 60 + Math.cos(rad) * 10
        const y1 = 60 + Math.sin(rad) * 10
        const x2 = 60 + Math.cos(rad) * 22
        const y2 = 60 + Math.sin(rad) * 22
        const colors = ["#ff6b6b","#4dabf7","#ffd43b","#69db7c","#ff6b6b","#4dabf7"]
        return (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={colors[i]} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="12"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }} />
        )
      })}
      {/* Geometric border */}
      {[0,1,2,3].map(i => (
        <motion.rect key={i} x={8+i*4} y={8+i*4} width={104-i*8} height={104-i*8}
          fill="none" stroke={["#ff6b6b","#4dabf7","#ffd43b","#69db7c"][i]}
          strokeWidth="1" strokeDasharray="4 6" rx="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.15 }} />
      ))}
    </svg>
  )
}

// Stitch sampler for Skills
export function StitchSampler({ width = 280, height = 100 }) {
  return (
    <svg width={width} height={height} viewBox={"0 0 " + width + " " + height} aria-hidden="true">
      {/* Cross stitch row */}
      {Array.from({length: 8}, (_,i) => (
        <g key={i}>
          <motion.line x1={10+i*32} y1={15} x2={22+i*32} y2={27} stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round"
            initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.06}} />
          <motion.line x1={22+i*32} y1={15} x2={10+i*32} y2={27} stroke="#ff6b6b" strokeWidth="2" strokeLinecap="round"
            initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.06+0.2}} />
        </g>
      ))}
      {/* Dashed stitch row */}
      <motion.path d={"M 10 50 " + Array.from({length:12},(_,i)=>`L ${10+i*22} 50 M ${10+i*22+14} 50`).join(" ")}
        stroke="#4dabf7" strokeWidth="2.5" strokeLinecap="round" fill="none"
        initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.2}} />
      {/* Running stitch row */}
      <motion.path d="M 10 75 Q 50 65, 90 75 T 170 75 T 270 75"
        stroke="#69db7c" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="8 5"
        initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:1.4,delay:0.2}} />
      {/* Satin stitch dots */}
      {Array.from({length:9},(_,i) => (
        <motion.circle key={i} cx={10+i*30} cy={92} r="3.5" fill="#ffd43b"
          initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:0.3,delay:i*0.07}} />
      ))}
    </svg>
  )
}

// Fabric patch for Projects
export function FabricPatch({ color = "#ff6b6b", size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true" style={{position:"absolute",top:-10,right:-10,opacity:0.7}}>
      <rect width="80" height="80" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5 4" rx="3" />
      {/* Diagonal stitches */}
      {[0,1,2,3].map(i => (
        <motion.line key={i} x1={8+i*18} y1={8} x2={8} y2={8+i*18}
          stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"
          initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}}
          transition={{duration:0.5,delay:i*0.1}} />
      ))}
      <motion.circle cx="40" cy="40" r="12" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 3"
        initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}} transition={{duration:0.8}} />
    </svg>
  )
}

// Stitched timeline knot for Achievements
export function TimelineKnot({ color = "#ffd43b", index = 0 }) {
  return (
    <motion.svg width="32" height="32" viewBox="0 0 32 32" style={{flexShrink:0}} aria-hidden="true"
      initial={{scale:0, rotate:-90}} whileInView={{scale:1, rotate:0}} viewport={{once:true}}
      transition={{duration:0.5, delay:index*0.15, type:"spring", stiffness:200}}>
      <circle cx="16" cy="16" r="10" fill="none" stroke={color} strokeWidth="2" strokeDasharray="5 3" />
      <circle cx="16" cy="16" r="4" fill={color} />
      <motion.circle cx="16" cy="16" r="7" fill="none" stroke={color} strokeWidth="1" opacity="0.4"
        animate={{scale:[1,1.4,1], opacity:[0.4,0,0.4]}}
        transition={{duration:2.5, repeat:Infinity, delay:index*0.3}} />
    </motion.svg>
  )
}

// Abstract thread patterns for Interests
export function ThreadPattern({ color = "#4dabf7", width = 160, height = 60, delay = 0 }) {
  return (
    <svg width={width} height={height} viewBox={"0 0 " + width + " " + height} style={{position:"absolute",opacity:0.25,pointerEvents:"none"}} aria-hidden="true">
      <motion.path
        d={"M 10 " + height/2 + " C " + width*0.2 + " 10, " + width*0.4 + " " + (height-10) + ", " + width*0.5 + " " + height/2 + " S " + width*0.8 + " 10, " + (width-10) + " " + height/2}
        fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4"
        initial={{pathLength:0}} whileInView={{pathLength:1}} viewport={{once:true}}
        transition={{duration:1.5, delay}} />
    </svg>
  )
}