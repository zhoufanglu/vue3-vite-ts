<template>
  <div class="p-name">
    <div>{{ src }}</div>
    <iframe id="myIframe" :src="src" style="width: 500px; height: 500px"></iframe>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        src: 'http://192.168.129.134:8082/idg-ui/#/login',
      }
    },
    created() {},
    mounted() {
      setTimeout(() => {
        console.log(19, this.src)

        // 获取 iframe 的 window 对象
        const iframeWindow = document.getElementById('myIframe').contentWindow

        // 在 iframe 内部执行 JavaScript 获取 DOM 元素
        const iframeElement = iframeWindow.document.getElementsByClassName('logo-text')

        // 这里可以操作 iframe 内的 DOM 元素
        console.log(28, iframeElement)
      }, 1000)
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .p-name {
  }
</style>
