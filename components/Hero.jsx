"use client";

import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-main-container {
            padding: 0 0.5rem !important;
          }
          .hero-robot-section {
            display: none !important;
          }
          .hero-text-section {
            flex: 1 !important;
            max-width: 100% !important;
            padding: 0.25rem 0.5rem 2rem 1rem !important;
          }
          .hero-hello-text {
            font-size: 0.9rem !important;
          }
          .hero-name {
            font-size: 1.5rem !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
          }
          .hero-description {
            font-size: 0.8rem !important;
            max-width: 350px !important;
          }
          .hero-button {
            font-size: 0.8rem !important;
            padding: 0.6rem 1.2rem !important;
          }
          .scroll-indicator {
            display: flex !important;
          }
        }
        
        @keyframes scrollPulse {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(15px); opacity: 0.7; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @media (min-width: 769px) {
          .scroll-indicator {
            display: flex !important;
            position: absolute !important;
            bottom: 1.5rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin: 0 !important;
          }
        }
      `}</style>
    <div className="hero-main-container" style={{ 
      width: '100%', 
      height: '100vh', 
      backgroundColor: 'green',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Left content - Text and Buttons */}
      <div className="hero-text-section" style={{ 
        flex: '1',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: '"Press Start 2P", system-ui'
      }}>
        <p className="hero-hello-text" style={{
          fontSize: '1rem',
          color: '#666666',
          margin: 0,
          marginBottom: '0.5rem'
        }}>
          Hello, my name is
        </p>
        <h1 className="hero-name" style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#000000',
          margin: 0,
          marginBottom: '1rem',
          lineHeight: '1.3',
          letterSpacing: '0.1em',
          fontFamily: '"BBH Sans Bartle", sans-serif'
        }}>
          Abhishek S
        </h1>
        <h2 className="hero-subtitle" style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#333333',
          margin: 0,
          marginBottom: '1.5rem'
        }}>
          I build things for the web & beyond
        </h2>
        <p className="hero-description" style={{
          color: '#666666',
          maxWidth: '500px',
          fontSize: '0.9rem',
          lineHeight: '1.6',
          margin: 0,
          marginBottom: '2rem'
        }}>
          I'm a full stack developer specializing in building exceptional digital experiences using MERN stack, Next.js, Python and more.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <button className="hero-button" style={{
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
            transition: 'all 0.2s'
          }}>
            Get in touch
          </button>
          <button className="hero-button" style={{
            padding: 'clamp(0.5rem, 1.5vw, 0.6rem) clamp(1rem, 3vw, 1.2rem)',
            backgroundColor: 'transparent',
            color: '#000000',
            border: '2px solid #000000',
            borderRadius: '0.5rem',
            fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
            fontWeight: '400',
            fontFamily: '"BBH Sans Bogle", sans-serif',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            View my work
          </button>
        </div>
        
        {/* Scroll indicator for mobile */}
        <div className="scroll-indicator" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '4rem',
          marginLeft: '-0.5rem',
          gap: '0.5rem'
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: '#666666',
            margin: 0,
            fontFamily: '"BBH Sans Bogle", sans-serif'
          }}>
            Scroll down
          </p>
          <div style={{
            width: '2px',
            height: '30px',
            backgroundColor: '#e5e7eb',
            borderRadius: '1px',
            position: 'relative'
          }}>
            <div style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#000000',
              borderRadius: '4px',
              position: 'absolute',
              top: '0',
              animation: 'scrollPulse 2s infinite'
            }}></div>
          </div>
        </div>
      </div>

      {/* Right content - Robot */}
      <div className="hero-robot-section" style={{ 
        flex: '1',
        position: 'relative',
        height: '600px',
        maxWidth: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
    </>
  );
}


