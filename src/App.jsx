import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import OrganisingCommitee from './Component/OrganisingCommitee'
import Event from './Component/Event'

import SponsorSection from './Component/oursponser'
import Gallary from './Component/Gallary'
import './App.css'

function App() {
  const location = useLocation()

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

  return (
    <div className="app-shell">
      <Navbar />
      <main className="content-stack">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<OrganisingCommitee />} />
          <Route path="/events" element={<Event />} />
          <Route path="/sponsors" element={<SponsorSection />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
