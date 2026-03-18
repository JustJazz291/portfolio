import React, { useEffect, useRef } from 'react'

export default function Landing({ onEnter }) {
  const path1 = useRef(null)
  const path2 = useRef(null)
  const path3 = useRef(null)

  useEffect(() => {
    const paths = [path1.current, path2.current, path3.current]
    paths.forEach((p, i) => {
      if (!p) return
      const len = p.getTotalLength()
      p.style.strokeDasharray = len
      p.style.strokeDashoffset = len
      setTimeout(() => {
        p.style.transition = (1.8 + i * 0.4) + 's ease'
        p.style.strokeDashoffset = 0
      }, 300 + i * 200)
    })
  }, [])

  return (
    <section id="landing" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', position: 'relative',
      overflow: 'hidden', minHeight: '100vh'
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true">
        <path ref={path1}
          d="M -20 80 C 80 40, 200 120, 350 70 S 550 20, 700 90 S 900 150, 1100 80"
          fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="8 5" strokeLinecap="round" />
        <path ref={path2}
          d="M -20 200 C 100 160, 250 240, 420 190 S 650 130, 820 210 S 1000 270, 1200 200"
          fill="none" stroke="#4dabf7" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
        <path ref={path3}
          d="M 50 350 C 180 310, 320 390, 500 340 S 720 280, 900 360 S 1100 420, 1300 350"
          fill="none" stroke="#ffd43b" strokeWidth="1.5" strokeDasharray="4 8" strokeLinecap="round" />
      </svg>

      <div style={{ position: 'absolute', top: '10%', left: '8%', opacity: 0.12, fontSize: '5rem', userSelect: 'none' }}>
        yarn
      </div>
      <div style={{ position: 'absolute', bottom: '15%', right: '10%', opacity: 0.08, fontSize: '4rem', userSelect: 'none' }}>
        thread
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <p className="thread-label">a handmade story</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.15, marginBottom: '16px' }}>
          Every thread<br />tells a story.
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: '#666', marginBottom: '48px', fontStyle: 'italic' }}>
          Here's mine.
        </p>
        <button className="btn-stitch" onClick={onEnter}>
          Enter
        </button>
      </div>
    </section>
  )
}