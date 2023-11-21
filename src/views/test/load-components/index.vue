<script setup lang="ts">
  import A from './A.vue'
  import B from './B.vue'

  // 异步加载组件函数
  const loadComponent = (name: string) =>
    defineAsyncComponent({
      loader: () => import(`./${name}.vue`),
      delay: 2000,
    })

  // 需要加载组件的名称列表
  const componentNames = ['C', 'D']

  let loadedComponent: any = ref([A, B]) // 已经加载的组件
  let components = componentNames.map((name) => loadComponent(name)) // 还需要加载的组件

  /** ********************滚动监视器***********************/
  onMounted(() => {})

  // 开始观察滚动触发元素
  const contentRef = ref()

  const handleScroll = () => {
    const container = contentRef.value
    // 判断是否滚动到底部
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      loadNextComponent()
      console.log('滚到底部了， 开始加载')
    }
  }

  function loadNextComponent() {
    // 获取需要添加的组件，添加完毕后删除此组件
    const nextComponent = components.shift()
    if (nextComponent) {
      loadedComponent.value.push(nextComponent)
    }
  }
</script>
<template>
  <div ref="contentRef" class="load-component" @scroll="handleScroll">
    <component :is="{ ...i }" v-for="(i, index) in loadedComponent" :key="index" />
  </div>
</template>

<style scoped lang="scss">
  .load-component {
    height: 100%;
    overflow-y: auto;
  }
</style>
