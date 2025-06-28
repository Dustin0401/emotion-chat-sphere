
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

class EllipsoidGeometry extends THREE.SphereGeometry {
  constructor(radiusX = 1, radiusY = 1, radiusZ = 1, widthSegments = 32, heightSegments = 16) {
    super(1, widthSegments, heightSegments);
    
    const vertices = this.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i] *= radiusX;     // x
      vertices[i + 1] *= radiusY; // y  
      vertices[i + 2] *= radiusZ; // z
    }
    
    this.attributes.position.needsUpdate = true;
    this.computeVertexNormals();
  }
}

extend({ EllipsoidGeometry });

export default EllipsoidGeometry;
