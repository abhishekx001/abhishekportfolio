"use client";

export default function Contact() {

  return (
    <>
      <style jsx>{`
        .raleway-regular {
          font-family: "Raleway", sans-serif;
          font-optical-sizing: auto;
          font-weight: 400;
          font-style: normal;
        }
        
        @media (max-width: 768px) {
          .contact-container {
            padding: 2rem 0.5rem 2rem 0 !important;
            overflow-x: hidden !important;
          }
          .contact-main-card {
            margin: 0 !important;
          }
          .contact-header {
            padding: 2rem 1.5rem !important;
          }
          .contact-content {
            padding: 2rem 0.5rem 2rem 1rem !important;
            overflow-x: hidden !important;
          }
          .contact-main-title {
            font-size: 2rem !important;
          }
          .contact-subtitle {
            font-size: 1.25rem !important;
          }
          .contact-description {
            font-size: 1rem !important;
          }
          .contact-info {
            padding: 1.5rem !important;
            margin: 0 !important;
          }
          .social-buttons {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          .social-btn {
            padding: 0.75rem 1rem !important;
            font-size: 0.875rem !important;
          }
        }
      `}</style>
      <div id="contact" className="contact-container" style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '5rem 2rem',
        fontFamily: '"BBH Sans Bogle", sans-serif'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Container */}
        <div className="contact-main-card" style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e5e7eb',
          overflow: 'hidden'
        }}>
          {/* Header Section */}
          <div className="contact-header" style={{
            background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
            padding: '4rem 3rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <h1 className="contact-main-title" style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              fontFamily: '"BBH Sans Bartle", sans-serif',
              lineHeight: '1.1'
            }}>
              Get In Touch
            </h1>
            <p className="contact-subtitle" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              fontFamily: '"BBH Sans Bogle", sans-serif',
              letterSpacing: '0.05em'
            }}>
              Let's work together
            </p>
          </div>

          {/* Content Section */}
          <div className="contact-content" style={{ padding: '4rem 3rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* Description */}
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <p className="raleway-regular contact-description" style={{
                  fontSize: '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Feel free to reach out if you have a question, want to collaborate, or just want to say hi!
                </p>
              </div>


              {/* Contact Information Card */}
              <div style={{
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <div className="contact-info" style={{
                  background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
                  borderRadius: '16px',
                  padding: '2rem',
                  color: 'white',
                  border: '1px solid #4b5563'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    fontFamily: '"BBH Sans Bartle", sans-serif',
                    textAlign: 'center'
                  }}>
                    Contact Information
                  </h3>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#9ca3af',
                        marginBottom: '0.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Email Address
                      </h4>
                      <p className="raleway-regular" style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        abishek96335451@gmail.com
                      </p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#9ca3af',
                        marginBottom: '0.25rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Based in
                      </h4>
                      <p className="raleway-regular" style={{
                        color: 'white',
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        Palakkad, Kerala, India
                      </p>
                    </div>

                    <hr style={{
                      border: 'none',
                      borderTop: '1px solid #4b5563',
                      margin: '1.5rem 0'
                    }} />

                    <div>
                      <h4 style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#9ca3af',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Follow me on social media:
                      </h4>
                      
                      <div className="social-buttons" style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap'
                      }}>
                        <a
                          href="https://github.com/abhishekx001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn"
                          style={{
                            backgroundColor: '#374151',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            transition: 'all 0.2s ease',
                            border: '1px solid #4b5563'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#4b5563';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#374151';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          GitHub
                        </a>
                        
                        <a
                          href="https://linkedin.com/in/abhishek-s-ab433b288"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn"
                          style={{
                            backgroundColor: '#374151',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            transition: 'all 0.2s ease',
                            border: '1px solid #4b5563'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#4b5563';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#374151';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          LinkedIn
                        </a>
                        
                        <a
                          href="https://www.instagram.com/abhiiishkk_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn"
                          style={{
                            backgroundColor: '#374151',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            transition: 'all 0.2s ease',
                            border: '1px solid #4b5563'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#4b5563';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#374151';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}