/**
 * @desc Main scene class. Used as inheritance by other classes
 * @class
 */
export default class Scene {
  public width: number;
  public height: number;

  constructor() {
    const { width, height } = this.dimensions;
    this.width = width;
    this.height = height;
  }

  /**
   * @desc Provides the current window width and height
   */
  get dimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  /**
   * @desc Handles additional event listeners for the scene
   * @param {string} event Event name
   * @param {EventListener} callback Callback called when event is fired
   */
  addEventListener(event: string, callback: EventListener) {
    window.addEventListener(event, callback);
  }
}