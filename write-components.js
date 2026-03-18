const fs = require("fs");

// 1. YarnBall - scroll reactive
fs.writeFileSync("src/components/YarnBall.jsx", `
import React, { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, MeshWobbleMaterial, OrbitControls } from "@react-three/drei"

function ScrollBall({ scrollY }) {
  const mesh = useRef()
  const trail = useRef()
  useFrame(() => {
    if (!mesh.current) return
    const t = scrollY.current / Math.max(1, document.body.scrollHeight - window.innerHeight)
    mesh.current.rotation.z = t * Math.PI * 8
    mesh.current.rotation.x = t * Math.PI * 4
    const s = Math.max(0.25, 1.4 - t * 1.1)
    mesh.current.scale.setScalar(s)
    if (trail.current) trail.current.scale.y = Math.min(1, t * 3)
  })
  return (
    <>
      <mesh ref={mesh}>
        <Sphere args={[1.4, 64, 64]}>
          <MeshWobbleMaterial color="#ff6b6b" factor={0.35} speed={1.5} roughness={0.5} metalness={0.1} />
        </Sphere>
      </mesh>
      <mesh ref={trail} position={[0, -3, 0]} scale={[1, 0, 1]}>
        <cylinderGeometry args={[0.025, 0.025, 6, 8]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
    </>
  )
}

export default function YarnBall({ size = 320 }) {
  const scrollY = useRef(0)
  useEffect(() => {
    const fn = () => { scrollY.current = window.scrollY }
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <div style={{ width: size, height: size, margin: "0 auto" }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <pointLight position={[-3, -2, -2]} color="#4dabf7" intensity={0.5} />
        <ScrollBall scrollY={scrollY} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  )
}
`, {encoding:"utf8"});

console.log("YarnBall written");
