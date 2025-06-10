<script setup lang="ts">
  import test from '@/router/modules/test'
  // console.log(15, test)
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
  const route = useRoute()
  const menuActive = ref(route.path)
  const handleMenuClick = async (menu: any) => {
    menuActive.value = menu.path
    await router.push(menu.path)
  }
</script>

<template>
  <div class="d-side-bar">
    <!--    <ds-side-bar
      v-model:menus="menus"
      :is-show-drawer="true"
      custom-class="side-bar"
      drawer-custom-class="drawer-custom-class"
      @handle-menu-click="handleMenuClick"
    />-->
    <el-menu router class="side-bar" :default-active="menuActive">
      <el-sub-menu v-for="menu in menus" :key="menu.path" :index="menu.path">
        <template #title>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          v-for="m in menu.children"
          :key="m.path"
          :index="m.path"
          @click="handleMenuClick(m)"
          >{{ m.name }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss"></style>
<style lang="scss">
  .drawer-custom-class {
    height: calc(100% - var(--nav-bar-height));
    margin-left: calc(var(--side-width) - 1px);
    top: var(--nav-bar-height) !important;
  }
  .side-bar {
    height: calc(100vh - 50px);
    overflow-y: scroll;
  }
</style>
