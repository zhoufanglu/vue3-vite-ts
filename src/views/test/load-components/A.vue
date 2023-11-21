<script setup lang="ts"></script>
<template>
  <div class="p-test"> A</div>
</template>

<style scoped lang="scss">
  .p-test {
    height: 500px;
    border: solid 1px red;
    @include vertical-center;
    font-size: 40px;
    color: white;
    background-color: red;
  }
</style>
