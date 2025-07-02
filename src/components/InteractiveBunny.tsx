
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Mic, MicOff } from 'lucide-react';
import { Button } from './ui/button';

const BunnyHead = ({ isListening, lipSyncIntensity }: { isListening: boolean, lipSyncIntensity: number }) => {
  const meshRef = useRef<THREE.Group>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  const earsRef = useRef<THREE.Group>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blinkTime, setBlinkTime] = useState(0);

  // Enhanced mouse tracking with smooth interpolation
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = document.querySelector('canvas')?.getBoundingClientRect();
      if (rect) {
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        setMousePosition({ x: x * 0.8, y: y * 0.6 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkTime(Date.now());
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef.current) {
      // Enhanced head movement following cursor
      const targetRotationY = mousePosition.x * 0.4;
      const targetRotationX = mousePosition.y * 0.3;
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.08
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.08
      );

      // Breathing animation
      const breathe = Math.sin(time * 0.8) * 0.05 + 1;
      meshRef.current.scale.setScalar(breathe);

      // Gentle floating with slight rotation
      meshRef.current.position.y = Math.sin(time * 0.6) * 0.15;
      meshRef.current.position.x = Math.cos(time * 0.4) * 0.05;
    }

    // Enhanced eye movement
    if (eyeLeftRef.current && eyeRightRef.current) {
      const eyeTargetX = mousePosition.x * 0.2;
      const eyeTargetY = mousePosition.y * 0.15;
      
      eyeLeftRef.current.position.x = THREE.MathUtils.lerp(eyeLeftRef.current.position.x, -0.35 + eyeTargetX, 0.1);
      eyeLeftRef.current.position.y = THREE.MathUtils.lerp(eyeLeftRef.current.position.y, 0.4 + eyeTargetY, 0.1);
      
      eyeRightRef.current.position.x = THREE.MathUtils.lerp(eyeRightRef.current.position.x, 0.35 + eyeTargetX, 0.1);
      eyeRightRef.current.position.y = THREE.MathUtils.lerp(eyeRightRef.current.position.y, 0.4 + eyeTargetY, 0.1);

      // Blinking
      const timeSinceBlink = Date.now() - blinkTime;
      const blinkScale = timeSinceBlink < 150 ? 0.1 : 1;
      eyeLeftRef.current.scale.y = THREE.MathUtils.lerp(eyeLeftRef.current.scale.y, blinkScale, 0.3);
      eyeRightRef.current.scale.y = THREE.MathUtils.lerp(eyeRightRef.current.scale.y, blinkScale, 0.3);
    }

    // Ear wiggle when listening
    if (earsRef.current && isListening) {
      earsRef.current.rotation.z = Math.sin(time * 8) * 0.1;
    }

    // Enhanced lip sync
    if (mouthRef.current) {
      const mouthScale = 1 + lipSyncIntensity * 0.8 + (isListening ? Math.sin(time * 12) * 0.2 : 0);
      mouthRef.current.scale.y = THREE.MathUtils.lerp(mouthRef.current.scale.y, mouthScale, 0.2);
      mouthRef.current.scale.x = THREE.MathUtils.lerp(mouthRef.current.scale.x, 1 + lipSyncIntensity * 0.3, 0.2);
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Main Head with improved geometry */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial 
          color="#fafafa" 
          roughness={0.2} 
          metalness={0.05}
        />
      </mesh>
      
      {/* Bunny Ears with enhanced shape */}
      <group ref={earsRef}>
        <mesh position={[-0.4, 1.8, -0.2]} rotation={[0.1, 0, -0.3]}>
          <capsuleGeometry args={[0.2, 0.8, 4, 16]} />
          <meshStandardMaterial color="#fafafa" roughness={0.2} metalness={0.05} />
        </mesh>
        <mesh position={[0.4, 1.8, -0.2]} rotation={[0.1, 0, 0.3]}>
          <capsuleGeometry args={[0.2, 0.8, 4, 16]} />
          <meshStandardMaterial color="#fafafa" roughness={0.2} metalness={0.05} />
        </mesh>
        
        {/* Inner ears with gradient */}
        <mesh position={[-0.4, 1.6, 0]} rotation={[0.1, 0, -0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffb3d9" roughness={0.3} />
        </mesh>
        <mesh position={[0.4, 1.6, 0]} rotation={[0.1, 0, 0.2]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffb3d9" roughness={0.3} />
        </mesh>
      </group>
      
      {/* Enhanced Eyes with dynamic movement */}
      <mesh ref={eyeLeftRef} position={[-0.35, 0.4, 0.8]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      <mesh ref={eyeRightRef} position={[0.35, 0.4, 0.8]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      
      {/* Eye highlights with glow */}
      <mesh position={[-0.32, 0.48, 0.95]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0.38, 0.48, 0.95]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Cute button nose */}
      <mesh position={[0, 0.05, 1.05]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial 
          color="#ff6b9d" 
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
      
      {/* Enhanced mouth with lip sync animation */}
      <mesh ref={mouthRef} position={[0, -0.25, 0.98]}>
        <sphereGeometry args={[0.08, 16, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Cute whiskers */}
      <mesh position={[-0.8, 0.1, 0.9]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[0.8, 0.1, 0.9]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[-0.8, 0, 0.9]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[0.8, 0, 0.9]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 8]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      
      {/* Soft cheeks with subtle glow */}
      <mesh position={[-0.75, -0.1, 0.6]}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial 
          color="#ffcce6" 
          opacity={0.7} 
          transparent
          emissive="#ffb3d9"
          emissiveIntensity={isListening ? 0.3 : 0.1}
        />
      </mesh>
      <mesh position={[0.75, -0.1, 0.6]}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial 
          color="#ffcce6" 
          opacity={0.7} 
          transparent
          emissive="#ffb3d9"
          emissiveIntensity={isListening ? 0.3 : 0.1}
        />
      </mesh>
      
      {/* Listening indicator particles */}
      {isListening && (
        <>
          <mesh position={[-1.5, 0.5, 0]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial 
              color="#84cc16" 
              emissive="#84cc16"
              emissiveIntensity={0.8}
            />
          </mesh>
          <mesh position={[1.5, 0.5, 0]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial 
              color="#84cc16" 
              emissive="#84cc16"
              emissiveIntensity={0.8}
            />
          </mesh>
        </>
      )}
    </group>
  );
};

const FallbackBunny = () => (
  <div className="w-80 h-80 flex items-center justify-center">
    <div className="text-6xl animate-bounce">🐰</div>
  </div>
);

const InteractiveBunny = () => {
  const [isListening, setIsListening] = useState(false);
  const [lipSyncIntensity, setLipSyncIntensity] = useState(0);

  // Simulate lip sync from speech
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setLipSyncIntensity(Math.random() * 0.8 + 0.2);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setLipSyncIntensity(0);
    }
  }, [isListening]);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Add actual voice recognition logic here
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* 3D Bunny */}
      <div className="w-80 h-80">
        <Suspense fallback={<FallbackBunny />}>
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 50 }}
            onError={(error) => {
              console.error('Canvas error:', error);
            }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#84cc16" />
            <spotLight position={[0, 5, 5]} intensity={0.8} color="#ffffff" />
            <BunnyHead isListening={isListening} lipSyncIntensity={lipSyncIntensity} />
          </Canvas>
        </Suspense>
      </div>

      {/* Voice Input Button with Glassmorphism */}
      <Button
        onClick={handleVoiceToggle}
        className={`
          relative w-16 h-16 rounded-full border-0
          backdrop-blur-md bg-white/10 
          hover:bg-white/20 active:bg-white/30
          shadow-lg shadow-black/20
          border border-white/20
          transition-all duration-300 ease-out
          ${isListening ? 'ring-2 ring-primary ring-opacity-50 animate-pulse' : ''}
          group
        `}
      >
        <div className="relative">
          {isListening ? (
            <MicOff className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Mic className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          )}
          
          {/* Glowing orb effect when listening */}
          {isListening && (
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          )}
        </div>
        
        {/* Glassmorphism reflection effect */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-20" />
      </Button>
      
      {/* Status indicator */}
      <div className="text-center">
        <p className="text-sm text-gray-400">
          {isListening ? 'Listening...' : 'Click to talk with BIONIC'}
        </p>
      </div>
    </div>
  );
};

export default InteractiveBunny;
