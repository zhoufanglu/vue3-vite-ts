<template>
  <div class="p-test">
    test
    <button @click="clearUserInfo">清空store用户信息</button>
    <button @click="getUserInfo">获取store用户信息</button>
    <button @click="setUserInfo">setStore用户信息</button>
    <div class="drag-div" draggable="true"></div>
    <longList></longList>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import useUserStore from '@/store/users/user'
  import { useRequest } from '@/views/test/useRequest'
  const { getTest } = useRequest()
  const userStore = useUserStore()
  const clearUserInfo = () => {
    userStore.setUserInfo({})
  }
  const getUserInfo = () => {
    console.log(16, userStore.userInfo.age)
  }
  const setUserInfo = () => {
    userStore.setUserInfo({
      username: 'lfz',
      age: 18
    })
  }
  onMounted(() => {
    const moveDoc = document.querySelector('.drag-div') as HTMLElement
  })

  // getTest()
</script>

<style scoped lang="scss">
  .p-test {
    color: $theme;
    .drag-div {
      width: 100px;
      height: 100px;
      background-color: $theme;
      cursor: move;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
</style>
