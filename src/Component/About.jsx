import React, { useRef, useEffect, useState } from 'react'
import hmrVideo from '../assets/hmr.mp4'
import './About.css'

export default function About() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const video = videoRef.current
    if (video) {
      // Set video properties
      video.muted = true
      video.playsInline = true
      video.setAttribute('playsinline', '')
      video.setAttribute('webkit-playsinline', '')
      video.setAttribute('x5-playsinline', '') // WeChat browser
      video.setAttribute('x5-video-player-type', 'h5')
      video.setAttribute('x5-video-player-fullscreen', 'false')
      
      console.log("Video element created, attempting to play...")
      console.log("Video source:", hmrVideo)
      console.log("Is mobile:", isMobile)
      
      // Try to play the video
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("✓ Video is playing!")
            setVideoLoaded(true)
          })
          .catch(error => {
            console.error("✗ Autoplay prevented:", error)
            // Try to play on user interaction
            const handleInteraction = () => {
              video.play()
                .then(() => {
                  console.log("✓ Video playing after user interaction")
                  setVideoLoaded(true)
                })
                .catch(err => console.error("Still can't play:", err))
            }
            
            document.addEventListener('click', handleInteraction, { once: true })
            document.addEventListener('touchstart', handleInteraction, { once: true })
          })
      }

      // Ensure video loops
      video.addEventListener('ended', () => {
        video.currentTime = 0
        video.play()
      })

      video.addEventListener('loadeddata', () => {
        console.log("✓ Video data loaded")
        setVideoLoaded(true)
      })

      video.addEventListener('error', (e) => {
        console.error("✗ Video error:", e)
        setVideoError(true)
      })
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <div className="about-container" ref={containerRef}>
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted
        playsInline
        preload={isMobile ? "metadata" : "auto"}
        className="about-video"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src={hmrVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Content below navbar */}
      <div className="about-text-content visible">
        <div className="about-text-container">
          <p className="about-paragraph">
            HMR Institute of Technology & Management was established in the year 2002. It is spread over a sprawling lush green campus 5 acres of land.
          </p>
          
          <p className="about-paragraph">
            HMRITM exists for nurturing the Technical Spirit – conceived in 2002, to provide exceptional facilities for students of Engineering and Technology, the HMR Institute of Technology and Management boasts of being among the reputed institutes even in its early stages. The Institute recognises the need for bringing up a new age cerebral workforce in today's highly competitive environment.
          </p>
          
          <p className="about-paragraph">
            The name HMR stands for the founders of this institution Late Sh. Hiralal, Late Smt. Mohan Devi and Late Smt. Rita Gupta. The Institute provides an atmosphere that ensures academic excellence and industry exposure that helps equip the students with the technical skills and emotional intelligence to successfully grapple with the complexities of a dynamic technology-driven environment. This endeavour is greatly aided by the local location of the institute in Delhi that is home to several corporate houses and industries.
          </p>
          
          <p className="about-paragraph">
            The institute stands for quality embedded higher education at par with global standard and an excellent learning environment backed by innovative state-of-the-art infrastructure. Further, it aims to add greater value to the world of crucial engineering developments and technological breakthroughs through an active focus on research and development activities. With a bird's eye-view of all-encompassing development, it strives to achieve faster progress for students, and for itself.
          </p>
        </div>
      </div>

      {/* Debug info */}
      {videoError && (
        <p className="video-status error">
          ⚠ Video failed to load. {isMobile && "Try rotating your device or tapping the screen."}
        </p>
      )}
    </div>
  )
}
