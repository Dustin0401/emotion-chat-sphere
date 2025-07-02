
import React, { useState, useEffect, Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, MicOff } from 'lucide-react';
import { Button } from './ui/button';

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
      {/* 3D Model */}
      <div className="w-80 h-80 relative overflow-hidden spline-container">
        <Suspense fallback={<FallbackBunny />}>
          <Spline
            scene="https://prod.spline.design/MOC9XDpyPUXlayf1/scene.splinecode"
            style={{ 
              background: 'transparent',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
            onLoad={(spline: any) => {
              // More comprehensive approach to disable interactions
              if (spline) {
                // Disable mouse controls
                spline.setVariable?.('Mouse X', 0);
                spline.setVariable?.('Mouse Y', 0);
                
                // Try to access and modify the canvas directly
                const canvas = spline.canvas;
                if (canvas) {
                  canvas.style.background = 'transparent';
                  canvas.style.pointerEvents = 'none';
                }
                
                // Disable orbit controls if they exist
                if (spline.controls) {
                  spline.controls.enabled = false;
                }
              }
            }}
          />
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
