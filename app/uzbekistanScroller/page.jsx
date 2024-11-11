"use client"

import React, { useEffect, useState } from 'react';
import { motion,  useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const UzbekistanInfoViewer = () => {
  const { scrollY } = useViewportScroll();

  // Set up transformations for text panels
  const leftInfoX = useTransform(scrollY, [0, 400], [0, -200]); // Move left on scroll
  const rightInfoX = useTransform(scrollY, [0, 400], [0, 200]); // Move right on scroll

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component is only rendered on the client
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Left Panel */}
      <motion.div
        style={{
          x: leftInfoX,
          position: 'fixed',
          top: '20%',
          left: '5%',
          width: '20%',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          borderRadius: '8px'
        }}
      >
        <h2>About Uzbekistan</h2>
        <p>
          Uzbekistan is known for its rich cultural heritage, incredible architectural landmarks, 
          and historic cities along the Silk Road.
        </p>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        style={{
          x: rightInfoX,
          position: 'fixed',
          top: '60%',
          right: '5%',
          width: '20%',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          borderRadius: '8px'
        }}
      >
        <h2>Explore More</h2>
        <p>
          Discover more about the history, art, and natural beauty of Uzbekistan 
          as you scroll through.
        </p>
      </motion.div>

      {/* 3D Model Canvas (Client-Side Only) */}
      {isClient && (
        <div style={{ position: 'absolute', top: '10%', left: '50%', width: '80%', height: '80vh' }}>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {/* Your 3D Model */}
            <Uzbekistan3DModel />
            
            <OrbitControls />
          </Canvas>
        </div>
      )}
    </div>
  );
};

// 3D Model Component
const Uzbekistan3DModel = () => {
  const { scene } = useGLTF('/models/Uzbekistan.glb'); // Provide the path to your .glb model

  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
};

export default UzbekistanInfoViewer;
