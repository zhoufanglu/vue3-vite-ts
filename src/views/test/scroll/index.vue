<script setup lang="ts">
  const cardList = ref(new Array(10).fill(0))
  onMounted(() => {
    const cards = document.querySelectorAll('.card')

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ?目标元素刚出现在根元素可视区时返回 true；目标元素从根元素可视区消失返回 false；
          switchCard(entry.target as HTMLElement, entry.isIntersecting)
          // ? 加载过后就不需要再次监听改变
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
          if (entry.intersectionRatio > 0) {
            // switchCard(entry.target as HTMLElement, true)
            // console.log('进入可视区域')
          } else {
            // switchCard(entry.target as HTMLElement, false)
            // console.log('离开可视区域')
          }
        })
      },
      {
        threshold: 0,
      },
    )
    cards.forEach((card) => {
      observer.observe(card)
    })
  })

  const switchCard = (target: HTMLElement, visible: boolean) => {
    target.classList.toggle('show', visible)
  }
</script>
<template>
  <div class="p-scroll">
    <div v-for="(i, index) in cardList" :key="i" class="card">{{ index }}</div>
  </div>
</template>

<style scoped lang="scss">
  .p-scroll {
    border: solid 1px red;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
    .card {
      display: inline-block;
      height: 200px;
      border: solid 1px blue;
      transform: translateX(100px);
      transition: 500ms;
      opacity: 0;
      margin: 6px 0;
    }
    .show {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
