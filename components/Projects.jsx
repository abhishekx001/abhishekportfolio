"use client";

export default function Projects() {
  const projects = [
    {
      title: "Doctor Management System",
      description: "A comprehensive healthcare management platform built with Django, featuring patient records, appointment scheduling, and medical history tracking.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS", "Bootstrap"],
      status: null,
      icon: "🏥",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    },
    {
      title: "EduNet Website",
      description: "An educational platform designed with React, offering interactive learning modules, course management, and student progress tracking.",
      technologies: ["React.js", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS"],
      status: null, 
      icon: "🎓",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
    },
    {
      title: "Koott Wellness Frontend",
      description: "A modern wellness platform frontend featuring user-friendly interfaces, health tracking, and seamless user experience.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Figma"],
      status: "Ongoing",
      icon: "💚",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    },
    {
      title: "E-Commerce Website",
      description: "A comprehensive e-commerce platform built with Django and MySQL, featuring product catalog, shopping cart, payment processing, and admin panel.",
      technologies: ["Django", "Python", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
      status: null,
      icon: "🛒",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
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
          .projects-container {
            padding: 2rem 0.5rem 2rem 0 !important;
            overflow-x: hidden !important;
          }
          .projects-main-card {
            margin: 0 !important;
          }
          .projects-header {
            padding: 2rem 1.5rem !important;
          }
          .projects-content {
            padding: 2rem 0.5rem 2rem 1rem !important;
            overflow-x: hidden !important;
          }
          .projects-main-title {
            font-size: 2rem !important;
          }
          .projects-subtitle {
            font-size: 1.25rem !important;
          }
          .projects-description {
            font-size: 1rem !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin: 0 0 2rem 0 !important;
          }
          .project-card {
            padding: 1.5rem !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .project-card-title {
            font-size: 1.125rem !important;
          }
          .project-card-description {
            font-size: 0.9rem !important;
          }
          .tech-badge {
            padding: 0.25rem 0.75rem !important;
            font-size: 0.75rem !important;
            margin: 0.25rem !important;
          }
        }
      `}</style>
      <div id="projects" className="projects-container" style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        padding: '5rem 2rem',
        fontFamily: '"BBH Sans Bogle", sans-serif'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Container */}
        <div className="projects-main-card" style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e5e7eb',
          overflow: 'hidden'
        }}>
          {/* Header Section */}
          <div className="projects-header" style={{
            background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)',
            padding: '4rem 3rem',
            color: 'white',
            textAlign: 'center'
          }}>
            <h1 className="projects-main-title" style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              fontFamily: '"BBH Sans Bartle", sans-serif',
              lineHeight: '1.1'
            }}>
              My Projects
            </h1>
            <p className="projects-subtitle" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              fontFamily: '"BBH Sans Bogle", sans-serif',
              letterSpacing: '0.05em'
            }}>
              Check out some of my recent work
            </p>
          </div>

          {/* Content Section */}
          <div className="projects-content" style={{ padding: '4rem 3rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {/* Description */}
              <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <p className="raleway-regular projects-description" style={{
                  fontSize: '1.125rem',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Each project represents different technologies and problem-solving approaches.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="projects-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                {projects.map((project, index) => (
                  <div key={index} className="project-card" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -4px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }}>
                    {/* Status Badge */}
                    {project.status && (
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: project.status === 'Ongoing' 
                          ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                          : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {project.status}
                      </div>
                    )}

                    {/* Project Icon */}
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      background: project.gradient,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.2)'
                    }}>
                      <span style={{ color: 'white', fontSize: '2rem' }}>
                        {project.icon}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="project-card-title" style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      marginBottom: '1rem',
                      fontFamily: '"BBH Sans Bartle", sans-serif',
                      lineHeight: '1.3'
                    }}>
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="raleway-regular project-card-description" style={{
                      fontSize: '1rem',
                      color: '#4b5563',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge" style={{
                          backgroundColor: '#f3f4f6',
                          color: '#374151',
                          padding: '0.375rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          border: '1px solid #e5e7eb'
                        }}>
                          {tech}
                        </span>
                      ))}
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
