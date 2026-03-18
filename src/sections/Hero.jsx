import React, { Suspense } from 'react'
import YarnBall from '../components/YarnBall'
import { useScrollReveal } from '../components/useScrollReveal'

export default function Hero() {
  const ref = useScrollReveal()
  return (
    <section id="hero" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center', position: 'relative'
    }}>
      <div ref={ref} className="section-reveal" style={{ width: '100%' }}>
        <Suspense fallback={
          <div style={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#ff6b6b' }}>
            Loading...
          </div>
        }>
          <YarnBall size={320} />
        </Suspense>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginTop: '32px', marginBottom: '16px' }}>
          Janhavi Amit Shete
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#555', fontStyle: 'italic', maxWidth: 500, margin: '0 auto 40px' }}>
          Connecting threads of code and creativity
        </p>
        <svg width="4" height="100" style={{ display: 'block', margin: '0 auto', overflow: 'visible' }} aria-hidden="true">
          <path className="draw-down-path"
            d="M 2 0 C 5 25, -1 50, 2 75 S 6 90, 2 100"
            fill="none" stroke="#ff6b6b" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
}