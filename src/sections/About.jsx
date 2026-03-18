import React from 'react'
import { useScrollReveal } from '../components/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="80" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} aria-hidden="true">
        <path d="M 50% 0 C 48% 30, 52% 50, 50% 80"
          fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round" />
      </svg>
      <div ref={ref} className="section-reveal" style={{ maxWidth: 760, margin: '0 auto', paddingTop: '40px' }}>
        <p className="thread-label">chapter 01</p>
        <h2 className="section-title">My Pattern</h2>
        <div style={{
          background: 'white', border: '2px solid #69db7c', borderRadius: 4,
          padding: '36px', position: 'relative', boxShadow: '4px 4px 0 #dcdcdc'
        }}>
          <div style={{ position: 'absolute', inset: 6, border: '1px dashed #69db7c', borderRadius: 2, pointerEvents: 'none', opacity: 0.4 }} />
          <p style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#333', marginBottom: 16 }}>
            Hi, I am <strong>Janhavi Amit Shete</strong>, a Second-Year Electrical Engineering student at VJTI, Mumbai.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#333', marginBottom: 16 }}>
            I am deeply passionate about technology at the intersection of hardware and software, ranging from embedded systems and power electronics to modern web and AI-driven solutions.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#333', marginBottom: 16 }}>
            Currently, I am working on a Web3-based security intelligence platform while also pursuing a BS in Data Science from IIT Madras. Alongside, I actively explore simulation, system design, and real-world problem solving through hands-on projects.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#333', marginBottom: 16 }}>
            I enjoy contributing to open-source, experimenting with new technologies, and turning ideas into functional systems.
          </p>
          <p style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#333' }}>
            My goal is to grow into an engineer who builds impactful, intelligent, and scalable solutions that connect the physical and digital world.
          </p>
        </div>
      </div>
    </section>
  )
}