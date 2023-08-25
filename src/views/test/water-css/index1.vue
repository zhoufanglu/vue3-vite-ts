<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import WaterRipple from './waterRipple'
  // import waterBg from "images/canvas/water.png";
  import waterBg from './img.png'

  let canvasWidth = 600
  let canvasHeight = 600
  let timer: number | null = null
  let waterRipple: WaterRipple | null = null

  // const { t } = useI18n();
  const boxRef = ref<HTMLDivElement>()
  const canvasRef = ref<HTMLCanvasElement>()

  onMounted(() => {
    if (boxRef.value && canvasRef.value) {
      const { offsetWidth, offsetHeight } = boxRef.value
      canvasWidth = offsetWidth
      canvasHeight = offsetHeight
      canvasRef.value.width = canvasWidth
      canvasRef.value.height = canvasHeight

      const waterImg = new Image()
      waterImg.src = waterBg
      waterRipple = new WaterRipple({
        canvas: canvasRef.value,
        background: waterImg,
        boxRef,
      })

      waterRipple.animate()

      timer = window.setInterval(() => {
        const x = Math.floor(canvasWidth * Math.random())
        const y = Math.floor(canvasHeight * Math.random())
        waterRipple?.ripple(x, y)
      }, 1000)

      waterRipple.addMousemove()
    }
  })

  onUnmounted(() => {
    timer && clearInterval(timer)
    waterRipple?.stop()
  })
</script>

<template>
  <div
    ref="boxRef"
    class="bg-img"
    :style="{
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      display: 'flex',
    }"
  >
    <canvas ref="canvasRef">
      <!--      {{ t("common.browserTooLow") }}-->
    </canvas>
  </div>
</template>

<style lang="scss">
  .bg-img {
    background-size: cover;
  }
</style>
