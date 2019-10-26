import Scene from './Scene';
import * as THREE from 'three';

export default class SceneGeometry extends Scene {
  public geometry: THREE.IcosahedronGeometry;

  createGeometry() {
    this.geometry = new THREE.IcosahedronGeometry(120, 4);
  }

  cloneVectors() {
    for (const vector of this.geometry.vertices) {
      vector.c = vector.clone();
    }
  }
}