import React from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.css'
import GooeyNav from './navanimation/GooeyNav'
import logo from '../assets/shreeNavlogo.png'

const links = [
  { label: 'HOME', href: '/' },
  { label: 'EVENTS', href: '/events' },
  { label: 'SPONSORS', href: '/sponsors' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'TEAM', href: '/committee' },
  { label: 'ABOUT', href: '/about' },
]

const Navbar = () => {
  const location = useLocation()
  const findInitialIndex = () => links.findIndex(link => link.href === location.pathname)
  const initialIndex = findInitialIndex() !== -1 ? findInitialIndex() : 0

  return (
    <header className="site-header">
      <div className="brand">
        <img src={logo} alt="Emblazon Logo" className="brand-logo" />
      </div>

      <div className="desktop-nav">
        <GooeyNav 
          items={links} 
          initialActiveIndex={initialIndex}
          animationTime={500}
          particleCount={12}
        />
      </div>
    </header>
  )
}

export default Navbar