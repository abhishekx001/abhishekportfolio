"use client";

import { SplineScene } from "@/components/ui/splite";

export default function Hero() {
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative', overflow: 'visible', backgroundColor: 'white' }}>
      <div style={{ 
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        padding: '0 2rem'
      }}>
        {/* Left content */}
        <div style={{ 
          flex: '1',
          padding: '2rem',
          paddingTop: '22rem',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: '"Press Start 2P", system-ui'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#666666',
            margin: 0,
            marginBottom: '0.5rem'
          }}>
            Hello, my name is
          </p>
          <h1 style={{
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
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#333333',
            margin: 0,
            marginBottom: '1.5rem'
          }}>
            I build things for the web & beyond
          </h2>
          <p style={{
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
            <button style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: '#000000',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: '400',
              fontFamily: '"BBH Sans Bogle", sans-serif',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              Get in touch
            </button>
            <button style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: 'transparent',
              color: '#000000',
              border: '2px solid #000000',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: '400',
              fontFamily: '"BBH Sans Bogle", sans-serif',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}>
              View my work
            </button>
          </div>
        </div>

        {/* Right content - Robot */}
        <div style={{ 
          flex: '1',
          position: 'relative',
          height: '160%',
          marginTop: 'auto',
          alignSelf: 'flex-end',
          transform: 'translateY(4rem)'
        }}>
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}


