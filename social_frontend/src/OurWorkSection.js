import React from 'react';
import './OurWorkSection.css'; // Import CSS for styles
import { motion } from 'framer-motion'; // Import motion from Framer Motion for animations
import img from "./images/gasleak.jpeg";
import logo from "./images/ourWork.jpg";
import nature from "./images/nature.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
const projects = [
  {
    name: 'Restoring River Narmada’s riverside habitats',
    description: "",
    image: img1
  },
  {
    name: 'Restoring Chennai’s Lake Sembakkam for water security and improved health',
    description: '',
    image: img2
  },
  {
    name: 'Prioritising conservation of freshwater ecosystems in India',
    description: '',
    image:img3
  },
  {
    name: 'Harnessing the power of Agricultural Residues through Innovative Technologies (HARIT)',
    description: '',
    image:img4
  },
  {
    name: 'Harnessing the power of Agricultural Residues through Innovative Technologies (HARIT)',
    description: '',
    image:img5
  },
  {
    name: 'Renewable Energy Strategies',
    description: '',
    image:nature
  },
 
 
  
];

const OurWorkSection = () => {
  return (
   
   



    <div className="our-work-section">
      <h2>Our Work</h2>
      <div className="image-container">
        <img src={logo} alt="logo" className="image-class"/>
        <div className="text-overlay">

    Our Priorities
 
</div>

      </div>
      <div className="project-cards">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Add hover animation
          >
            <img src={project.image} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurWorkSection;
