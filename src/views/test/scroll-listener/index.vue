<script setup lang="ts">
  const requestList = ref<any>(new Array(10).fill(0).map((_, i) => i + 1))
  const loadList = ref<any>([])

  const lodeMore = () => {
    console.log('------')
    if (loadList.value.length >= 30) {
      console.log('已经满30条了')
      return
    }
    loadList.value.push(...requestList.value)
  }
</script>
<template>
  <div class="p-scroll">
    <div v-for="(i, index) in loadList" :key="index" class="card">{{ i }}</div>
    <div ref="observerElement" class="observer-element"></div>
  </div>
</template>

<style scoped lang="scss">
  .p-scroll {
    border: solid 1px red;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
    box-sizing: border-box;
    .card {
      display: inline-block;
      height: 200px;
      border: solid 1px blue;
      @include vertical-center;
      font-size: 30px;
      // transform: translateX(100px);
      transition: 500ms;
      // opacity: 0;
      margin: 6px 0;
    }
    .show {
      transform: translateX(0);
      opacity: 1;
    }
    .observer-element {
      border: solid 1px green;
    }
  }
</style>
