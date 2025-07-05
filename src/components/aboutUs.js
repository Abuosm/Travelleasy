import React from 'react';
import './AboutUs.css';

// Import team member images
import teamMember1 from './tz.jpg';
import teamMember2 from './t2.jpg';
import teamMember3 from './t3.jpg';
import teamMember4 from './t4.jpg';

// Import background image
import backgroundImage from './aboutus1.webp';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Nousheen',
      designation: 'Lead Developer',
      image: teamMember1,
      bio: 'Specializes in front-end development and user experience design with 8+ years of experience.'
    },
    {
      id: 2,
      name: 'Aishwariya',
      designation: 'Backend Engineer',
      image: teamMember2,
      bio: 'Expert in server infrastructure and database management, ensuring seamless operations.'
    },
    {
      id: 3,
      name: 'Ankitha',
      designation: 'UI/UX Designer',
      image: teamMember3,
      bio: 'Creates intuitive interfaces that delight users and drive engagement.'
    },
    {
      id: 4,
      name: 'Sagar',
      designation: 'Project Manager',
      image: teamMember4,
      bio: 'Ensures projects are delivered on time and exceed client expectations.'
    }
  ];

  const features = [
    {
      title: "Secure Verification",
      description: "Aadhaar-based authentication for foolproof identity verification"
    },
    {
      title: "Instant Ticketing",
      description: "QR code generation in seconds for hassle-free travel"
    },
    {
      title: "Real-time Updates",
      description: "Live tracking and notifications for your journeys"
    },
    {
      title: "Eco-friendly",
      description: "Digital solutions that reduce paper waste significantly"
    }
  ];

  return (
    <div className="about-us-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="about-intro">
        <h1>About Smart Travel</h1>
        <div className="intro-content">
          <p className="highlight">
            Welcome to <strong>Smart Travel</strong>, where we're revolutionizing public transport through innovative technology.
          </p>
          <p>
            Our platform combines cutting-edge Aadhaar verification with instant QR ticketing to create a seamless, secure, 
            and sustainable travel experience for millions of commuters.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To transform urban mobility by eliminating ticketing hassles while promoting eco-friendly digital solutions 
            that reduce paper waste and carbon footprint.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become the leading digital ticketing platform that sets new standards for convenience, 
            security, and environmental responsibility in public transportation.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p className="team-subheading">
          A passionate group of innovators dedicated to transforming your travel experience
        </p>
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member-card">
              <div className="member-image-container">
                <img src={member.image} alt={member.name} className="team-member-image" />
              </div>
              <h3>{member.name}</h3>
              <p className="designation">{member.designation}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Smart Travel Stands Out</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Experience Smart Travel?</h2>
        <p>Join thousands of satisfied commuters who've already made the switch to seamless digital ticketing.</p>
      </section>
    </div>
  );
};

export default AboutUs;