import React, { Component } from 'react';
import * as THREE from 'three';
import { TweenMax } from 'gsap';
import { noise } from 'perlin';
import Lights from '../../../internals/scene/Lights';
import Renderer from '../../../internals/scene/Renderer';
import Shape from '../../../internals/scene/Shape';
import SceneCamera from '../../../internals/scene/SceneCamera';
import SceneGeometry from '../../../internals/scene/SceneGeometry';

class HomeScene extends Component {
  canvas: HTMLCanvasElement;

  componentDidMount(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mouse = new THREE.Vector2(0.8, 0.5);

    // Creates new renderer
    const renderer = new Renderer(this.canvas);
    renderer.createRenderer();
    renderer.applySizing();
    renderer.applyBackgroundColor(0xc6e5ef);

    // Creates scene
    const scene = new THREE.Scene();
    renderer.scene = scene;

    // Creates and applies camera to scene
    const sceneCamera = new SceneCamera({
      x: 120,
      y: 0,
      z: 300
    });
    sceneCamera.createCamera(100, 0.1, 10000);
    sceneCamera.setPosition();

    const { camera } = sceneCamera;
    renderer.camera = camera;

    // Creates and applies lights to scene
    const lights = new Lights(scene, {
      x: 200,
      y: 300,
      z: 400
    });
    lights.hemisphereLight();
    lights.directionalLight();
    lights.applyLights();

    // Create scene and clone all vectors
    const sceneGeometry = new SceneGeometry();
    sceneGeometry.createGeometry();
    sceneGeometry.cloneVectors();

    const { geometry } = sceneGeometry;
    renderer.geometry = geometry;

    // Set blob bottom color
    const shape = new Shape(scene);
    shape.createMaterial(0x494ca2, 0.4, 0);
    shape.createShape(geometry);
    shape.applyShape();

    // Starts the rendering sequence
    renderer.render();

    // Adds the required event listeners for the effect
    renderer.addEventListeners();
  }

  render() {
    return (
      <canvas ref={ref => this.canvas = ref}/>
    );
  }
}

export default HomeScene;