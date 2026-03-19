import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function WoundYarn({ scrollT = 0 }) {
  const groupRef = useRef()
  const linesRef = useRef([])

  // Generate wound thread paths on a sphere surface
  const { positions, colors } = useMemo(() => {
    const threadColors = ["#ff6b6b", "#ffd43b", "#4dabf7", "#69db7c", "#ff6b6b", "#ffd43b"]
    const allPositions = []
    const allColors = []

    // Create 6 wound threads at different angles
    for (let t = 0; t < 6; t++) {
      const pts = []
      const col = new THREE.Color(threadColors[t])
      const angleOffset = (t / 6) * Math.PI
      const tiltAngle = (t / 6) * Math.PI * 0.8

      for (let i = 0; i <= 120; i++) {
        const u = (i / 120) * Math.PI * 8 + angleOffset
        const v = (i / 120) * Math.PI
        const r = 1.38
        const x = r * Math.sin(v) * Math.cos(u + tiltAngle)
        const y = r * Math.cos(v)
        const z = r * Math.sin(v) * Math.sin(u + tiltAngle)
        pts.push(x, y, z)
        allColors.push(col.r, col.g, col.b)
      }
      allPositions.push(pts)
    }
    return { positions: allPositions, colors: allColors }
  }, [])

  const lineGeometries = useMemo(() =>
    positions.map(pts => {
      const geo = new THREE.BufferGeometry()
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3))
      return geo
    }), [positions])

  const threadColors = ["#ff6b6b", "#ffd43b", "#4dabf7", "#69db7c", "#ff6b6b", "#ffd43b"]

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.22 + scrollT * Math.PI * 3
      groupRef.current.rotation.x = Math.sin(t * 0.35) * 0.12
      groupRef.current.position.y = Math.sin(t * 0.55) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {lineGeometries.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color={threadColors[i]} linewidth={2} transparent opacity={0.85} />
        </line>
      ))}
      {/* Small core sphere so it looks wound */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#ff6b6b" roughness={1} metalness={0} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

// Hero yarn ball (large, static position)
export function HeroYarnBall() {
  return (
    <div style={{ width: 280, height: 280, margin: "0 auto", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 3.8], fov: 44 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 4]} intensity={0.8} />
        <pointLight position={[-3, -2, 2]} color="#ffd43b" intensity={0.4} />
        <WoundYarn />
      </Canvas>
      {/* Thread coming out */}
      <svg style={{ position:"absolute", bottom:-36, left:"50%", transform:"translateX(-50%)", overflow:"visible", pointerEvents:"none" }} width="4" height="40" aria-hidden="true">
        <path d="M 2 0 C 4 12, 0 24, 2 40" fill="none" stroke="#ff6b6b" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 4" />
      </svg>
    </div>
  )
}

// Scroll yarn ball (small, travels across page)
export function ScrollYarnMesh({ scrollT = 0 }) {
  return <WoundYarn scrollT={scrollT} />
}

export default HeroYarnBall