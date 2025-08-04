import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // <-- use slim version!

export default function StarParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // <-- fix here
  }, []);

  return (
    <Particles
      id="star-bg"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '#000000',
          },
        },
        particles: {
          number: {
            value: 250,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
          move: {
            enable: true,
            speed: 0.15,
            direction: 'none',
            outModes: {
              default: 'out',
            },
          },
          opacity: {
            value: 0.8,
          },
        },
      }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
