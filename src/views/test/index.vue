<template>
  <div class="p-test">
    test
    <button @click="clearUserInfo">清空store用户信息</button>
    <button @click="getUserInfo">获取store用户信息</button>
    <button @click="setUserInfo">setStore用户信息</button>
    <div class="drag-div" draggable="true"></div>
    <ds-side-bar v-model:menus="menus"></ds-side-bar>
    <el-button type="primary">3132</el-button>
    <ds-card></ds-card>
  </div>
</template>

<script setup lang="ts">
  import type { Menu } from 'daas-ui/lib/packages/side-bar/types'
  import api from '@/service/api'
  api.user.testB()
  //test
  import { onMounted, reactive, ref } from 'vue'
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
      age: 18,
    })
  }
  onMounted(() => {
    const moveDoc = document.querySelector('.drag-div') as HTMLElement
  })

  const menus = ref<Menu[]>([
    {
      name: '流程门户',
      path: '/',
      icon: '',
      children: [
        {
          name: '流程库',
          path: '/progress-lib',
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'progress-lib',
        },
        {
          name: '我的任务',
          path: '/my-task',
          icon: '&#xe005;',
          isCollect: true,
          activeMenu: 'my-task',
        },
      ],
    },
    {
      name: '流程中心',
      path: '/',
      icon: '',
      children: [
        {
          name: '类型管理',
          path: '/type-manage',
          icon: '&#xe004;',
          isCollect: true,
          activeMenu: 'type-manage',
        },
        {
          name: '模型管理',
          path: '/model-manage',
          icon: '&#xe002;',
          isCollect: true,
          activeMenu: 'model-manage',
        },
        {
          name: '表单管理',
          path: '/form-manage',
          icon: '&#xe003;',
          isCollect: false,
          activeMenu: 'form-manage',
        },
      ],
    },
  ])

  // getTest()
  const testRef = ref('aa')
  const testReactive = reactive({ name: 'aaa' })
  console.log(93, testRef)
  console.log(94, testReactive)
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
