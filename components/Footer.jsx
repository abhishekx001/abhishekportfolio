"use client";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/abhisheksresumefinal.pdf';
    link.download = 'Abhishek_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/abhishekx001',
      icon: '📱'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/abhishek-s-ab433b288',
      icon: '💼'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/abhiiishkk_/',
      icon: '📸'
    }
  ];

  const navigationItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <style jsx>{`
        .footer-container {
          background-color: #000000;
          border-top: 1px solid #333333;
          padding: 2rem 0;
          margin-top: 4rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        
        .footer-section h3 {
          font-family: "BBH Sans Bartle", sans-serif;
          font-size: 1.125rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        
        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-nav li {
          margin-bottom: 0.5rem;
        }
        
        .footer-nav a {
          font-family: "BBH Sans Bogle", sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #cccccc;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          letter-spacing: 0.02em;
        }
        
        .footer-nav a:hover {
          color: #ffffff;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "BBH Sans Bogle", sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #cccccc;
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.02em;
        }
        
        .social-link:hover {
          color: #ffffff;
        }
        
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #333333;
        }
        
        .footer-bottom p {
          font-family: "BBH Sans Bogle", sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: #999999;
          margin: 0;
          letter-spacing: 0.02em;
        }
        
        .resume-link {
          font-family: "BBH Sans Bogle", sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
          background-color: #333333;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          display: inline-block;
          margin-top: 0.5rem;
        }
        
        .resume-link:hover {
          background-color: #555555;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            padding: 1.5rem 0;
            margin-top: 3rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }
          
          .footer-section h3 {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }
          
          .footer-nav {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          
          .footer-nav a {
            font-size: 0.8rem;
            padding: 0.25rem 0;
          }
          
          .social-links {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .social-link {
            font-size: 0.8rem;
          }
          
          .resume-link {
            font-size: 0.8rem;
            padding: 0.2rem 0.6rem;
          }
          
          .footer-bottom {
            margin-top: 1.5rem;
            padding-top: 1rem;
          }
          
          .footer-bottom p {
            font-size: 0.7rem;
          }
        }
        
        @media (max-width: 480px) {
          .footer-container {
            padding: 1rem 0;
            margin-top: 2rem;
          }
          
          .footer-content {
            padding: 0 0.75rem;
            gap: 1rem;
          }
          
          .footer-section h3 {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
          
          .footer-nav {
            grid-template-columns: 1fr;
            gap: 0.25rem;
          }
          
          .footer-nav a {
            font-size: 0.75rem;
            padding: 0.2rem 0;
          }
          
          .social-links {
            gap: 0.25rem;
          }
          
          .social-link {
            font-size: 0.75rem;
            padding: 0.2rem 0;
          }
          
          .resume-link {
            font-size: 0.75rem;
            padding: 0.15rem 0.5rem;
            margin-top: 0.25rem;
          }
          
          .footer-bottom {
            margin-top: 1rem;
            padding-top: 0.75rem;
          }
          
          .footer-bottom p {
            font-size: 0.65rem;
            line-height: 1.4;
          }
        }
        
        @media (max-width: 360px) {
          .footer-content {
            padding: 0 0.5rem;
          }
          
          .footer-section h3 {
            font-size: 0.85rem;
          }
          
          .footer-nav a {
            font-size: 0.7rem;
          }
          
          .social-link {
            font-size: 0.7rem;
          }
          
          .resume-link {
            font-size: 0.7rem;
          }
          
          .footer-bottom p {
            font-size: 0.6rem;
          }
        }
      `}</style>
      
      <footer className="footer-container">
        <div className="footer-content">
          {/* Navigation Section */}
          <div className="footer-section">
            <h3>Abhishek</h3>
            <ul className="footer-nav">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="resume-link"
                  onClick={(e) => {
                    e.preventDefault();
                    downloadResume();
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links Section */}
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span>{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Abhishek S. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
