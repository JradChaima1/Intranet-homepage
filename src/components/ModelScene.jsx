import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Stars, Float, Sparkles, Cloud } from '@react-three/drei';
import { FloatingModel } from './FloatingModel';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// Animated light beams component
function AnimatedLightBeams() {
  const beamRefs = useRef([]);
  
  useFrame((state) => {
    beamRefs.current.forEach((beam, index) => {
      if (beam) {
        beam.rotation.z = state.clock.elapsedTime * (0.3 + index * 0.1);
        beam.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
      }
    });
  });

  return (
    <group>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (beamRefs.current[i] = el)}
          position={[0, 0, -2]}
          rotation={[0, 0, i * Math.PI / 3]}
        >
          <planeGeometry args={[20, 0.1]} />
          <meshBasicMaterial 
            color={new THREE.Color().setHSL(0.6 + i * 0.1, 0.8, 0.6)}
            transparent 
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating particles
function FloatingParticles() {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      <Sparkles 
        count={50} 
        scale={6} 
        size={3} 
        speed={0.5}
        color="#6366f1"
      />
    </group>
  );
}

// SVG ICON COMPONENTS with enhanced styling
function HomeIconSVG() {
  return (
    <svg fill="currentColor" width="24" height="24" viewBox="0 0 495.398 495.398" className="drop-shadow-lg">
      <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
      <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
    </svg>
  );
}

function ProjectsIconSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="drop-shadow-lg">
      <rect x="4" y="6" width="20" height="16" rx="4" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="12" height="8" rx="2" fill="currentColor" opacity="0.6"/>
      <rect x="12" y="14" width="4" height="4" rx="1" fill="currentColor"/>
    </svg>
  );
}

function TeamsIconSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="drop-shadow-lg">
      <circle cx="9" cy="12" r="4" fill="currentColor" opacity="0.8"/>
      <circle cx="19" cy="12" r="4" fill="currentColor" opacity="0.8"/>
      <ellipse cx="14" cy="20" rx="9" ry="4" fill="currentColor" opacity="0.6"/>
      <circle cx="14" cy="8" r="4" fill="currentColor"/>
    </svg>
  );
}

function MeetingsIconSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="drop-shadow-lg">
      <rect x="4" y="6" width="20" height="16" rx="4" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="12" height="8" rx="2" fill="currentColor" opacity="0.6"/>
      <circle cx="14" cy="14" r="2" fill="currentColor"/>
    </svg>
  );
}

function NewsIconSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="drop-shadow-lg">
      <rect x="4" y="6" width="20" height="16" rx="4" fill="currentColor" opacity="0.8"/>
      <rect x="8" y="10" width="12" height="4" rx="2" fill="currentColor" opacity="0.6"/>
      <rect x="8" y="16" width="8" height="2" rx="1" fill="currentColor"/>
    </svg>
  );
}

function PerformanceIconSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="drop-shadow-lg">
      <circle cx="14" cy="14" r="12" fill="currentColor" opacity="0.8"/>
      <path d="M14 14 L14 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 14 L20 18" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <circle cx="14" cy="14" r="3" fill="white"/>
    </svg>
  );
}

const icons = [
  { 
    icon: <HomeIconSVG />, 
    section: 'home', 
    label: 'Home',
    color: 'from-cyan-400 to-blue-500'
  },
  { 
    icon: <ProjectsIconSVG />, 
    section: 'projects', 
    label: 'Projects',
    color: 'from-green-400 to-teal-500'
  },
  { 
    icon: <TeamsIconSVG />, 
    section: 'teams', 
    label: 'Teams',
    color: 'from-purple-400 to-pink-500'
  },
  { 
    icon: <MeetingsIconSVG />, 
    section: 'meetings', 
    label: 'Meetings',
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    icon: <NewsIconSVG />, 
    section: 'announcements', 
    label: 'News',
    color: 'from-pink-400 to-red-500'
  },
  { 
    icon: <PerformanceIconSVG />, 
    section: 'performance', 
    label: 'Performance',
    color: 'from-indigo-400 to-purple-500'
  }
];

function RotatingIcons({ onSectionClick }) {
  const [radius, setRadius] = useState(getRadius());

  function getRadius() {
    if (window.innerWidth < 640) return 140;
    if (window.innerWidth < 1024) return 160;
    return 190;
  }

  useEffect(() => {
    function handleResize() {
      setRadius(getRadius());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {icons.map((item, index) => {
          const angle = (index * 360) / icons.length;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div
              key={item.section}
              className="absolute left-1/2 top-1/2 pointer-events-auto"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-angle}deg)`,
              }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center cursor-pointer border-2 border-white/30 shadow-lg backdrop-blur-sm transition-all`}
                onClick={() => onSectionClick(item.section)}
              >
                <span className="text-white text-xl">{item.icon}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}


// Enhanced background with gaming theme
function GameDevBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>
      
      {/* Gaming elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-500 rounded-full animate-bounce" />
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      
      {/* Circuit-like lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
        <path 
          d="M0,150 Q100,50 200,150 T400,150" 
          stroke="url(#gradient1)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
        />
        <path 
          d="M0,100 Q150,200 300,100" 
          stroke="url(#gradient2)" 
          strokeWidth="1" 
          fill="none"
          style={{ animationDelay: '1s' }}
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function ModelScene() {
  const handleSectionClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
      {/* Enhanced background */}
      <GameDevBackground />
      
      {/* Multiple glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />

      {/* 3D Scene */}
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        className="relative z-10"
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Enhanced lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#6366f1" />
          <pointLight position={[-10, -10, 5]} intensity={0.5} color="#ec4899" />
          <spotLight 
            position={[0, 10, 0]} 
            angle={0.3} 
            penumbra={1} 
            intensity={0.5}
            color="#06b6d4"
            castShadow
          />
          
          {/* Animated background elements */}
          <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
          <AnimatedLightBeams />
          <FloatingParticles />
          
          {/* Main model with float animation */}
          <Float
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[0, 0.5]}
          >
            <Stage environment="city" intensity={0.6}>
              <FloatingModel />
            </Stage>
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate={true}
            autoRotateSpeed={0.5}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>

      {/* Orbiting Icons with enhanced styling */}
      <RotatingIcons onSectionClick={handleSectionClick} />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-pink-400/50 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/50 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400/50 rounded-br-lg" />
      
      {/* Pulsing center indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/20 rounded-full animate-ping z-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full z-30" />
    </div>
  );
}

// Add keyframes for grid animation
const style = document.createElement('style');
style.textContent = `
  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;
document.head.appendChild(style);