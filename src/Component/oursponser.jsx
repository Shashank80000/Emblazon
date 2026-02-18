import React from 'react';
import './Oursponser.css';

// --- Sponsor Data ---
// You can easily update your sponsors here.
// For best results, use logos with a transparent background (PNG).
const sponsors = {
  title: [
    { name: 'Innovate Corp', logoUrl: '/path/to/innovate-corp.png', website: 'https://example.com' },
  ],
  gold: [
    { name: 'Tech Solutions', logoUrl: '/path/to/tech-solutions.png', website: 'https://example.com' },
    { name: 'Global Bank', logoUrl: '/path/to/global-bank.png', website: 'https://example.com' },
    { name: 'Future Motors', logoUrl: '/path/to/future-motors.png', website: 'https://example.com' },
  ],
  event: [
    { name: 'Campus Eats', logoUrl: '/path/to/campus-eats.png', website: 'https://example.com' },
    { name: 'Print Pro', logoUrl: '/path/to/print-pro.png', website: 'https://example.com' },
    { name: 'Soundwave Audio', logoUrl: '/path/to/soundwave.png', website: 'https://example.com' },
    { name: 'Local FM', logoUrl: '/path/to/local-fm.png', website: 'https://example.com' },
  ],
};
// --- End of Sponsor Data ---


const SponsorTier = ({ title, sponsors, tierClass }) => (
  <div className={`sponsor-tier ${tierClass}`}>
    <h2 className="tier-title">{title}</h2>
    <div className="sponsor-grid">
      {sponsors.map((sponsor, index) => (
        <a key={index} href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-card">
          <img src={sponsor.logoUrl} alt={`${sponsor.name} logo`} className="sponsor-logo" />
          <span className="sponsor-name">{sponsor.name}</span>
        </a>
      ))}
    </div>
  </div>
);

const Oursponser = () => {
  return (
    <div className="sponsors-page">
      <div className="sponsors-header">
        <h1>Our Valued Sponsors</h1>
        <p>Emblazon is made possible by the generous support of our partners.</p>
      </div>

      <div className="sponsors-container">
        {sponsors.title.length > 0 && (
          <SponsorTier title="Title Sponsors" sponsors={sponsors.title} tierClass="tier-title-sponsor" />
        )}
        {sponsors.gold.length > 0 && (
          <SponsorTier title="Gold Sponsors" sponsors={sponsors.gold} tierClass="tier-gold" />
        )}
        {sponsors.event.length > 0 && (
          <SponsorTier title="Event Sponsors" sponsors={sponsors.event} tierClass="tier-event" />
        )}
      </div>

      <div className="sponsorship-cta">
        <h2>Become a Sponsor</h2>
        <p>Interested in showcasing your brand to thousands of students and creatives? Join us as a sponsor for Emblazon 2026.</p>
        <a href="mailto:sponsorship@emblazonfest.com" className="btn-v2">Get in Touch</a>
      </div>
    </div>
  );
};

export default Oursponser;