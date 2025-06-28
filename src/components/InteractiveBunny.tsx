
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import '../components/EllipsoidGeometry';

const BunnyHead = () => {
  const meshRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLipSyncing, setIsLipSyncing] = useState(false);
  const { viewport } = useThree();

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulate lip sync animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLipSyncing(prev => !prev);
    }, 800 + Math.random() * 400);

    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Follow mouse with eyes/head
      const targetRotationY = mousePosition.x * 0.3;
      const targetRotationX = mousePosition.y * 0.2;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.05
      );

      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Bunny Head */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Bunny Ears */}
      <mesh position={[-0.4, 1.8, -0.2]} rotation={[0, 0, -0.3]}>
        <ellipsoidGeometry args={[0.3, 1.2, 0.2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0.4, 1.8, -0.2]} rotation={[0, 0, 0.3]}>
        <ellipsoidGeometry args={[0.3, 1.2, 0.2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Inner ears */}
      <mesh position={[-0.4, 1.6, 0]}>
        <ellipsoidGeometry args={[0.15, 0.8, 0.1]} />
        <meshStandardMaterial color="#ffb3d9" roughness={0.4} />
      </mesh>
      <mesh position={[0.4, 1.6, 0]}>
        <ellipsoidGeometry args={[0.15, 0.8, 0.1]} />
        <meshStandardMaterial color="#ffb3d9" roughness={0.4} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.35, 0.4, 0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.35, 0.4, 0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Eye highlights */}
      <mesh position={[-0.32, 0.45, 0.9]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.38, 0.45, 0.9]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, 0.1, 1]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffb3d9" />
      </mesh>
      
      {/* Mouth - animated for lip sync */}
      <mesh position={[0, -0.2, 0.95]} scale={[1, isLipSyncing ? 1.5 : 1, 1]}>
        <ellipsoidGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Cheeks */}
      <mesh position={[-0.7, 0, 0.6]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#ffe6f2" opacity={0.8} transparent />
      </mesh>
      <mesh position={[0.7, 0, 0.6]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#ffe6f2" opacity={0.8} transparent />
      </mesh>
    </group>
  );
};

const InteractiveBunny = () => {
  return (
    <div className="w-80 h-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#84cc16" />
        <BunnyHead />
      </Canvas>
    </div>
  );
};

export default InteractiveBunny;
