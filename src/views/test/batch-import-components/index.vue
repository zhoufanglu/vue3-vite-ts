<script setup lang="ts">
  import mapping from '@/tools/mapping'
  const modules = import.meta.glob('./components/**.vue', { eager: true })

  console.log(5, modules)

  const components: { [key: string]: Component } = mapping(modules)

  const A = components['A']
  const B = components['B']
  const C = components['C']
  console.log(7, components)
</script>
<template>
  <div class="batch-import-components">
    33
    <A></A>
    <!--    <B></B>
    <C></C>
    <TestA></TestA>-->
  </div>
</template>

<style scoped lang="scss">
  .batch-import-components {
  }
</style>
