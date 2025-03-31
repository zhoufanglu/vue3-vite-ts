<template>
  <div class="d-side-bar">
    <el-menu router>
      <el-menu-item
        v-for="(item, index) in menuChildren"
        :key="index"
        :class="item.path === $route.path ? 'active' : null"
        :index="item.path"
      >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import test from '@/router/modules/test'
  // console.log(15, test)
  const menuChildren = test.map((r) => {
    return {
      name: r.path,
      path: r.path,
      isCollect: true,
      activeMenu: r.path,
    }
  })
  console.log(25, menuChildren)
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
  const handleMenuClick = async (menu: any) => {
    console.log(36, menu)
    await router.push(menu.path)
  }
</script>

<style scoped lang="scss">
  .d-side-bar {
    height: 100%;
    border: solid 1px red;
    .side-bar {
      height: 100vh;
    }
  }
</style>
<style lang="scss">
  .drawer-custom-class {
    height: calc(100% - var(--nav-bar-height));
    margin-left: calc(var(--side-width) - 1px);
    top: var(--nav-bar-height) !important;
  }
  .active {
    color: red;
  }
</style>
