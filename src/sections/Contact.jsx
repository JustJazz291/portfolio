import React, { useEffect, useRef } from 'react'
import { useScrollReveal } from '../components/useScrollReveal'

function HeartSignature() {
  const pathRef = useRef(null)
  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        path.style.transition = 'stroke-dashoffset 2.5s ease 0.3s'
        path.style.strokeDashoffset = 0
        observer.unobserve(path)
      }
    }, { threshold: 0.3 })
    observer.observe(path)
    return () => observer.disconnect()
  }, [])
  return (
    <svg width="120" height="110" viewBox="0 0 120 110" style={{ display: 'block', margin: '0 auto 24px' }} aria-hidden="true">
      <path ref={pathRef}
        d="M 60 90 C 20 65, 5 45, 5 30 C 5 15, 15 5, 30 5 C 42 5, 52 12, 60 22 C 68 12, 78 5, 90 5 C 105 5, 115 15, 115 30 C 115 45, 100 65, 60 90 Z"
        fill="none" stroke="#ff6b6b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <svg width="100%" height="60" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} aria-hidden="true">
        <path d="M 0 40 C 150 10, 300 60, 450 30 S 700 0, 900 40 S 1100 70, 1300 40"
          fill="none" stroke="#4dabf7" strokeWidth="1.5" strokeDasharray="6 5" strokeLinecap="round" />
      </svg>
      <div ref={ref} className="section-reveal" style={{ maxWidth: 680, margin: '0 auto' }}>
        <p className="thread-label">final stitch</p>
        <h2 className="section-title">Let's Connect Threads</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: 48 }}>
          Let's connect and weave something meaningful together.
        </p>
        <div style={{
          background: 'white', border: '2px solid #ff6b6b', borderRadius: 4,
          padding: '40px', boxShadow: '4px 4px 0 #dcdcdc', position: 'relative', marginBottom: 60
        }}>
          <div style={{ position: 'absolute', inset: 6, border: '1px dashed #ff6b6b', borderRadius: 2, opacity: 0.35, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
            <a href="mailto:jashete_b24@ee.vjti.ac.in" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Email</span>
              jashete_b24@ee.vjti.ac.in
            </a>
            <a href="tel:+918104448175" style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ color: '#4dabf7', fontWeight: 'bold' }}>Phone</span>
              +91 8104448175
            </a>
            <a href="https://www.linkedin.com/in/janhavi-shete-54880a312" target="_blank" rel="noopener noreferrer"
              style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ color: '#69db7c', fontWeight: 'bold' }}>LinkedIn</span>
              janhavi-shete-54880a312
            </a>
            <a href="https://github.com/JustJazz291" target="_blank" rel="noopener noreferrer"
              style={{ color: '#333', textDecoration: 'none', fontSize: '1rem', display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ color: '#ffd43b', fontWeight: 'bold' }}>GitHub</span>
              JustJazz291
            </a>
          </div>
        </div>
        <HeartSignature />
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: '#ff6b6b', letterSpacing: 2 }}>
          Let's connect.
        </p>
        <p style={{ marginTop: 48, fontSize: '0.75rem', color: '#aaa', letterSpacing: 2 }}>
          handcrafted with care by Janhavi
        </p>
      </div>
    </section>
  )
}