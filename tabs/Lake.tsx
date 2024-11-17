// Lake.tsx
import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

// Define GLTF result type (omit animations if not needed)
type GLTFResult = GLTF & {
  nodes: {
    EXPORT_GOOGLE_SAT_WM: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    rastMat: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

export default function Lake(props: JSX.IntrinsicElements['group']) {
  // Update model path to correct relative path for Webpack/static resources
  const { nodes, materials } = useGLTF(require('../assets/images/LagunaLake3D.glb')) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.EXPORT_GOOGLE_SAT_WM.geometry} material={materials.rastMat} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0, 0, 0]} />
    </group>
  );
}

// Preload the GLTF model for better performance
useGLTF.preload('../assets/images/LagunaLake3D.glb');
