<script setup lang="js">
  import { reactive } from 'vue'
  import { imageList } from '@/views/1024/ImageString'
  // https://www.asciiart.eu/text-to-ascii-art
  // https://convertcase.net/ascii-art-generator/
  const variables = reactive({
    inputValue: '',
    displayValue: '',
  })
  variables.displayValue = imageList[0]
  console.log(variables.displayValue)
  const handleEnter = () => {
    variables.displayValue = variables.inputValue
    variables.inputValue = ''
  }
</script>
<template>
  <div class="nes-container is-dark with-title page-1024">
    <p class="title">easipass - 1024</p>

    <div style="background-color: #212529; padding: 1rem" class="nes-field is-inline">
      <label for="dark_field" style="color: #fff">input</label>
      <input
        id="dark_field"
        v-model="variables.inputValue"
        type="text"
        class="nes-input is-dark"
        placeholder="enter"
        @keyup.enter="handleEnter"
      />
    </div>
    <pre v-for="(str, index) in imageList" :key="index" class="word">{{ str }}</pre>
  </div>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: 'Press Start 2P';
    src: url('@/assets/font/PressStart2P-Regular.ttf');
  }
  .page-1024 {
    font-family: 'Press Start 2P', serif;
    height: 100vh;
    width: 100vw;
    .word {
      /*font-size: 50px;
      line-height: 100px;*/
    }
  }
</style>
