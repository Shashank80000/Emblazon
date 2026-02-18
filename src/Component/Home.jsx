import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import festImage from '../assets/festimage/fest.jpeg'; // Using one of your assets
import galleryImg1 from '../assets/gallery/1.jpeg';
import galleryImg2 from '../assets/gallery/4.jpeg';
import galleryImg3 from '../assets/gallery/5.jpeg';

const Home = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [festLive, setFestLive] = useState(false);
    const [revealComplete, setRevealComplete] = useState(false);
    const homeRef = useRef(null);
    const heroTitleRef = useRef(null);

    // Countdown Logic
    useEffect(() => {
        const festDate = new Date("Mar 20, 2026 09:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = festDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setFestLive(true);
            } else {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Parallax, Scroll Animation, and Zoom Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!homeRef.current) return;
            const scrollPosition = window.pageYOffset;

            // Title Zoom Effect
            if (heroTitleRef.current) {
                const scale = 1 + scrollPosition * 0.001; // Adjust multiplier for zoom speed
                heroTitleRef.current.style.transform = `scale(${scale})`;
                const opacity = Math.max(1 - scrollPosition / 500, 0); // Fade out as it zooms
                heroTitleRef.current.style.opacity = opacity;
            }

            // Parallax BG Effect
            const parallaxElements = homeRef.current.querySelectorAll('.parallax-bg');
            parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                el.style.transform = `translateY(${scrollPosition * speed}px)`;
            });

            // Animate sections on scroll
            const animatedElements = homeRef.current.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    el.classList.add('is-visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Reveal subtitle/countdown after title animation completes
    useEffect(() => {
        const timer = setTimeout(() => {
            setRevealComplete(true);
        }, 1800); // matches last letter delay (1.2s) + animation duration (0.5s)

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="home-v2" ref={homeRef}>
            <section className="hero-v2">
                <div className="parallax-bg" style={{ backgroundImage: `url(${festImage})` }} data-speed="0.4"></div>
                <div className="hero-content-v2">
                    <h1 className="hero-title-v2" ref={heroTitleRef}>
                        <span>E</span><span>M</span><span>B</span><span>L</span><span>A</span><span>Z</span><span>O</span><span>N</span>
                    </h1>
                    <div className="hero-badge" aria-hidden>
                        <span className="hero-event">EMBLAZON</span>
                        <span className="hero-meta">Mar 20–22, 2026 • Main Auditorium</span>
                        <span className="coming-soon">Coming Soon</span>
                    </div>
                </div>
                      <div className={`hero-scroll-content ${revealComplete ? 'visible' : 'hidden'}`}>
                          <p className="hero-subtitle-v2">Ignite Your Passion. Unleash Your Talent. — Mar 20–22 • Main Auditorium</p>
                    {festLive ? (
                        <div className="fest-live-v2">The Fest is LIVE!</div>
                    ) : (
                        <div className="countdown-v2">
                            <div><span>{countdown.days}</span>Days</div>
                            <div><span>{countdown.hours}</span>Hours</div>
                            <div><span>{countdown.minutes}</span>Minutes</div>
                            <div><span>{countdown.seconds}</span>Seconds</div>
                        </div>
                    )}
                    <Link to="/events" className="btn-v2">Explore Events</Link>
                </div>
            </section>

            <div className="scroll-container">
                <section className="content-section about-section animate-on-scroll">
                    <div className="content-wrapper">
                        <h2>About Emblazon</h2>
                        <p>Emblazon is the annual cultural and technical festival of our college, a vibrant celebration of creativity, innovation, and talent. Join us for an unforgettable experience packed with exciting events, workshops, and performances that push the boundaries of imagination.</p>
                    </div>
                </section>

                <section className="content-section events-section animate-on-scroll">
                    <div className="content-wrapper">
                        <h2>Featured Events</h2>
                        <div className="event-grid-v2">
                            <div className="event-card-v2">
                                <h3>Code Crusade</h3>
                                <p>A 24-hour hackathon to build innovative solutions.</p>
                            </div>
                            <div className="event-card-v2">
                                <h3>Rhythmic Rhapsody</h3>
                                <p>The ultimate battle of the bands. Let the music speak.</p>
                            </div>
                            <div className="event-card-v2">
                                <h3>Shutter Stories</h3>
                                <p>Capture the essence of the fest in our photography contest.</p>
                            </div>
                        </div>
                         <Link to="/events" className="btn-v2-secondary">See All Events</Link>
                    </div>
                </section>

                <section className="content-section highlights-section">
                    <div className="content-wrapper">
                        <h2 className="animate-on-scroll">Fest Highlights</h2>
                        <div className="highlights-grid">
                            <div className="highlight-card animate-on-scroll" data-animation="slide-in-left">
                                <i className="fas fa-music"></i>
                                <h3>Pro Shows</h3>
                                <p>Experience electrifying performances from top artists.</p>
                            </div>
                            <div className="highlight-card animate-on-scroll" data-animation="fade-in">
                                <i className="fas fa-laptop-code"></i>
                                <h3>Workshops</h3>
                                <p>Learn new skills from industry experts in hands-on sessions.</p>
                            </div>
                            <div className="highlight-card animate-on-scroll" data-animation="slide-in-right">
                                <i className="fas fa-trophy"></i>
                                <h3>Competitions</h3>
                                <p>Showcase your talents and compete for exciting prizes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-section gallery-preview-section animate-on-scroll">
                    <div className="content-wrapper">
                        <h2>Glimpse of the Gallery</h2>
                        <p>A sneak peek into the unforgettable moments from past editions of Emblazon.</p>
                        <div className="gallery-marquee">
                            <div className="gallery-track">
                                <div className="gallery-item"><img src={galleryImg1} alt="Gallery glimpse 1" /></div>
                                <div className="gallery-item"><img src={galleryImg2} alt="Gallery glimpse 2" /></div>
                                <div className="gallery-item"><img src={galleryImg3} alt="Gallery glimpse 3" /></div>
                                {/* Duplicate images for seamless loop */}
                                <div className="gallery-item"><img src={galleryImg1} alt="Gallery glimpse 1" /></div>
                                <div className="gallery-item"><img src={galleryImg2} alt="Gallery glimpse 2" /></div>
                                <div className="gallery-item"><img src={galleryImg3} alt="Gallery glimpse 3" /></div>
                            </div>
                        </div>
                        <Link to="/gallery" className="btn-v2-secondary">Visit Gallery</Link>
                    </div>
                </section>

                 <footer id="contact-v2">
                    <p>&copy; 2026 Emblazon Fest. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;