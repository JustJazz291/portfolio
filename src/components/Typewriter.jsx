import React, { useEffect, useState } from "react"

export default function Typewriter({ lines = [], speed = 48 }) {
  const [displayed, setDisplayed] = useState([""])
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (lineIdx >= lines.length) { setDone(true); return }
    const line = lines[lineIdx]
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[lineIdx] = line.slice(0, charIdx + 1)
          return next
        })
        setCharIdx(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setLineIdx(l => l + 1)
        setCharIdx(0)
        setDisplayed(prev => [...prev, ""])
      }, 500)
      return () => clearTimeout(t)
    }
  }, [charIdx, lineIdx, lines, speed, done])

  return (
    <div style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic" }}>
      {displayed.map((line, i) => (
        <p key={i} style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: i === 0 ? "#1a1a2e" : "#666", marginBottom: 8, minHeight: "1.8em" }}>
          {line}
          {i === displayed.length - 1 && !done && (
            <span style={{ borderRight: "2px solid #ff6b6b", marginLeft: 2, animation: "blink 0.8s step-end infinite" }} />
          )}
        </p>
      ))}
    </div>
  )
}