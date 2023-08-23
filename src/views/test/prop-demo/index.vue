<template>
  <div class="prop-demo">
    {{ computedTest }}
    <ChildCom v-model:value="value" :on-click="onClick" @update:value="changeFn"></ChildCom>
  </div>
</template>

<script setup lang="ts">
  import { ref, shallowRef, watch } from 'vue'
  import ChildCom from '@/views/test/prop-demo/ChildCom.vue'
  const value = ref()
  /* watch(value, (val) => {
    console.log(12, val)
  }) */
  const changeFn = (val: any) => {
    console.log(15, val)
    console.log('---', value.value)
  }
  const onClick = (val: boolean) => {
    console.log(val)
    children.value.splice(1, 1)
  }
  // computed test
  const children = ref([1, 2, 3])
  const computedTest = computed(() => {
    return children.value.map((item) => item * 2)
  })
</script>

<style scoped lang="scss">
  .prop-demo {
    .input-box {
      border: solid 1px red;
      padding: 20px;
    }
  }
</style>
