import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  @media (max-width: 768px) {
    display: ${props => props.mobileDisabled ? 'none' : 'block'};
  }
`;

// Detect mobile devices
const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.matchMedia && window.matchMedia("(max-width: 768px)").matches);
};

const Stars = (props) => {
  const ref = useRef();
  const [sphere, setSphere] = useState(() => {
    try {
      // Reduce particle count on mobile for performance
      const count = isMobileDevice() ? 1500 : 3000;
      const arr = new Float32Array(count * 3);
      
      // Manual sphere generation with strict validation to avoid NaN issues
      for (let i = 0; i < count; i++) {
        let x = 0, y = 0, z = 0;
        let attempts = 0;
        
        // Retry logic to ensure valid values
        while ((!isFinite(x) || !isFinite(y) || !isFinite(z)) && attempts < 10) {
          const theta = Math.random() * Math.PI * 2;
          const u = Math.random();
          const phi = Math.acos(2 * u - 1);
          const radius = 1.2;
          
          const sinPhi = Math.sin(phi);
          x = radius * sinPhi * Math.cos(theta);
          y = radius * sinPhi * Math.sin(theta);
          z = radius * Math.cos(phi);
          attempts++;
        }
        
        // Ensure all values are finite and valid
        arr[i * 3] = isFinite(x) && !isNaN(x) ? Math.max(-10, Math.min(10, x)) : 0;
        arr[i * 3 + 1] = isFinite(y) && !isNaN(y) ? Math.max(-10, Math.min(10, y)) : 0;
        arr[i * 3 + 2] = isFinite(z) && !isNaN(z) ? Math.max(-10, Math.min(10, z)) : 0;
      }
      
      // Final validation pass
      for (let i = 0; i < arr.length; i++) {
        if (!isFinite(arr[i]) || isNaN(arr[i])) {
          arr[i] = 0;
        }
      }
      
      return arr;
    } catch (error) {
      console.warn('Stars initialization error:', error);
      // Fallback to simple array with all zeros (invisible stars)
      return new Float32Array(1500 * 3).fill(0);
    }
  });

  useFrame((state, delta) => {
    if (ref.current?.rotation && isFinite(delta)) {
      ref.current.rotation.x = (ref.current.rotation.x || 0) - delta / 10;
      ref.current.rotation.y = (ref.current.rotation.y || 0) - delta / 15;
    }
  });

  // Don't render if sphere array is invalid
  if (!sphere || sphere.length === 0) {
    return null;
  }

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isMobileDevice() ? 0.003 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (e) {
      setWebglSupported(false);
    }
  }, []);

  // Disable 3D on mobile or if WebGL not supported
  if (isMobile || !webglSupported) {
    return (
      <StyledCanvasWrapper mobileDisabled={true}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(242, 114, 200, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
      </StyledCanvasWrapper>
    );
  }

  return (
    <StyledCanvasWrapper>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          preserveDrawingBuffer: false, 
          powerPreference: "high-performance",
          antialias: false,
          alpha: true
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
