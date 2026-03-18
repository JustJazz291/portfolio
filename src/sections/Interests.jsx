import React from 'react'
import { useScrollReveal } from '../components/useScrollReveal'

const items = [
  { icon: '*', text: 'Knitting and creative design', color: '#ff6b6b' },
  { icon: 'o', text: 'Exploring emerging technologies', color: '#4dabf7' },
  { icon: '+', text: 'Open-source collaboration', color: '#69db7c' },
  { icon: '#', text: 'Building hardware and software systems', color: '#ffd43b' },
  { icon: '~', text: 'Continuous learning', color: '#ff6b6b' }
]

function InterestItem({ item, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="section-reveal" style={{
      transitionDelay: (index * 0.12) + 's',
      display: 'flex', alignItems: 'center', gap: 20,
      background: 'white', border: '2px solid ' + item.color,
      borderRadius: 4, padding: '16px 24px',
      boxShadow: '3px 3px 0 #dcdcdc'
    }}>
      <span style={{ fontSize: '1.4rem', color: item.color, fontWeight: 'bold', width: 28, textAlign: 'center' }}>{item.icon}</span>
      <p style={{ fontSize: '1rem', color: '#333' }}>{item.text}</p>
    </div>
  )
}

export default function Interests() {
  const titleRef = useScrollReveal()
  return (
    <section id="interests" style={{ position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="50" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} aria-hidden="true">
        <path d="M 0 25 C 100 5, 200 45, 300 25 S 500 5, 600 25 S 800 45, 900 25 S 1100 5, 1200 25"
          fill="none" stroke="#69db7c" strokeWidth="1.5" strokeDasharray="5 6" strokeLinecap="round" />
      </svg>
      <div ref={titleRef} className="section-reveal" style={{ maxWidth: 700, margin: '0 auto' }}>
        <p className="thread-label">chapter 05</p>
        <h2 className="section-title">Beyond Threads</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {items.map((item, i) => <InterestItem key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}