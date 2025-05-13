import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Menu, Send, ChevronRight } from 'lucide-react';
import './DroneLandingPage.css';

export default function DroneLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Drone specifications
  const droneSpecs = [
    { name: "Flight Time", value: "30 minutes" },
    { name: "Max Speed", value: "45 mph" },
    { name: "Camera", value: "4K Ultra HD" },
    { name: "Range", value: "5 miles" },
    { name: "Battery", value: "5200mAh Li-Po" },
    { name: "Weight", value: "1.2 lbs" }
  ];

  // Course details
  const courses = [
    {
      title: "Drone Basics",
      description: "Learn the fundamentals of drone operation and safety protocols.",
      duration: "2 weeks",
      level: "Beginner"
    },
    {
      title: "Aerial Photography",
      description: "Master the art of capturing stunning aerial shots and videos.",
      duration: "3 weeks",
      level: "Intermediate"
    },
    {
      title: "Advanced Maneuvers",
      description: "Take your piloting skills to the next level with complex flight patterns.",
      duration: "4 weeks",
      level: "Advanced"
    }
  ];

  return (
    <div className="landing-page">
      {/* Background Animation */}
      <div className="background">
        <motion.div 
          className="gradient-overlay"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="drone-image"
          style={{ backgroundImage: "url('/images/drone.jpg')" }}
          animate={{ 
            y: ["-40%", "-60%", "-40%"],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Navigation */}
      <header className="header">
        <div className="container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            DroneKits
          </motion.div>
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {['hero', 'specs', 'courses', 'book'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-nav">
              {['hero', 'specs', 'courses', 'book'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>
              Elevate Your <span className="highlight">Drone</span> Experience
            </h1>
            <p>
              Premium drone kits and expert training courses to help you master the skies.
            </p>
            <div className="button-group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('book')}
                className="primary-button"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('specs')}
                className="secondary-button"
              >
                Explore Drones
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="specs-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Drone Specifications</h2>
            <div className="divider"></div>
            <p>
              Our high-performance drone kits feature cutting-edge technology and robust capabilities.
            </p>
          </motion.div>

          <div className="specs-grid">
            {droneSpecs.map((spec, index) => (
              <motion.div
                key={spec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="spec-card"
              >
                <h3>{spec.name}</h3>
                <p>{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Training Courses</h2>
            <div className="divider"></div>
            <p>
              Learn from expert drone pilots and master various flying techniques with our specialized courses.
            </p>
          </motion.div>

          <div className="courses-grid">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="course-card"
              >
                <div className="course-image">
                  <div className="image-overlay"></div>
                  <div className="course-level">
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-footer">
                    <span className="duration">Duration: {course.duration}</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="learn-more-button"
                    >
                      Learn more <ChevronRight size={16} className="icon" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section id="book" className="booking-section">
        <div className="container">
          <div className="booking-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2>Ready to Take Flight?</h2>
              <div className="divider"></div>
              <p>
                Book your drone kit and training course today. Our experts will help you choose the perfect setup.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="booking-form"
            >
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" />
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea rows="4"></textarea>
                </div>
              </div>
              <div className="form-footer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="book-button"
                >
                  <Send size={18} className="icon" />
                  Book Your Drone Kit Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="copyright">
              © 2025 DroneKits. All rights reserved.
            </div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}