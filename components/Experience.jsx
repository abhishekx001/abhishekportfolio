"use client";

export default function Experience() {
  const timelineItems = [
    {
      type: "experience",
      date: "Aug 2025 - Present",
      title: "Software Developer Intern",
      subtitle: "Koott Wellness, Kozhikode",
      description: "Building robust server-side solutions and contributing to the development of wellness platform features.",
      icon: "💼",
      color: "#3b82f6"
    },
    {
      type: "experience",
      date: "Jun 2025 - Jul 2025",
      title: "Django Intern",
      subtitle: "Weband Crafts, InfoPark Koratty, Thrissur",
      description: "Gained hands-on experience in Django framework and Python development in a professional environment.",
      icon: "🐍",
      color: "#10b981"
    },
    {
      type: "education",
      date: "2023 - 2027",
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Nehru College of Engineering and Research Centre, Thrissur, Kerala",
      description: "Pursuing comprehensive studies in computer science fundamentals, algorithms, data structures, and software engineering principles.",
      icon: "🎓",
      color: "#8b5cf6"
    },
    {
      type: "journey",
      date: "Start",
      title: "Beginning of Journey",
      subtitle: "My coding journey started here",
      description: "Started my coding journey with web development fundamentals and programming basics.",
      icon: "🚀",
      color: "#ef4444"
    }
  ];

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
          .experience-container {
            padding: 2rem 0.5rem 2rem 0 !important;
            overflow-x: hidden !important;
          }
          .experience-main-card {
            margin: 0 !important;
          }
          .experience-header {
            padding: 2rem 1.5rem !important;
          }
          .experience-content {
            padding: 2rem 0.5rem 2rem 1rem !important;
            overflow-x: hidden !important;
          }
          .experience-main-title {
            font-size: 2rem !important;
          }
          .experience-subtitle {
            font-size: 1.25rem !important;
          }
          .experience-description {
            font-size: 1rem !important;
          }
          .timeline-container {
            margin: 0 !important;
            padding-left: 2rem !important;
          }
          .timeline-item {
            margin-bottom: 2rem !important;
            padding: 1rem !important;
          }
          .timeline-date {
            font-size: 0.75rem !important;
          }
          .timeline-title {
            font-size: 1rem !important;
          }
          .timeline-subtitle {
            font-size: 0.75rem !important;
          }
          .timeline-description {
            font-size: 0.75rem !important;
          }
          .timeline-icon {
            width: 1.25rem !important;
            height: 1.25rem !important;
            left: -1.75rem !important;
            top: 1.75rem !important;
          }
          .timeline-dot {
            left: -1.25rem !important;
            top: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .experience-container {
            padding: 1rem 0.25rem 1rem 0 !important;
          }
          .experience-header {
            padding: 1.5rem 1rem !important;
          }
          .experience-content {
            padding: 1.5rem 0.25rem 1.5rem 0.5rem !important;
          }
          .experience-main-title {
            font-size: 1.75rem !important;
          }
          .experience-subtitle {
            font-size: 1rem !important;
          }
          .experience-description {
            font-size: 0.875rem !important;
          }
          .timeline-container {
            padding-left: 1.5rem !important;
          }
          .timeline-item {
            margin-bottom: 1.5rem !important;
            padding: 0.75rem !important;
          }
          .timeline-date {
            font-size: 0.625rem !important;
          }
          .timeline-title {
            font-size: 0.875rem !important;
          }
          .timeline-subtitle {
            font-size: 0.625rem !important;
          }
          .timeline-description {
            font-size: 0.625rem !important;
          }
          .timeline-icon {
            width: 1rem !important;
            height: 1rem !important;
            left: -1.25rem !important;
            top: 1.75rem !important;
          }
          .timeline-dot {
            left: -0.75rem !important;
            top: 1.875rem !important;
            width: 0.75rem !important;
            height: 0.75rem !important;
          }
        }
      `}</style>
      <div id="experience" className="experience-container" style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        padding: '5rem 2rem',
        fontFamily: '"BBH Sans Bogle", sans-serif'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Container */}
        <div className="experience-main-card" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Header Section */}
          <div className="experience-header" style={{
            background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
            padding: '4rem 3rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <h1 className="experience-main-title" style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              fontFamily: '"BBH Sans Bartle", sans-serif',
              lineHeight: '1.1'
            }}>
              Experience & Education
            </h1>
            <p className="experience-subtitle" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              fontFamily: '"BBH Sans Bogle", sans-serif',
              letterSpacing: '0.05em'
            }}>
              My journey so far
            </p>
          </div>

          {/* Content Section */}
          <div className="experience-content" style={{ padding: '4rem 3rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* Description */}
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <p className="raleway-regular experience-description" style={{
                  fontSize: '1.125rem',
                  color: '#9ca3af',
                  lineHeight: '1.7',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Here's a timeline of my professional journey, education, and key experiences that have shaped my career.
                </p>
              </div>

              {/* Timeline Container */}
              <div className="timeline-container" style={{
                position: 'relative',
                paddingLeft: '2rem'
              }}>
                {/* Timeline Line */}
                <div style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '0',
                  bottom: '0',
                  width: '2px',
                  background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981)'
                }} />

                {/* Timeline Items */}
                {timelineItems.map((item, index) => (
                  <div key={index} className="timeline-item" style={{
                    position: 'relative',
                    marginBottom: '3rem',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}>
                    {/* Timeline Dot */}
                    <div className="timeline-dot" style={{
                      position: 'absolute',
                      left: '-3rem',
                      top: '2rem',
                      width: '1rem',
                      height: '1rem',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      border: '3px solid #1a1a1a',
                      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.3)'
                    }} />

                    {/* Dot */}
                    <div className="timeline-icon" style={{
                      position: 'absolute',
                      left: '-3.5rem',
                      top: '1.75rem',
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: item.color,
                      borderRadius: '50%',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    }}>
                    </div>

                    {/* Content */}
                    <div style={{ marginLeft: '1rem' }}>
                      {/* Date */}
                      <div className="timeline-date" style={{
                        color: item.color,
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {item.date}
                      </div>

                      {/* Title */}
                      <h3 className="timeline-title" style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'white',
                        marginBottom: '0.5rem',
                        fontFamily: '"BBH Sans Bartle", sans-serif'
                      }}>
                        {item.title}
                      </h3>

                      {/* Subtitle */}
                      <h4 className="timeline-subtitle" style={{
                        fontSize: '0.875rem',
                        fontWeight: '400',
                        color: '#e5e7eb',
                        marginBottom: '1rem',
                        fontFamily: '"BBH Sans Bogle", sans-serif'
                      }}>
                        {item.subtitle}
                      </h4>

                      {/* Description */}
                      <p className="raleway-regular timeline-description" style={{
                        fontSize: '0.875rem',
                        color: '#d1d5db',
                        lineHeight: '1.6',
                        margin: '0'
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
