import React from 'react'
import { useScrollReveal } from '../components/useScrollReveal'

const projects = [
  {
    title: 'ChainSentinel AI',
    subtitle: 'Web3 Security Platform',
    color: '#ff6b6b',
    desc: ['AI-powered platform detecting smart contract threats and phishing in real time', 'Uses machine learning for anomaly detection and risk scoring']
  },
  {
    title: 'Hand Gesture Controlled Wheelchair',
    subtitle: 'Embedded Systems',
    color: '#4dabf7',
    desc: ['Gesture-based control system using MPU6050 and NRF24L01', 'Real-time embedded system with wireless communication']
  },
  {
    title: 'Transformerless Power Supply',
    subtitle: 'KiCad PCB Design',
    color: '#69db7c',
    desc: ['Designed compact transformerless circuit', 'Developed complete PCB-ready design']
  },
  {
    title: 'Automatic Dual Work Screwdriver',
    subtitle: 'Electromechanical Design',
    color: '#ffd43b',
    desc: ['Electromechanical screwdriver with bidirectional control', 'DPDT-based polarity reversal system']
  }
]

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="section-reveal patch-card" style={{
      borderColor: project.color, transitionDelay: (index * 0.15) + 's'
    }}>
      <div style={{ position: 'absolute', inset: 4, border: '1px dashed ' + project.color, borderRadius: 2, opacity: 0.4, pointerEvents: 'none' }} />
      <p style={{ fontSize: '0.7rem', letterSpacing: 3, textTransform: 'uppercase', color: project.color, marginBottom: 6 }}>
        {project.subtitle}
      </p>
      <h3 style={{ fontSize: '1.2rem', marginBottom: 14, color: '#1a1a2e' }}>{project.title}</h3>
      <ul style={{ paddingLeft: 18, color: '#555', lineHeight: 1.8 }}>
        {project.desc.map((d, i) => <li key={i} style={{ fontSize: '0.9rem' }}>{d}</li>)}
      </ul>
      <div style={{ marginTop: 16, width: 40, height: 3, background: 'linear-gradient(90deg, ' + project.color + ', transparent)', borderRadius: 2 }} />
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()
  return (
    <section id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
      <svg width="300" height="80" style={{ position: 'absolute', top: 0, right: '5%', pointerEvents: 'none' }} aria-hidden="true">
        <path d="M 300 0 C 240 20, 180 50, 150 40 S 80 10, 0 60"
          fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="7 5" strokeLinecap="round" />
      </svg>
      <div ref={titleRef} className="section-reveal" style={{ maxWidth: 960, margin: '0 auto' }}>
        <p className="thread-label">chapter 03</p>
        <h2 className="section-title">My Fabric</h2>
      </div>
      <div style={{
        maxWidth: 960, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28
      }}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </section>
  )
}