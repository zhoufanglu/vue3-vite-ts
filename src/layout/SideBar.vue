<template>
  <div class="d-side-bar">
    <ds-side-bar
      v-model:menus="menus"
      :is-show-drawer="false"
      custom-class="side-bar"
      drawer-custom-class="drawer-custom-class"
      @handle-menu-click="handleMenuClick"
    />
  </div>
</template>

<script setup lang="ts">
  import test from '@/router/modules/test'
  console.log(15, test)
  const menuChildren = test.map((r) => {
    return {
      name: r.path,
      path: r.path,
      icon: '&#xe682;',
      isCollect: true,
      activeMenu: r.path,
    }
  })
  // menus已与组件双向绑定
  const menus = ref([
    {
      name: 'test',
      path: '/',
      icon: '',
      children: menuChildren,
    },
  ])
  const router = useRouter()
  const handleMenuClick = (menu: any) => {
    console.log(36, menu)
    router.push(menu.path)
  }
</script>

<style scoped lang="scss">
  .d-side-bar {
    .side-bar {
      height: 100vh;
    }
  }
</style>
