import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useVelocity } from 'framer-motion'
import DomeGallery from './DomeGallery'
import './Gallary.css'

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

  { src: img1, alt: 'Festival Moment 1' },
  { src: img4, alt: 'Festival Moment 2' },
  { src: img5, alt: 'Festival Moment 3' },
  { src: img7, alt: 'Festival Moment 4' },
  { src: imgWhatsApp, alt: 'Event Highlight' },
   { src: img8, alt: 'Festival Moment 5' },
    { src: img9, alt: 'Festival Moment 6' },
     { src: img10, alt: 'Festival Moment 7' },
      { src: img11, alt: 'Festival Moment 8' },
      



]

const scrollItems = [
  { id: 1, color: '#ffb200', label: 'Neon Carnival', image: img1 },
  { id: 2, color: '#ff6a00', label: 'City Lights', image: img4 },
  { id: 3, color: '#ff006e', label: 'Rhythm Rush', image: img5 },
  { id: 4, color: '#3a86ff', label: 'Stage Sparks', image: img7 },
  { id: 5, color: '#00d4ff', label: 'Afterglow', image: img8 },
  { id: 6, color: '#00f5d4', label: 'Encore Energy', image: img9 },
  { id: 7, color: '#6a4c93', label: 'Neon Pulse', image: img10 },
  { id: 8, color: '#f72585', label: 'Crowd Wave', image: img11 },
  { id: 9, color: '#ffd166', label: 'Golden Hour', image: imgWhatsApp2 },
  { id: 10, color: '#8ecae6', label: 'Spotlight', image: imgWhatsApp3 },
  { id: 11, color: '#ff9f1c', label: 'Festival Glow', image: imgWhatsApp4 },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const DESKTOP_ITEM_WIDTH = 400
const DESKTOP_GAP = 30
const MOBILE_ITEM_WIDTH = 280
const MOBILE_GAP = 15

const Gallary = () => {
  const containerRef = useRef(null)
  const thumbRef = useRef(null)
  const dragX = useMotionValue(0)
  const [itemMetrics, setItemMetrics] = useState({
    width: DESKTOP_ITEM_WIDTH,
    gap: DESKTOP_GAP
  })
  const [domeSizing, setDomeSizing] = useState({
    minRadius: 700,
    maxRadius: 1200,
    fit: 0.9
  })
  const [constraintsX, setConstraintsX] = useState(-1000)

  useEffect(() => {
    const updateItemMetrics = () => {
      const isMobile = window.innerWidth <= 600
      setItemMetrics({
        width: isMobile ? MOBILE_ITEM_WIDTH : DESKTOP_ITEM_WIDTH,
        gap: isMobile ? MOBILE_GAP : DESKTOP_GAP
      })
    }

    updateItemMetrics()
    window.addEventListener('resize', updateItemMetrics)
    return () => window.removeEventListener('resize', updateItemMetrics)
  }, [])

  useEffect(() => {
    const totalDistance = (scrollItems.length - 1) * (itemMetrics.width + itemMetrics.gap)
    setConstraintsX(-totalDistance)
  }, [itemMetrics])

  useEffect(() => {
    const updateDomeSizing = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const minDim = Math.min(width, height)
      const base = clamp(minDim, 320, 1200)
      const minRadius = Math.round(clamp(base * 0.75, 400, 820))
      const maxRadius = Math.round(clamp(base * 1.2, 520, 1300))
      const fit = width < 600 ? 0.95 : width < 900 ? 0.92 : 0.9

      setDomeSizing({ minRadius, maxRadius, fit })
    }

    updateDomeSizing()
    window.addEventListener('resize', updateDomeSizing)
    return () => window.removeEventListener('resize', updateDomeSizing)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const totalDistance = (scrollItems.length - 1) * (itemMetrics.width + itemMetrics.gap)
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <>
      <section id="gallery" className="section section-gallery">
        <div className="gallery-scroll-root">
          <section className="gallery-scroll-intro">
            <p className="gallery-kicker">Emblazon Gallery</p>
            <h1 className="gallery-impact">Festival Nights</h1>
          </section>

          <div ref={containerRef} className="gallery-scroll-container">
            <div className="gallery-sticky-wrapper">
              <motion.div
                ref={thumbRef}
                className="gallery-scroll-track"
                style={{ x }}
                drag="x"
                dragElastic={0.2}
                dragMomentum={true}
                onDrag={() => {
                  // Drag is active
                }}
                dragConstraints={{ left: constraintsX, right: 0 }}
              >
                {scrollItems.map(item => (
                  <div
                    key={item.id}
                    className="gallery-scroll-item"
                    style={{
                      '--item-color': item.color,
                      '--item-image': `url(${item.image})`
                    }}
                  >
                    <div className="gallery-item-content">
                      <span className="gallery-item-number">0{item.id}</span>
                      <h2>{item.label}</h2>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <section className="gallery-scroll-outro">
            <p className="gallery-big">See you under the lights</p>
          </section>
        </div>

        <div className="gallery-dome-section">
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
              autoRotateSpeed={70}
              pointerFollow={false}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallary