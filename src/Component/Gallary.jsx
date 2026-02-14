import React, { useState, useEffect } from 'react'
import DomeGallery from './DomeGallery'
import './Gallary.css'
import galaxy from '../assets/shashankGalaxy.jpg'
import logo from '../assets/logo.png'
import shashank from '../assets/teamsimage/shashank.jpeg'
import shree from '../assets/teamsimage/shreebhagan.jpeg'
import img1 from '../assets/gallery/1.jpeg'
import img4 from '../assets/gallery/4.jpeg'
import img5 from '../assets/gallery/5.jpeg'
import img7 from '../assets/gallery/7.jpeg'
import img8 from '../assets/gallery/8.jpeg'
import img9 from '../assets/gallery/9.jpeg'
import img10 from '../assets/gallery/10.jpeg'
import img11 from '../assets/gallery/11.jpeg'
import imgWhatsApp from '../assets/gallery/WhatsApp Image 2026-02-14 at 2.00.06 PM.jpeg'
import imgWhatsApp2 from '../assets/gallery/WhatsApp Image 2026-02-14 at 2.33.56 PM.jpeg'
import imgWhatsApp3 from '../assets/gallery/WhatsApp Image 2026-02-14 at 2.33.57 PM.jpeg'
import imgWhatsApp4 from '../assets/gallery/WhatsApp Image 2026-02-14 at 2.33.57 PM (1).jpeg'

const domeImages = [
  { src: galaxy, alt: 'Main Stage Glow' },
  { src: shashank, alt: 'Crew Moments' },
  { src: shree, alt: 'Backstage Energy' },
  { src: logo, alt: 'Festival Identity' },
  { src: img1, alt: 'Festival Moment 1' },
  { src: img4, alt: 'Festival Moment 2' },
  { src: img5, alt: 'Festival Moment 3' },
  { src: img7, alt: 'Festival Moment 4' },
  { src: imgWhatsApp, alt: 'Event Highlight' },
]

const gridImages = [
  { src: img1, alt: 'Event 1' },
  { src: img4, alt: 'Event 2' },
  { src: img5, alt: 'Event 3' },
  { src: img7, alt: 'Event 4' },
  { src: img8, alt: 'Event 5' },
  { src: img9, alt: 'Event 6' },
  { src: img10, alt: 'Event 7' },
  { src: img11, alt: 'Event 8' },
  { src: imgWhatsApp, alt: 'Event 9' },
  { src: imgWhatsApp2, alt: 'Event 10' },
  { src: imgWhatsApp3, alt: 'Event 11' },
  { src: imgWhatsApp4, alt: 'Event 12' },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [domeOpacity, setDomeOpacity] = useState(1)
  const [domeScale, setDomeScale] = useState(1)
  const [domeSizing, setDomeSizing] = useState({
    minRadius: 700,
    maxRadius: 1200,
    fit: 0.9
  })

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      // When at top, dome is fully visible (opacity 1, scale 1)
      // As you scroll down, dome fades and shrinks
      // After scrolling past 50vh, dome is hidden (opacity 0, scale 0.3)
      
      const scrollY = window.scrollY
      const triggerPoint = window.innerHeight * 0.5 // Start effect at 50vh scroll
      const hidePoint = window.innerHeight * 1.2 // Completely hidden at 120vh scroll

      if (scrollY < triggerPoint) {
        // Before trigger point - dome fully visible
        setDomeOpacity(1)
        setDomeScale(1)
      } else if (scrollY > hidePoint) {
        // After hide point - dome completely hidden
        setDomeOpacity(0)
        setDomeScale(0.3)
      } else {
        // Between trigger and hide - animate
        const progress = (scrollY - triggerPoint) / (hidePoint - triggerPoint)
        setDomeOpacity(1 - progress)
        setDomeScale(1 - progress * 0.7) // Scale from 1 to 0.3
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateDomeSizing = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const minDim = Math.min(width, height)
      const base = clamp(minDim, 320, 1200)
      const minRadius = Math.round(clamp(base * 0.55, 300, 820))
      const maxRadius = Math.round(clamp(base * 1.0, 440, 1300))
      const fit = width < 600 ? 0.72 : width < 900 ? 0.82 : 0.9

      setDomeSizing({ minRadius, maxRadius, fit })
    }

    updateDomeSizing()
    window.addEventListener('resize', updateDomeSizing)
    return () => window.removeEventListener('resize', updateDomeSizing)
  }, [])

  return (
    <>
      {/* Dome Gallery Section - Fixed */}
      <section 
        id="gallery" 
        className="section section-gallery"
        style={{
          opacity: domeOpacity,
          transform: `scale(${domeScale})`,
          transition: 'opacity 0.1s ease, transform 0.1s ease',
          pointerEvents: domeOpacity < 0.1 ? 'none' : 'auto'
        }}
      >
        <div className="gallery-hero">
          <h1 className="gallery-title">Glimpse of Emblazon</h1>
        </div>
        <div className="dome-gallery-shell">
          <DomeGallery
            images={domeImages}
            fit={domeSizing.fit}
            minRadius={domeSizing.minRadius}
            maxRadius={domeSizing.maxRadius}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotate
            autoRotateSpeed={5}
          />
        </div>
      </section>

      {/* Grid Gallery Section - Scrollable */}
      <section className="gallery-grid-wrapper">
        <div className="gallery-grid-section">
          <h2 className="gallery-section-title">Featured Moments</h2>
          <div className="gallery-grid">
            {gridImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-grid-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} className="gallery-grid-image" />
                <div className="gallery-grid-overlay">
                  <span className="gallery-zoom-icon">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="gallery-lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="gallery-lightbox-close">✕</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Gallary