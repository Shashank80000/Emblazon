import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Home = () => {
  const [introProgress, setIntroProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  const targetDate = new Date(2026, 2, 14, 0, 0, 0)

  useEffect(() => {
    // Disable parallax effects on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      return; // Skip mouse tracking on mobile
    }

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

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
    const updateProgress = () => {
      const scrollY = window.scrollY
      const view = Math.max(1, window.innerHeight)
      const progress = clamp(scrollY / view, 0, 1)
      setIntroProgress(progress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = Math.max(0, targetDate.getTime() - now.getTime())
      const totalSeconds = Math.floor(diff / 1000)
      const days = Math.floor(totalSeconds / 86400)
      const hours = Math.floor((totalSeconds % 86400) / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      setTimeLeft({
        days,
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      })
    }

    updateCountdown()
    const timer = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="section-home home-scroll"
      style={{ '--intro-progress': introProgress }}
    >
      <div className="home-intro-panel">
        <div className="home-intro">
          <p className="home-kicker">2-DAY COLLEGE CULTURAL FESTIVAL</p>
          <h1 className="home-title">EMBLAZON</h1>
          <p className="home-year">2026</p>
          <p className="home-tagline">Ignite The Spirit</p>
          <div className="home-countdown" aria-label="Countdown to Emblazon">
            <div className="home-countdown-item">
              <div className="home-countdown-value">{timeLeft.days}</div>
              <div className="home-countdown-label">DAYS</div>
            </div>
            <div className="home-countdown-item">
              <div className="home-countdown-value">{timeLeft.hours}</div>
              <div className="home-countdown-label">HOURS</div>
            </div>
            <div className="home-countdown-item">
              <div className="home-countdown-value">{timeLeft.minutes}</div>
              <div className="home-countdown-label">MINUTES</div>
            </div>
            <div className="home-countdown-item">
              <div className="home-countdown-value">{timeLeft.seconds}</div>
              <div className="home-countdown-label">SECONDS</div>
            </div>
          </div>
          <div className="home-actions">
            <a className="home-btn home-btn-primary" href="#register">
              Register Now
            </a>
            <Link className="home-btn home-btn-ghost" to="/events#events">
              Explore Events
            </Link>
          </div>
          <div className="home-scroll-cue" aria-hidden="true">
            <span className="home-scroll-arrow">v</span>
          </div>
        </div>
      </div>
      <div className="home-logo-panel">
        <img src={logo} alt="Emblazon" className="home-logo" />
        <p className="home-soon">Cultural fest Coming Soon...</p>
      </div>
      <div className="home-video-panel">
        <h2 className="home-video-title">Glimpses of the Past</h2>
        <div className="home-video-frame">
          <iframe
            src="https://www.youtube.com/embed/0z_IbnQVHQI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=0z_IbnQVHQI"
            title="Glimpses of the Past"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Home