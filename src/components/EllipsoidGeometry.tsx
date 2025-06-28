
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

class EllipsoidGeometry extends THREE.SphereGeometry {
  constructor(radiusX = 1, radiusY = 1, radiusZ = 1, widthSegments = 16, heightSegments = 12) {
    super(1, widthSegments, heightSegments);
    
    try {
      const vertices = this.attributes.position.array as Float32Array;
      for (let i = 0; i < vertices.length; i += 3) {
        vertices[i] *= radiusX;     // x
        vertices[i + 1] *= radiusY; // y  
        vertices[i + 2] *= radiusZ; // z
      }
      
      this.attributes.position.needsUpdate = true;
      this.computeVertexNormals();
    } catch (error) {
      console.error('Error creating ellipsoid geometry:', error);
    }
  }
}

extend({ EllipsoidGeometry });

// TypeScript declaration for JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ellipsoidGeometry: THREE.Object3DNode<EllipsoidGeometry, typeof EllipsoidGeometry>;
    }
  }
}

export { EllipsoidGeometry };
export default EllipsoidGeometry;
