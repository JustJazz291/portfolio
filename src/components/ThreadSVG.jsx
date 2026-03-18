import React, { useEffect, useRef } from 'react'
export default function ThreadSVG({ color = '#ff6b6b', d, width = 400, height = 120, delay = 0 }) {
  const pathRef = useRef(null)
  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        path.style.transition = 'stroke-dashoffset 2s ease ' + delay + 's'
        path.style.strokeDashoffset = 0
        observer.unobserve(path)
      }
    }, { threshold: 0.1 })
    observer.observe(path)
    return () => observer.disconnect()
  }, [delay])
  return (
    <svg width={width} height={height} viewBox={'0 0 ' + width + ' ' + height}
      style={{ overflow: 'visible', position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
      <path ref={pathRef} d={d} fill="none" stroke={color} strokeWidth="2.5"
        strokeDasharray="6 4" strokeLinecap="round" />
    </svg>
  )
}