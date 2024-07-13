import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Sets up a Three.js scene with a perspective camera, WebGL renderer, and OrbitControls.
 * Also adds an ambient light and a directional light to the scene.
 *
 * @param canvas - The HTML canvas element to which the Three.js scene will be rendered.
 * @returns An object containing the Three.js scene, camera, renderer, and controls.
 */
export function setupThreeScene(canvas: HTMLCanvasElement) {
  // Create a new Three.js scene
  const scene = new THREE.Scene()

  // Create a new perspective camera with a given field of view, aspect ratio, near and far clipping planes
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  // Create a new WebGL renderer and attach it to the canvas element
  const renderer = new THREE.WebGLRenderer({ canvas })

  // Create new OrbitControls for the camera, which allow the user to rotate and zoom the camera
  const controls = new OrbitControls(camera, renderer.domElement)

  // Create a new ambient light with a given color and add it to the scene
  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)

  // Create a new directional light with a given color and intensity and add it to the scene
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  scene.add(directionalLight)

  // Return an object containing the scene, camera, renderer, and controls
  return { scene, camera, renderer, controls }
}
