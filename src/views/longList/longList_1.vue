<template>
  <div class="long-list">
    <ul ref="containRef" @scroll="handleScroll">
      <li v-for="(i, index) in variables.list" :key="index">{{ index }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, computed } from 'vue'

  const containRef = ref<any>('')
  const variables = reactive({
    list: [] as any[],
    containHeight: 0, // 可视容器大小
    rowHeight: 20, // 每行高度 20px
    renderNums: 0, // 渲染个数
    rowStartIndex: 0, // 渲染开始的第一项索引
    rowEndIndex: 0 // 渲染结束的最后一项索引
  })

  const mockData = () => {
    variables.list = Array.from({ length: 100000 }, (v, k) => k)
  }
  mockData()
</script>

<style scoped lang="scss">
  .long-list {
    // height: 500px;
    // border: solid 1px red;
    ul {
      width: 500px;
      height: 200px;
      box-sizing: border-box;
      border: solid 2px red;
      overflow-y: auto;
      display: inline-block;
      li {
        background-color: #00aaaf;
        color: white;
        font-weight: bolder;
        border-bottom: solid 1px black;
        height: 20px;
        box-sizing: border-box;
      }
    }
  }
</style>
