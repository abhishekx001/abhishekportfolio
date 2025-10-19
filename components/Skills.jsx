"use client";

export default function Skills() {
  const skills = [
    {
      icon: "< >",
      title: "Frontend Development",
      description: "Creating responsive user interfaces with React.js and Next.js. Experienced with modern CSS frameworks."
    },
    {
      icon: ">_",
      title: "Backend Development", 
      description: "Building robust APIs with Node.js, Express, Python, Django, and FastAPI for scalable applications."
    },
    {
      icon: "🌐",
      title: "3D Web Development",
      description: "Implementing interactive 3D experiences using Three.js to create immersive web applications."
    },
    {
      icon: "🗄️",
      title: "Database Management",
      description: "Working with MongoDB, SQL databases, Firebase, and Supabase for efficient data storage solutions."
    },
    {
      icon: "⚙️",
      title: "AI & Machine Learning",
      description: "Leveraging generative AI and building ML models with Python and Google Colab for intelligent features."
    },
    {
      icon: "☁️",
      title: "Cloud Storage Management",
      description: "Managing and optimizing cloud storage solutions, ensuring data availability, scalability, and security on platforms."
    }
  ];

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .skills-container {
            padding: 3rem 0.5rem 3rem 0 !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin: 0 !important;
          }
          .skills-card {
            margin: 0 !important;
            padding: 1rem !important;
            max-width: 100% !important;
          }
          .skills-card h3 {
            font-size: 1rem !important;
          }
          .skills-card p {
            font-size: 0.8rem !important;
          }
          .skills-card .icon-container {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .skills-card .icon-container span {
            font-size: 1.25rem !important;
          }
          .tech-buttons {
            margin: 0 0.5rem !important;
            gap: 0.5rem !important;
          }
          .skills-title {
            font-size: 2rem !important;
          }
          .tech-title {
            font-size: 1.25rem !important;
            margin-bottom: 2rem !important;
          }
          .tech-button {
            padding: 0.5rem 1rem !important;
            font-size: 0.8rem !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
      <div className="skills-container" style={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        padding: '5rem 2rem',
        fontFamily: '"BBH Sans Bogle", sans-serif'
      }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
           <h2 className="skills-title" style={{
             fontSize: '3rem',
             fontWeight: '600',
             color: 'white',
             marginBottom: '1rem',
             fontFamily: '"BBH Sans Bartle", sans-serif'
           }}>
            Skills & Expertise
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#9ca3af',
            maxWidth: '600px',
            margin: '0 auto',
            letterSpacing: '0.02em'
          }}>
            Here are the technologies and skills I work with to create amazing digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          rowGap: '3rem',
          columnGap: '3rem'
        }}>
          {skills.map((skill, index) => (
            <div key={index} className="skills-card" style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '0.5px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Icon */}
              <div className="icon-container" style={{
                width: '3rem',
                height: '3rem',
                background: 'linear-gradient(135deg, #374151 0%, #4b5563 100%)',
                borderRadius: '12px',
                border: '0.5px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {skill.icon}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.75rem',
                fontFamily: '"BBH Sans Bartle", sans-serif',
                letterSpacing: '0.025em'
              }}>
                {skill.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#d1d5db',
                lineHeight: '1.6',
                flex: 1,
                letterSpacing: '0.015em'
              }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div style={{ marginTop: '6rem' }}>
          <h3 className="tech-title" style={{
            fontSize: '2.5rem',
            fontWeight: '500',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: '"BBH Sans Bartle", sans-serif',
            letterSpacing: '0.05em'
          }}>
            Technologies I work with
          </h3>
          
          <div className="tech-buttons" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              'React.js', 'Node.js', 'Express.js', 'Mongo DB', 'Next.js', 'Three.js',
              'Django', 'FastAPI', 'Python', 'Javascript', 'Supabase',
              'Firebase', 'Figma', 'Flask', 'Tailwind CSS', 'Git'
            ].map((tech, index) => (
              <div
                key={index}
                className="tech-button"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  padding: '0.75rem 1.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
