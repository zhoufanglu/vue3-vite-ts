<script setup lang="js">
  import { onMounted } from 'vue'
  // eslint-disable-next-line vue/require-prop-types
  const props = defineProps(['value', 'index'])
  const asciiArt = props.value
  const chatIndexTemp = ref(0) // 字符计数
  const emit = defineEmits(['openHeart'])
  onMounted(() => {
    let charIndex = 0
    const asciiContainer = document.getElementById('preId')
    function printCharacter() {
      if (charIndex < asciiArt.length) {
        asciiContainer.textContent += asciiArt[charIndex]
        charIndex++
        // console.log(13, charIndex)
        chatIndexTemp.value = charIndex
        if (charIndex === 2956) {
          emit('openHeart')
        }
      } else {
        clearInterval(printInterval)
      }
    }

    // 设置每个字符的显示间隔（毫秒）
    const printInterval = setInterval(printCharacter, 0.1)
    /* const textToPrint = asciiArt
    const outputContainer = document.getElementById('preId')

    function createRainbowText(text) {
      const rainbowText = text
        .split('')
        .map((char, index) => {
          return `<span class="rainbow-text">${char}</span>`
        })
        .join('')
      return rainbowText
    }

    outputContainer.innerHTML = createRainbowText(textToPrint)
    */
  })
</script>
<template>
  <span class="count-span">{{ chatIndexTemp }}</span>
  <!--  v-show="chatIndexTemp === 2956"-->
  <pre id="preId" class="rainbow-text"></pre>
</template>

<style lang="scss">
  pre {
    font-size: 10px;
    width: 100%;
    text-align: center;
    position: relative;
    top: -30px;
  }
  .count-span {
    position: fixed;
  }
  .rainbow-text {
    display: inline-block;
    //animation: rainbow 3s linear infinite;
  }

  @keyframes rainbow {
    0% {
      color: red;
    }
    14% {
      color: orange;
    }
    28% {
      color: yellow;
    }
    42% {
      color: green;
    }
    57% {
      color: #4646a9;
    }
    71% {
      color: #7532a8;
    }
    85% {
      color: violet;
    }
    100% {
      color: red;
    }
  }
</style>
