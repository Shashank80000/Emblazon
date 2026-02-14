import React from 'react'
import DomeGallery from './DomeGallery'
import shashank from '../assets/teamsimage/shashank.jpeg'
import shree from '../assets/teamsimage/shreebhagan.jpeg'
import img1 from '../assets/gallery/1.jpeg'
import img4 from '../assets/gallery/4.jpeg'
import img5 from '../assets/gallery/5.jpeg'
import img7 from '../assets/gallery/7.jpeg'
import imgWhatsApp from '../assets/gallery/WhatsApp Image 2026-02-14 at 2.00.06 PM.jpeg'
import img8  from '../assets/gallery/8.jpeg'
import img9  from '../assets/gallery/9.jpeg'
import img10  from '../assets/gallery/10.jpeg'
import img11  from '../assets/gallery/11.jpeg'


const domeImages = [

  { src: shashank, alt: 'Crew Moments' },
  { src: shree, alt: 'Backstage Energy' },
  { src: img1, alt: 'Festival Moment 1' },
  { src: img4, alt: 'Festival Moment 2' },
  { src: img5, alt: 'Festival Moment 3' },
  { src: img7, alt: 'Festival Moment 4' },
  { src: imgWhatsApp, alt: 'Event Highlight' },
    { src: img8, alt: 'Event Highlight 2' },
    { src: img9, alt: 'Event Highlight 3' },
    { src: img10, alt: 'Event Highlight 4' },
    { src: img11, alt: 'Event Highlight 5' },
  
  


]

const Gallary = () => {
  return (
    <section id="gallery" className="section section-gallery">
      <div className="gallery-hero">
        <h1 className="gallery-title">Glimpse of Emblazon</h1>
      </div>
      <div className="dome-gallery-shell">
        <DomeGallery
          images={domeImages}
          fit={0.9}
          minRadius={520}
          maxRadius={900}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
          autoRotate
          autoRotateSpeed={5}
        />
      </div>
    </section>
  )
}

export default Gallary