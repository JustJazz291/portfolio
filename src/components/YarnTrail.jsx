import React, { useEffect, useRef, useState } from "react"

export default function YarnTrail() {
  const canvasRef = useRef(null)
  const scrollRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.body.scrollHeight
    }
    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("scroll", () => { scrollRef.current = window.scrollY }, { passive: true })

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      // Draw wavy thread path connecting all sections
      const segments = 80
      ctx.beginPath()
      for (let i = 0; i <= segments; i++) {
        const t = i / segments
        const x = W * 0.5 + Math.sin(t * Math.PI * 6) * W * 0.28 + Math.sin(t * Math.PI * 11) * W * 0.07
        const y = t * H
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = "#ff6b6b"
      ctx.lineWidth = 2
      ctx.setLineDash([6, 5])
      ctx.globalAlpha = 0.22
      ctx.stroke()

      // Second thread
      ctx.beginPath()
      for (let i = 0; i <= segments; i++) {
        const t = i / segments
        const x = W * 0.5 + Math.sin(t * Math.PI * 5 + 1.2) * W * 0.22 + Math.cos(t * Math.PI * 9) * W * 0.06
        const y = t * H
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = "#4dabf7"
      ctx.lineWidth = 1.5
      ctx.setLineDash([4, 7])
      ctx.globalAlpha = 0.15
      ctx.stroke()

      ctx.globalAlpha = 1
      ctx.setLineDash([])

      // Yarn ball position follows scroll
      const scrollProgress = scrollRef.current / Math.max(1, document.body.scrollHeight - window.innerHeight)
      const ballT = scrollProgress
      const ballX = W * 0.5 + Math.sin(ballT * Math.PI * 6) * W * 0.28 + Math.sin(ballT * Math.PI * 11) * W * 0.07
      const ballY = ballT * H

      // Draw yarn ball (2D circles with wound thread look)
      const r = 22
      const cx = ballX
      const cy = ballY

      // Outer circle
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fillStyle = "#ff6b6b"
      ctx.globalAlpha = 0.92
      ctx.fill()

      // Wound thread lines on ball
      ctx.globalAlpha = 0.55
      ctx.strokeStyle = "#c0392b"
      ctx.lineWidth = 1.2
      ctx.setLineDash([])
      for (let a = 0; a < 5; a++) {
        const angle = (a / 5) * Math.PI + scrollProgress * Math.PI * 4
        ctx.beginPath()
        ctx.ellipse(cx, cy, r * 0.9, r * 0.3, angle, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Highlight
      ctx.beginPath()
      ctx.arc(cx - r * 0.3, cy - r * 0.3, r * 0.25, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(255,255,255,0.35)"
      ctx.globalAlpha = 1
      ctx.fill()

      // Needle
      const needleAngle = Math.sin(scrollProgress * Math.PI * 8) * 0.5 - 0.8
      const nx = cx + Math.cos(needleAngle) * (r + 4)
      const ny = cy + Math.sin(needleAngle) * (r + 4)
      const needleLen = 38

      ctx.save()
      ctx.translate(nx, ny)
      ctx.rotate(needleAngle + Math.PI * 0.5)

      // Needle body
      ctx.beginPath()
      ctx.roundRect(-1.5, -needleLen, 3, needleLen - 6, 1)
      ctx.fillStyle = "#2c2c54"
      ctx.globalAlpha = 0.9
      ctx.fill()

      // Needle tip
      ctx.beginPath()
      ctx.moveTo(-1.5, -6)
      ctx.lineTo(1.5, -6)
      ctx.lineTo(0, needleLen * 0.18)
      ctx.closePath()
      ctx.fillStyle = "#2c2c54"
      ctx.fill()

      // Eye of needle
      ctx.beginPath()
      ctx.ellipse(0, -needleLen + 5, 2, 3.5, 0, 0, Math.PI * 2)
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.8
      ctx.stroke()

      // Thread from needle eye
      ctx.beginPath()
      ctx.moveTo(0, -needleLen + 5)
      ctx.quadraticCurveTo(8, -needleLen - 10, 14, -needleLen - 4)
      ctx.strokeStyle = "#ffd43b"
      ctx.lineWidth = 1.2
      ctx.setLineDash([3, 2])
      ctx.globalAlpha = 0.8
      ctx.stroke()

      ctx.restore()
      ctx.setLineDash([])
      ctx.globalAlpha = 1

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", top: 0, left: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0
    }} aria-hidden="true" />
  )
}