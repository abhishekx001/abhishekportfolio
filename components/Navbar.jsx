"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar-container {
            padding: 1rem 0.5rem 1rem 0 !important;
            transition: opacity 0.3s ease-in-out !important;
          }
          .navbar-container.scrolled {
            opacity: 0.3 !important;
          }
          .navbar-nav-items {
            display: none !important;
          }
          .navbar-nav-items.mobile-open {
            display: flex !important;
            flex-direction: column !important;
            position: fixed !important;
            top: 0 !important;
            right: 0 !important;
            width: 50vw !important;
            height: 60vh !important;
            background-color: rgba(0, 0, 0, 0.95) !important;
            z-index: 9999 !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 1.5rem !important;
            padding: 2rem !important;
            margin: 0 !important;
            transform: none !important;
          }
          .navbar-nav-items.mobile-open li {
            list-style: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .navbar-nav-items.mobile-open .navbar-nav-item {
            font-size: 1.2rem !important;
            color: white !important;
            text-decoration: none !important;
            font-weight: 300 !important;
            letter-spacing: 0.08em !important;
            display: block !important;
            padding: 0.5rem 0 !important;
            text-align: center !important;
            width: 100% !important;
          }
          .navbar-logo {
            font-size: 1.2rem !important;
            margin-left: 1rem !important;
          }
          .navbar-resume-button {
            display: none !important;
          }
          .hamburger-menu {
            display: flex !important;
            flex-direction: column !important;
            cursor: pointer !important;
            padding: 0.5rem !important;
            z-index: 10000 !important;
          }
          .hamburger-line {
            width: 25px !important;
            height: 3px !important;
            background-color: #000000 !important;
            margin: 3px 0 !important;
            transition: 0.3s !important;
          }
          .hamburger-line.open:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px) !important;
            background-color: white !important;
          }
          .hamburger-line.open:nth-child(2) {
            opacity: 0 !important;
            background-color: white !important;
          }
          .hamburger-line.open:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px) !important;
            background-color: white !important;
          }
        }
        @media (min-width: 769px) {
          .hamburger-menu {
            display: none !important;
          }
        }
      `}</style>
      <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`} style={{
        width: '100%',
        backgroundColor: 'transparent',
        padding: '1.5rem 2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: '"BBH Sans Bogle", sans-serif'
      }}>
        {/* Logo */}
        <div className="navbar-logo" style={{
          fontSize: '1.5rem',
          fontWeight: '400',
          color: '#000000',
          letterSpacing: '0.05em',
          transform: 'perspective(100px) rotateX(15deg)',
          transformOrigin: 'bottom',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          flex: '0 0 auto'
        }}>
          Abhishek
        </div>

        {/* Navigation Items - Centered */}
        <ul className={`navbar-nav-items ${isMenuOpen ? 'mobile-open' : ''}`} style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '2rem',
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <li>
            <a href="#about" className="navbar-nav-item" style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#666666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000000';
            }}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-nav-item" style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#666666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000000';
            }}>
              Contact
            </a>
          </li>
          <li>
            <a href="#skills" className="navbar-nav-item" style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#666666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000000';
            }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="navbar-nav-item" style={{
              textDecoration: 'none',
              color: '#000000',
              fontSize: '1rem',
              fontWeight: '400',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setIsMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#666666';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#000000';
            }}>
              Projects
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu} style={{
          display: 'none',
          flexDirection: 'column',
          cursor: 'pointer',
          padding: '0.5rem',
          zIndex: 10000
        }}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '3px 0',
            transition: '0.3s'
          }}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '3px 0',
            transition: '0.3s'
          }}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '3px 0',
            transition: '0.3s'
          }}></div>
        </div>

        {/* Resume Button */}
        <button className="navbar-resume-button" style={{
          padding: 'clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 3vw, 1.2rem)',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
          fontWeight: '400',
          fontFamily: '"BBH Sans Bogle", sans-serif',
          letterSpacing: '0.08em',
          cursor: 'pointer',
          transition: 'all 0.2s',
          flex: '0 0 auto',
          marginRight: '3rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#333333';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#000000';
        }}>
          Resume
        </button>
      </nav>
    </>
  );
}
