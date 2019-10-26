import Scene from './Scene';
import * as THREE from 'three';

/**
 * @desc Creates the blob shape
 * @class
 */
export default class Shape extends Scene {
  private scene: THREE.Scene;
  private material: THREE.MeshPhongMaterial;
  private shape: THREE.Mesh;

  /**
   * @param {THREE.Scene} scene
   */
  constructor(scene: THREE.Scene) {
    super();
    this.scene = scene;
  }

  /**
   * @desc Creates the material of the blob
   * @param {string | number} emissive
   * @param {number} emissiveIntensity
   * @param {number} shininess
   */
  public createMaterial(emissive: string | number, emissiveIntensity: number, shininess: number) {
    this.material = new THREE.MeshPhongMaterial({
      emissive,
      emissiveIntensity,
      shininess
    });
  }

  /**
   * @desc Creates the blob
   * @param {THREE.IcosahedronGeometry} geometry
   */
  public createShape(geometry: THREE.IcosahedronGeometry) {
    this.shape = new THREE.Mesh(geometry, this.material);
  }

  /**
   * @desc Applies the shape to the scene
   */
  public applyShape() {
    this.scene.add(this.shape);
  }
}