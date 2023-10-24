<script setup lang="js">
  import { imageList } from '@/views/1024/imageString'
  // 方式 1: 导入整个 three.js核心库
  import * as THREE from 'three'
  import { onMounted } from 'vue'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  onMounted(() => {
    // DOM selectors
    const containerEl = document.querySelector('.container')

    // Settings
    const fontName = 'Verdana'
    const textureFontSize = 100

    // 3D scene related globals
    let scene, camera, renderer, textCanvas, textCtx

    // String to show
    let string = 'Easipass\n1024\nFighting'
    // console.log(20, imageList)
    // let string = imageList[3]

    // ---------------------------------------------------------------

    init()
    createEvents()
    refreshText()
    render()

    // ---------------------------------------------------------------

    function init() {
      // ?生成3d场景, 类似一个投影仪
      /* fov — 摄像机视锥体垂直视野角度
      aspect — 摄像机视锥体长宽比 window.innerWidth / window.innerHeight
      near — 摄像机视锥体近端面
      far — 摄像机视锥体远端面 */
      camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 2000)
      // ?设置相机位置
      camera.position.set(1.5, 1, 5).multiplyScalar(60)
      // ?创建场景
      scene = new THREE.Scene()

      renderer = new THREE.WebGLRenderer({
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      containerEl.appendChild(renderer.domElement)

      const orbit = new OrbitControls(camera, renderer.domElement)
      orbit.enablePan = false

      textCanvas = document.createElement('canvas')
      textCanvas.width = textCanvas.height = 0
      textCtx = textCanvas.getContext('2d')
    }

    // ---------------------------------------------------------------

    function createEvents() {
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      })
    }

    // ---------------------------------------------------------------

    function render() {
      requestAnimationFrame(render)
      renderer.render(scene, camera)
    }

    // ---------------------------------------------------------------

    function refreshText() {
      sampleCoordinates()
      createPlane()
    }

    // ---------------------------------------------------------------
    // Input string to textureCoordinates

    function sampleCoordinates() {
      // Parse text
      const lines = string.split('\n')
      const linesMaxLength = [...lines].sort((a, b) => b.length - a.length)[0].length
      const wTexture = textureFontSize * 0.7 * linesMaxLength
      const hTexture = lines.length * textureFontSize

      // Draw text
      const linesNumber = lines.length
      textCanvas.width = wTexture
      textCanvas.height = hTexture
      textCtx.font = '100 ' + textureFontSize + 'px ' + fontName
      // textCtx.fillStyle = '#2a9d8f'
      textCtx.fillStyle = '#5386ed'
      textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height)
      for (let i = 0; i < linesNumber; i++) {
        textCtx.fillText(lines[i], 0, ((i + 0.8) * hTexture) / linesNumber)
      }
    }

    // ---------------------------------------------------------------
    // Handle texture plane

    function createPlane() {
      const texture = new THREE.CanvasTexture(textCanvas)
      const planeGeometry = new THREE.PlaneGeometry(textCanvas.width, textCanvas.height)
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
      })
      const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
      scene.add(planeMesh)
    }
  })
</script>
<template>
  <div class="container"></div>
</template>

<style scoped lang="scss">
  .container {
    background-color: #777474;
  }
</style>
