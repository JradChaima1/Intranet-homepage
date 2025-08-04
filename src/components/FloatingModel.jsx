import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingModel(props) {
  const { scene } = useGLTF('/3model/base_basic_pbr.glb');
  const modelRef = useRef();

  // Apply glowing, metallic, smooth materials
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.metalness = 1;
        child.material.roughness = 0.2;
     
      
      }
    });
  }, [scene]);

  // Floating animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(time) * 0.2;
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}

useGLTF.preload('/3model/base_basic_pbr.glb');
