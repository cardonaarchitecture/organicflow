import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export function setupThreeScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer({ canvas })

  const controls = new OrbitControls(camera, renderer.domElement)

  const ambientLight = new THREE.AmbientLight(0x404040)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  scene.add(ambientLight, directionalLight)

  return { scene, camera, renderer, controls }
}