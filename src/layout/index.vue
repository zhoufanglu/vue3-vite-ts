<template>
  <div class="p-layout">
    <div class="nav-bar">
      <nav-bar></nav-bar>
    </div>
    <div class="side-bar">
      <side-bar></side-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SideBar from '@/layout/SideBar.vue'
  import NavBar from '@/layout/NavBar.vue'
</script>

<style scoped lang="scss">
  .p-layout {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .nav-bar {
      height: 40px;
      width: 100%;
      border-bottom: solid 1px red;
    }
  }
</style>
