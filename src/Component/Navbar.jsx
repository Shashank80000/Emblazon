import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/shreeNavlogo.png'

const links = [
  { label: 'HOME', to: '/' },
  { label: 'EVENTS', to: '/events' },
  { label: 'SPONSORS', to: '/sponsors' },
  { label: 'GALLERY', to: '/gallery' },
  { label: 'TEAM', to: '/committee' },
  { label: 'ABOUT', to: '/about' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* Mobile menu backdrop */}
      {open && (
        <div
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      
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
                  to={link.to}
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
    </>
  )
}

export default Navbar