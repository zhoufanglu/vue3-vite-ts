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
    <canvas ref="canvasRef"> </canvas>
  </div>
</template>

<script lang="js">
  import WaterRipple from './waterRipple'
  import waterBg from './img_2.png'
  console.log(19, WaterRipple)
  export default {
    data() {
      return {
        timer: {},
        waterRipple: {},
      }
    },
    mounted() {
      const boxRef = this.$refs.boxRef
      const canvasRef = this.$refs.canvasRef
      let canvasWidth = 600,
        canvasHeight = 600

      if (boxRef && canvasRef) {
        const { offsetWidth, offsetHeight } = boxRef
        canvasWidth = offsetWidth
        canvasHeight = offsetHeight
        canvasRef.width = canvasWidth
        canvasRef.height = canvasHeight
      }

      const waterImg = new Image()
      waterImg.src = waterBg
      const waterRipple = new WaterRipple({
        canvas: canvasRef,
        background: waterImg,
        boxRef,
      })

      waterRipple.animate()

      this.timer = window.setInterval(() => {
        const x = Math.floor(canvasWidth * Math.random())
        const y = Math.floor(canvasHeight * Math.random())
        waterRipple?.ripple(x, y)
      }, 1000)

      waterRipple.addMousemove()
    },
    beforeUnmount() {
      this.timer && clearInterval(this.timer)
      // waterRipple?.stop()
    },
  }
</script>

<style scoped>
  .bg-img {
    background-size: cover;
  }
</style>
