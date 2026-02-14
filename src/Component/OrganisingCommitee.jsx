import React from 'react'
import './OrganisingCommitee.css'
import linkedinIcon from '../assets/icon/linkedin.png'
import instagramIcon from '../assets/icon/instagram.png'
import gmailIcon from '../assets/icon/gmail.png'
import shashank from '../assets/teamsimage/shashank.jpeg'
import shree from '../assets/teamsimage/shreebhagan.jpeg'

const OrganisingCommitee = () => {
  const coreTeam = [
   
    {
      id: 2,
      name: 'Shree Bhagwan Singh',
      role: 'Website Designer',
      image: shree,
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
     {
      id: 1,
      name: 'Shashank Pandey',
      role: 'Website Devloper',
      image: shashank,
      socials: {
        linkedin: 'https://www.linkedin.com/in/shashank-pandey-2a3724291/',
        instagram: 'https://instagram.com/shashankpandey4730',
        email: 'shashankp846@gmail.com'
      }
    },
    {
      id: 3,
      name: 'Deepansha Arya',
      role: 'Cultural Head',
      image: 'https://via.placeholder.com/300x300?text=Deepansha',
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
    {
      id: 4,
      name: 'Jaypal Rangeela',
      role: 'SAC Treasurer',
      image: 'https://via.placeholder.com/300x300?text=Jaypal',
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
    {
      id: 5,
      name: 'Team Member 5',
      role: 'Event Coordinator',
      image: 'https://via.placeholder.com/300x300?text=Event+Coordinator',
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
    {
      id: 6,
      name: 'Team Member 6',
      role: 'Technical Head',
      image: 'https://via.placeholder.com/300x300?text=Technical+Head',
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
    {
      id: 7,
      name: 'Team Member 7',
      role: 'Sponsorship Lead',
      image: 'https://via.placeholder.com/300x300?text=Sponsorship',
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
    {
      id: 8,
      name: 'Team Member 8',
      role: 'Content Lead',
      image: 'https://via.placeholder.com/300x300?text=Content+Lead',
      socials: {
        linkedin: '#',
        instagram: '#',
        email: '#'
      }
    },
  ]

  return (
    <div className="committee-page">
      <div className="committee-header">
        <h1 className="committee-title">CORE TEAM</h1>
      </div>

      <div className="committee-content">
        <div className="team-grid">
          {coreTeam.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-socials-overlay">
                  <a href={member.socials.linkedin} className="social-icon-overlay linkedin" title="LinkedIn">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href={member.socials.instagram} className="social-icon-overlay instagram" title="Instagram">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href={member.socials.email} className="social-icon-overlay email" title="Email">
                    <img src={gmailIcon} alt="Gmail" />
                  </a>
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrganisingCommitee