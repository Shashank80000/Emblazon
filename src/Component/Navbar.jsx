import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
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
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="brand">
        <Link to="/" onClick={closeMenu} aria-label="Go to homepage">
          <img src={logo} alt="Emblazon Logo" className="brand-logo" />
        </Link>
      </div>

      <button
        className={open ? 'nav-toggle open' : 'nav-toggle'}
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <nav
        id="primary-navigation"
        className={open ? 'site-nav open' : 'site-nav'}
        aria-label="Primary Navigation"
      >
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar