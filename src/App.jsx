import React, { useState } from 'react'
import Landing from './sections/Landing'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Interests from './sections/Interests'
import Contact from './sections/Contact'
import './App.css'

export default function App() {
  const [entered, setEntered] = useState(false)

  const handleEnter = () => {
    setEntered(true)
    setTimeout(() => {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div>
      <Landing onEnter={handleEnter} />
      {entered && (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Interests />
          <Contact />
        </>
      )}
    </div>
  )
}