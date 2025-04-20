import React from 'react';
import { motion } from 'framer-motion';
import './CertificatesPage.css'; // Import the CSS for styling

const certificates = [
  {
    title: 'Web Development Hackathon',
    description: 'Awarded to <span class="highlight-name">Vasoya Parth</span> for participating in the One Day Hackathon on "<span class="highlight-title">Web Development</span>" organized by Darshan University, Rajkot on 09th December 2023.',
    image: 'https://github.com/VasoyaParth/portfolio/blob/main/IMG/Certificates/duhackathon.png?raw=true',
  },
  {
    title: 'ANVESHANA - National Level Hackathon 2024',
    description: 'Awarded to <span class="highlight-name">Vasoya Parth</span> for actively participating in the 36-hour "<span class="highlight-title">ANVESHANA</span>" Hackathon organized by Atmiya University, Rajkot on 10th & 11th September 2024.',
    image: 'https://github.com/VasoyaParth/portfolio/blob/main/IMG/Certificates/atmiya.png?raw=true',
  },
  {
    title: 'Python (Basics) Course Completion',
    description: 'Awarded to <span class="highlight-name">Vasoya Parth</span> for successfully completing the "<span class="highlight-title">Python (Basics)</span>" course on HackerRank on 30th June 2024.',
    image: 'https://github.com/VasoyaParth/portfolio/blob/main/IMG/Certificates/Python.png?raw=true',
  },
  {
    title: 'JavaScript (Basics) Course Completion',
    description: 'Awarded to <span class="highlight-name">Vasoya Parth</span> for successfully completing the "<span class="highlight-title">JavaScript (Basics)</span>" course on HackerRank on 3rd September 2023.',
    image: 'https://github.com/VasoyaParth/portfolio/blob/main/IMG/Certificates/js.png?raw=true',
  },
  {
    title: 'SQL (Basics) Course Completion',
    description: 'Awarded to <span class="highlight-name">Vasoya Parth</span> for successfully completing the "<span class="highlight-title">SQL (Basics)</span>" course on HackerRank on 3rd September 2023.',
    image: 'https://github.com/VasoyaParth/portfolio/blob/main/IMG/Certificates/sql.png?raw=true',
  },
];

const CertificatesPage = () => {
  return (
    <div className="certificates-container">
      <motion.h1
        className="certificates-heading text-4xl font-bold text-gray-900 mb-8 text-center font-sans tracking-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Certificates
      </motion.h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            className="certificate-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h3 className="certificate-title">{cert.title}</h3>
            <p
              className="certificate-description"
              dangerouslySetInnerHTML={{ __html: cert.description }}
            ></p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
