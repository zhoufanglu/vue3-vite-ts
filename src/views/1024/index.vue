<script setup lang="js">
  import { reactive } from 'vue'
  import { imageList } from '@/views/1024/ImageString'
  import PreArt from '@/views/1024/PreArt.vue'
  // https://www.asciiart.eu/text-to-ascii-art
  // https://convertcase.net/ascii-art-generator/
  // imageList.length = 1
  let preValue = ''
  imageList.forEach((i) => {
    preValue += i + '\n'
  })
  const variables = reactive({
    inputValue: '',
    displayValue: '',
  })
  variables.displayValue = imageList[0]

  const visible = ref(false)

  /** ********************进度条***********************/
  const percent = ref(0)
  const percentVisible = ref(false)
  const timer = setInterval(() => {
    percent.value += 4
    if (percent.value >= 100) {
      percent.value = 100
      percentVisible.value = false
    }
  }, 100)
  /** ********************响应回车***********************/
  const handleEnter = () => {
    variables.displayValue = variables.inputValue
    variables.inputValue = ''
    visible.value = false
    percentVisible.value = true
    // ?进度条
    percent.value = 0
    nextTick(() => {
      visible.value = true
    })
  }
  const heart = ref(false)
  const openHeart = () => {
    heart.value = true
  }

  setInterval(() => {
    handleEnter()
  }, 20000)
</script>
<template>
  <div class="nes-container is-dark with-title page-1024">
    <i v-show="heart" class="nes-icon is-large heart my-heart"></i>

    <p class="title">easipass - 1024 </p>

    <div style="background-color: #212529; padding: 1rem" class="nes-field is-inline">
      <label for="dark_field" style="color: #fff">
        <i class="nes-mario"></i>
      </label>
      <input
        id="dark_field"
        v-model="variables.inputValue"
        type="text"
        class="nes-input is-dark"
        placeholder="enter"
        @keyup.enter="handleEnter"
      />
    </div>
    <progress
      v-show="percentVisible"
      style="width: 100%"
      class="nes-progress is-pattern"
      :value="percent"
      max="100"
    ></progress>
    <PreArt
      v-if="visible && percent === 100"
      :value="preValue"
      :index="1"
      @open-heart="openHeart"
    ></PreArt>
  </div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'Press Start 2P';
    src: url('@/assets/font/PressStart2P-Regular.ttf');
  }
  .page-1024 {
    font-family: 'Press Start 2P', serif;
    height: calc(100vh - 4px);
    width: calc(100vw - 4px);
    // border: solid 1px red;
    // overflow: hidden;
    .word {
      /*font-size: 50px;
      line-height: 100px;*/
    }
  }
  .nes-mario {
    transform: scale(0.5);
  }
  .nes-field {
    padding: 0 !important;
  }
  .my-heart {
    position: fixed;
    bottom: 10px;
    right: 10px;
    // animation: bounce 1s infinite;
  }
</style>
