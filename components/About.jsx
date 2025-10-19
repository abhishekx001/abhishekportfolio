"use client";

export default function About() {
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
          .about-container {
            padding: 2rem 0.5rem 2rem 0 !important;
            overflow-x: hidden !important;
          }
          .about-main-card {
            margin: 0 !important;
          }
          .about-header {
            padding: 2rem 1.5rem !important;
          }
          .about-content {
            padding: 2rem 0.5rem 2rem 1rem !important;
            overflow-x: hidden !important;
          }
          .about-main-title {
            font-size: 2rem !important;
          }
          .about-subtitle {
            font-size: 1.25rem !important;
          }
          .about-hello-title {
            font-size: 1.25rem !important;
          }
          .about-text {
            font-size: 1rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin: 0 0 2rem 0 !important;
          }
          .about-card {
            padding: 1rem !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .about-card-title {
            font-size: 1.25rem !important;
          }
          .about-card-subtitle {
            font-size: 1rem !important;
          }
          .about-philosophy {
            padding: 1rem !important;
            margin: 0 !important;
          }
          .about-philosophy-title {
            font-size: 1.5rem !important;
          }
          .about-philosophy-text {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
      <div className="about-container" style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '5rem 2rem',
        fontFamily: '"BBH Sans Bogle", sans-serif'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Container */}
        <div className="about-main-card" style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e5e7eb',
          overflow: 'hidden'
        }}>
          {/* Header Section */}
          <div className="about-header" style={{
            background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
            padding: '4rem 3rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <h1 className="about-main-title" style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              fontFamily: '"BBH Sans Bartle", sans-serif',
              lineHeight: '1.1'
            }}>
              About Me
            </h1>
            <p className="about-subtitle" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              fontFamily: '"BBH Sans Bogle", sans-serif',
              letterSpacing: '0.05em'
            }}>
              Full Stack Developer & Digital Creator
            </p>
          </div>

          {/* Content Section */}
          <div className="about-content" style={{ padding: '4rem 3rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* Introduction */}
              <div style={{ marginBottom: '4rem' }}>
                <h2 className="about-hello-title" style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '2rem',
                  fontFamily: '"BBH Sans Bartle", sans-serif',
                  letterSpacing: '0.05em'
                }}>
                  Hello, I'm Abhishek! 👋
                </h2>
                <p className="raleway-regular" style={{
                  fontSize: '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem'
                }}>
                  I'm Abhishek S, a 20-year-old who's passionate about the web and all the amazing things around it.
                  I love creating digital products that are both beautiful and functional.
                </p>
                <p className="raleway-regular" style={{
                  fontSize: '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem'
                }}>
                  My journey into web development started during my college days, when I discovered how exciting it is to build interactive and engaging web experiences.
                </p>
                <p className="raleway-regular" style={{
                  fontSize: '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.7'
                }}>
                  I truly believe that technology has the power to solve real-world problems and help create meaningful connections between people and the digital world.
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="about-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem',
                alignItems: 'stretch'
              }}>
                {/* Education Card */}
                <div className="about-card" style={{
                  background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid #374151',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: '#3b82f6',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <span style={{ color: 'white', fontSize: '1.25rem' }}>🎓</span>
                    </div>
                    <h3 className="about-card-title" style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'white',
                      fontFamily: '"BBH Sans Bartle", sans-serif'
                    }}>
                      Education
                    </h3>
                  </div>
                  <div style={{
                    backgroundColor: '#374151',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #4b5563'
                  }}>
                    <h4 className="about-card-subtitle" style={{
                      fontSize: '1.125rem',
                      fontWeight: '500',
                      color: '#e5e7eb',
                      marginBottom: '0.5rem',
                      fontFamily: '"BBH Sans Bogle", sans-serif',
                      letterSpacing: '0.025em'
                    }}>
                      B.Tech in Computer Science & Engineering (2023-2027)
                    </h4>
                    <p className="raleway-regular" style={{
                      color: '#d1d5db'
                    }}>
                      Nehru College of Engineering and Research Centre
                    </p>
                    <p className="raleway-regular" style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af'
                    }}>
                      Thrissur, Kerala, India
                    </p>
                  </div>
                </div>

                {/* Current Role Card */}
                <div className="about-card" style={{
                  background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid #374151',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: '#8b5cf6',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      <span style={{ color: 'white', fontSize: '1.25rem' }}>💼</span>
                    </div>
                    <h3 className="about-card-title" style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'white',
                      fontFamily: '"BBH Sans Bartle", sans-serif'
                    }}>
                      Current Role
                    </h3>
                  </div>
                  <div style={{
                    backgroundColor: '#374151',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #4b5563'
                  }}>
                    <h4 className="about-card-subtitle" style={{
                      fontSize: '1.125rem',
                      fontWeight: '500',
                      color: '#e5e7eb',
                      marginBottom: '0.5rem',
                      fontFamily: '"BBH Sans Bogle", sans-serif',
                      letterSpacing: '0.025em'
                    }}>
                      Software Developer Intern
                    </h4>
                    <p className="raleway-regular" style={{
                      color: '#d1d5db'
                    }}>
                      Koott Wellness, Kozhikode
                    </p>
                    <p className="raleway-regular" style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af'
                    }}>
                      Building robust server-side solutions
                    </p>
                  </div>
                </div>
              </div>


              {/* Philosophy Section */}
              <div className="about-philosophy" style={{
                background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
                borderRadius: '16px',
                padding: '3rem',
                color: 'white',
                textAlign: 'center'
              }}>
                <h3 className="about-philosophy-title" style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  fontFamily: '"BBH Sans Bartle", sans-serif',
                  color: '#9ca3af'
                }}>
                  My Philosophy
                </h3>
                <p className="raleway-regular about-philosophy-text" style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.7',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}>
                  "I love exploring new technologies and applying them to solve real-world problems. 
                  When I'm not coding, you might find me exploring new technologies, contributing to 
                  open-source projects, or learning new skills to add to my toolbox."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}