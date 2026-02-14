import React, { useEffect } from 'react'
import './ParticlesBackground.css'

const ParticlesBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.3
        // Randomly assign black or gold color
        this.isGold = Math.random() > 0.4 // 60% gold, 40% black
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Gentle opacity pulse
        this.opacity += (Math.random() - 0.5) * 0.02
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity))
      }

      draw() {
        const color = this.isGold 
          ? `rgba(255, 213, 128, ${this.opacity})`  // Gold
          : `rgba(0, 0, 0, ${this.opacity})`         // Black
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000)
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }
    initParticles()

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent overlay
      ctx.fillStyle = 'rgba(32, 5, 76, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Choose color based on particles
            const color = p1.isGold && p2.isGold
              ? `rgba(255, 213, 128, ${0.15 * (1 - distance / 100)})`  // Gold to gold
              : p1.isGold || p2.isGold
              ? `rgba(200, 180, 100, ${0.1 * (1 - distance / 100)})`   // Mixed (softer gold)
              : `rgba(100, 100, 100, ${0.08 * (1 - distance / 100)})`  // Black to black
            
            ctx.strokeStyle = color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas id="particles-canvas" className="particles-canvas"></canvas>
}

export default ParticlesBackground
