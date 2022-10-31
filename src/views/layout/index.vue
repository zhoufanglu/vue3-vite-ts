<template>
  <div class="p-layout"> 布局页面 </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
  .p-layout {
    border: solid 1px red;
  }
</style>
