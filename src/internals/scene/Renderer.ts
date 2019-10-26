import * as THREE from 'three';
import Scene from './Scene';
import { noise } from "perlin";
import { TweenMax } from 'gsap';

/**
 * @desc Main renderer class. In charge of rendering and updating the scene
 * @class
 */
export default class Renderer extends Scene {
  private readonly canvas: HTMLCanvasElement;
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public geometry: THREE.IcosahedronGeometry;
  private mouse = new THREE.Vector2(0.8, 0.5);

  /**
   * @param {HTMLCanvasElement} canvas Canvas element the scene will be drawn on
   */
  constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
  }

  /**
   * @desc Creates the renderer
   */
  public createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
  }

  /**
   * @desc Applies the required renderer sizing and pixel ratio
   */
  public applySizing() {
    this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    this.renderer.setSize(this.width, this.height);
  }

  /**
   * @desc Applies the background color for the scene
   * @param {string | number} color Background color
   */
  public applyBackgroundColor(color: string | number) {
    this.renderer.setClearColor(color);
  }

  /**
   * @desc Updates the blob every frame to move randomly
   * @param {DOMHighResTimeStamp} t Time the scene has ran for
   */
  private updateVectors(t: number) {
    for (const vector of this.geometry.vertices) {
      vector.copy(vector.c);
      const perlin = noise.simplex3(
        (vector.x * 0.006) + (t * 0.0002),
        (vector.y * 0.006) + (t * 0.0003),
        (vector.z * 0.006)
      );
      const ratio = (perlin * 0.4 * (this.mouse.y + 0.1)) + 0.8;
      vector.multiplyScalar(ratio);
    }
    this.geometry.verticesNeedUpdate = true;
  }

  /**
   * @desc Main render function, handles all per-tick methods
   * @param {DOMHighResTimeStamp} t Time the scene has ran for
   */
  public render(t: number = 0) {
    requestAnimationFrame(this.render.bind(this));
    this.updateVectors(t);
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * @desc Handles blob movement on mouse move
   * @param {MouseEvent} e
   */
  private onMouseMove(e: MouseEvent) {
    TweenMax.to(this.mouse, 0.8, {
      y: (e.clientY / this.height),
      x: (e.clientX / this.width),
    });
  }

  /**
   * @desc Fixes the scene and camera sizing on window resize
   */
  private onResize() {
    const { width, height } = this.dimensions;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);

    this.width = width;
    this.height = height;
  }

  /**
   * @desc Applies the required event listeners for the scene
   */
  public addEventListeners() {
    this.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.addEventListener('resize', this.onResize.bind(this));
  }
}