import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import OrganisingCommitee from './Component/OrganisingCommitee'
import Event from './Component/Event'
import About from './Component/About'
import SparkleCursor from './Component/SparkleCursor'
import StartAnimation from './Component/StartAnimation'
import SponsorSection from './Component/oursponser'
import Gallary from './Component/Gallary'
import Galaxy from './Component/Galaxy'
import './App.css'


function App() {
  const location = useLocation()
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const body = document.body
    const className = 'home-background'
    if (location.pathname === '/') {
      body.classList.add(className)
    } else {
      body.classList.remove(className)
    }

    return () => body.classList.remove(className)
  }, [location.pathname])

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  return (
    <div className={`app-shell ${animationComplete ? 'animation-complete' : 'animation-running'}`}>
      <Galaxy />
      {!animationComplete && <StartAnimation onComplete={handleAnimationComplete} />}
      <SparkleCursor />
      <Navbar />
      <main className="content-stack">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<OrganisingCommitee />} />
          <Route path="/events" element={<Event />} />
          <Route path="/sponsors" element={<SponsorSection />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />

        </Routes>
      </main>
      <footer className="site-footer">
        <p>Designed and Developed by Student of HMRITM with ❤️ for Emblazon 2026</p>
      </footer>
      <div className="corner-social" aria-label="Social links">
        <a
          className="corner-social-link"
          href="https://www.linkedin.com/in/shashank-pandey-2a3724291/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3-1.9 0-2.2 1.5-2.2 2.9v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6zM5.1 7.4c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1 0 1.2-1 2.1-2.1 2.1zm-1.8 13h3.6V9H3.3v11.4z" />
          </svg>
        </a>
        <a
          className="corner-social-link"
          href="https://instagram.com/shashankpandey4730"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram profile"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.6a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zm6-7.7a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
            <path d="M16.6 2H7.4A5.4 5.4 0 0 0 2 7.4v9.2A5.4 5.4 0 0 0 7.4 22h9.2a5.4 5.4 0 0 0 5.4-5.4V7.4A5.4 5.4 0 0 0 16.6 2zm3.6 14.6a3.6 3.6 0 0 1-3.6 3.6H7.4a3.6 3.6 0 0 1-3.6-3.6V7.4a3.6 3.6 0 0 1 3.6-3.6h9.2a3.6 3.6 0 0 1 3.6 3.6v9.2z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App
