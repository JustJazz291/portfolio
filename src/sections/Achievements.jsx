import React from 'react'
import { useScrollReveal } from '../components/useScrollReveal'

const items = [
  { text: 'Finalist - IndiaAI Impact Gen-AI Hackathon (IISc and IBM)', color: '#ff6b6b' },
  { text: 'Trainee - EMC2 Lab (MATLAB/Simulink)', color: '#4dabf7' },
  { text: 'Trainee - C4GT SheCodes (IIITH)', color: '#69db7c' },
  { text: 'Simulink and Simscape Onramp - MathWorks', color: '#ffd43b' },
  { text: 'Basic MATLAB Skills - MathWorks', color: '#ff6b6b' },
  { text: 'Electronics Sector Member - VJTI', color: '#4dabf7' },
  { text: 'Former VJTI Racing Club Member', color: '#69db7c' }
]

function AchievementItem({ item, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="section-reveal" style={{
      transitionDelay: (index * 0.1) + 's',
      display: 'flex', alignItems: 'flex-start', gap: 16,
      padding: '16px 0', borderBottom: '1px dashed #dcdcdc'
    }}>
      <svg width="22" height="22" viewBox="0 0 22 22" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
        <circle cx="11" cy="11" r="5" fill="none" stroke={item.color} strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="11" cy="11" r="2" fill={item.color} />
      </svg>
      <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>{item.text}</p>
    </div>
  )
}

export default function Achievements() {
  const titleRef = useScrollReveal()
  return (
    <section id="achievements" style={{ position: 'relative', overflow: 'hidden' }}>
      <svg width="160" height="120" style={{ position: 'absolute', top: 20, left: '3%', pointerEvents: 'none', opacity: 0.5 }} aria-hidden="true">
        <path d="M 10 10 C 60 0, 150 40, 140 80 S 60 130, 20 110 S -10 60, 10 10"
          fill="none" stroke="#ffd43b" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
      </svg>
      <div ref={titleRef} className="section-reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
        <p className="thread-label">chapter 04</p>
        <h2 className="section-title">Milestones</h2>
        <div style={{
          background: 'white', border: '2px solid #ffd43b', borderRadius: 4,
          padding: '8px 32px 24px', boxShadow: '4px 4px 0 #dcdcdc', position: 'relative'
        }}>
          <div style={{ position: 'absolute', inset: 5, border: '1px dashed #ffd43b', borderRadius: 2, opacity: 0.35, pointerEvents: 'none' }} />
          {items.map((a, i) => <AchievementItem key={i} item={a} index={i} />)}
        </div>
      </div>
    </section>
  )
}