import Scene from './Scene';
import * as THREE from 'three';
import { XYZ } from './types';

/**
 * @desc Creates and applies the position of the camera for the scene
 * @class
 */
export default class SceneCamera extends Scene {
  public camera: THREE.PerspectiveCamera;
  private readonly xyz: XYZ;

  /**
   * @param {XYZ} xyz
   */
  constructor(xyz: XYZ) {
    super();
    this.xyz = xyz;
  }

  /**
   * @desc Creates the camera
   * @param {number} fov
   * @param {number} near
   * @param {number} far
   */
  createCamera(fov: number, near: number, far: number) {
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.width / this.height,
      near,
      far
    );
  }

  /**
   * @desc Sets the position of the camera
   */
  setPosition() {
    this.camera.position.set(this.xyz.x, this.xyz.y, this.xyz.z);
  }
}