import * as THREE from 'three';
import Scene from './Scene';
import { XYZ } from './types';

/**
 * @desc Creates and applies light to the scene
 * @class
 */
export default class Lights extends Scene {
  private xyz: XYZ;
  private readonly scene: THREE.Scene;
  private readonly lights: THREE.Light[];

  /**
   * @param {THREE.Scene} scene
   * @param {XYZ} xyz
   */
  constructor(scene: THREE.Scene, xyz: XYZ) {
    super();
    this.scene = scene;
    this.xyz = xyz;
    this.lights = [];
  }

  /**
   * @desc Set blob brightness for top and bottom
   */
  public hemisphereLight() {
    const hemiLight = new THREE.HemisphereLight(0x6b7e82, 0x403442, 0.6);
    this.lights.push(hemiLight);
  }

  /**
   * @desc Set blob top color
   */
  public directionalLight() {
    const lightLeft = new THREE.DirectionalLight(0x8186d5, 0.5);
    lightLeft.position.set(this.xyz.x, this.xyz.y, this.xyz.z);

    const lightRight = lightLeft.clone();
    lightRight.position.set(-this.xyz.x, this.xyz.y, this.xyz.z);

    this.lights.push(lightLeft, lightRight);
  }

  /**
   * @desc Applies the lights to the scene
   */
  public applyLights() {
    this.scene.add(...this.lights);
  }
}