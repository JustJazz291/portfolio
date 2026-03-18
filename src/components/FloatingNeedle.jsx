import React, { useRef, useEffect, useState } from "react"

export default function FloatingNeedle() {
  const needleRef = useRef(null)
  const [pos, setPos] = useState({ x: 80, y: 200 })
  const scrollRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener("scroll", onScroll, { passive: true })

    const animate = () => {
      const t = scrollRef.current * 0.0015
      const x = 60 + Math.sin(t * 2.1) * 30
      const y = (scrollRef.current * 0.18) % window.innerHeight
      setPos({ x, y })
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const angle = Math.sin(scrollRef.current * 0.003) * 25 - 45

  return (
    <div ref={needleRef} style={{
      position: "fixed",
      left: pos.x + "px",
      top: pos.y + "px",
      pointerEvents: "none",
      zIndex: 10,
      transform: "rotate(" + angle + "deg)",
      transition: "top 0.1s linear",
      opacity: 0.75,
    }}>
      <svg width="12" height="80" viewBox="0 0 12 80" aria-hidden="true">
        {/* Needle body */}
        <rect x="5" y="0" width="2" height="65" rx="1" fill="#1a1a2e" />
        {/* Needle tip */}
        <polygon points="5,65 7,65 6,80" fill="#1a1a2e" />
        {/* Eye of needle */}
        <ellipse cx="6" cy="8" rx="2.5" ry="4" fill="none" stroke="#1a1a2e" strokeWidth="1.2" />
        {/* Thread through eye */}
        <path d="M 6 4 C 10 6, 14 2, 18 8 S 22 16, 16 18" fill="none" stroke="#ff6b6b" strokeWidth="1.2" strokeDasharray="3 2" strokeLinecap="round" />
      </svg>
    </div>
  )
}