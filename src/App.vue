<script setup lang="ts">
  /** ********************监听浏览器刷新***********************/
  /* let isClosing = false

  window.addEventListener('beforeunload', beforeUnloadListener, { capture: true })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && isClosing) {
      // 在此处添加处理页面关闭事件的逻辑
      localStorage.setItem('event', 'refresh')
      console.log('Page is closing or becoming hidden!')
    }
  })

  function beforeUnloadListener(event: any) {
    isClosing = true
    event.preventDefault()
    localStorage.setItem('event', 'close')
    return event.returnValue
  } */
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
