<script setup lang="ts">
  const requestList = ref<any>(new Array(10).fill(0).map((_, i) => i + 1))
  const loadList = ref<any>([])
  const observerElement = ref<HTMLElement | null>(null)
  onMounted(() => {
    const cards = document.querySelectorAll('.card')
    console.log(7, observerElement.value)
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ?目标元素刚出现在根元素可视区时返回 true；目标元素从根元素可视区消失返回 false；
          // switchCard(entry.target as HTMLElement, entry.isIntersecting)
          // ? 加载过后就不需要再次监听改变
          /**
           * isIntersecting
           * 0 表示目标元素完全不可见。
           * 1 表示目标元素完全可见。
           * 0~1 表示目标元素部分可见
           */
          /* if (entry.isIntersecting) {
            console.log('完全可见')
            // observer.unobserve(entry.target)
          } */
          if (entry.intersectionRatio > 0) {
            // switchCard(entry.target as HTMLElement, true)
            console.log('进入可视区域')
            lodeMore()
          } else {
            // switchCard(entry.target as HTMLElement, false)
            console.log('不可见')
          }
        })
      },
      {
        threshold: 0,
      },
    )
    observer.observe(observerElement.value!)
    /* cards.forEach((card) => {
      observer.observe(card)
    }) */
  })

  const switchCard = (target: HTMLElement, visible: boolean) => {
    target.classList.toggle('show', visible)
  }
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
