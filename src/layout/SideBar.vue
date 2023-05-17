<template>
  <div class="side-bar">
    <ds-side-bar
      v-model:menus="menus"
      :is-show-drawer="false"
      custom-class="side-bar"
      drawer-custom-class="drawer-custom-class"
      @handle-menu-click="handleMenuClick"
    />
  </div>
</template>

<script setup>
  // menus已与组件双向绑定
  const menus = ref([
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
          icon: '&#xe682;',
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
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'type-manage',
        },
        {
          name: '模型管理',
          path: '/model-manage',
          icon: '&#xe682;',
          isCollect: true,
          activeMenu: 'model-manage',
        },
        {
          name: '表单管理',
          path: '/form-manage',
          icon: '&#xe682;',
          isCollect: false,
          activeMenu: 'form-manage',
        },
      ],
    },
  ])
  const handleMenuClick = () => {}
</script>

<style scoped lang="scss">
  .side-bar {
  }
</style>
