import React, { useEffect } from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth
      const h = window.innerHeight
      const x = (e.clientX / w) * 2 - 1 // -1 .. 1
      const y = (e.clientY / h) * 2 - 1 // -1 .. 1

      // background position around center
      const bgX = 50 + x * 6 // percent
      const bgY = 30 + y * 6

      // tilt values for 3D effect
      const tiltX = (-y * 4).toFixed(2) // deg
      const tiltY = (x * 6).toFixed(2)

      // subtle foreground parallax
      const depth = (Math.abs(x) + Math.abs(y)) * 6 // px

      document.body.style.setProperty('--bg-pos-x', `${bgX}%`)
      document.body.style.setProperty('--bg-pos-y', `${bgY}%`)
      document.body.style.setProperty('--tilt-x', `${tiltX}deg`)
      document.body.style.setProperty('--tilt-y', `${tiltY}deg`)
      document.body.style.setProperty('--parallax-z', `${depth}px`)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', (ev) => {
      if (ev.touches && ev.touches[0]) onMove(ev.touches[0])
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="home" className="section-home">
      <img src={logo} alt="Emblazon" className="home-logo" />
      <p className="home-soon">Cultural fest Coming Soon</p>
    </section>
  )
}

export default Home