// monitoringTab.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lake from './Lake'; 

export default function MonitoringTab() {
  return (
    <div style={styles.container}>
      <Canvas style={styles.canvas} camera={{ position: [0, 1, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={<div>Loading model...</div>}>
          <Lake />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  canvas: {
    width: '100%',
    height: '100%',
  },
};
