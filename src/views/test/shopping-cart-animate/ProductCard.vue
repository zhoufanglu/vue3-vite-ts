<template>
  <div class="product" @click="handleClick">
    <img :src="product.image" alt="product" />
    <p>{{ product.name }}</p>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps<{
    product: {
      name: string
      image: string
    }
  }>()

  const emit = defineEmits<{
    (event: 'addToCart', product: { name: string; image: string }): void
  }>()

  const handleClick = (event: MouseEvent) => {
    emit('addToCart', props.product, event)
  }
</script>

<style lang="scss" scoped>
  .product {
    width: 100px;
    text-align: center;
    cursor: pointer;
  }

  .product img {
    width: 100%;
  }
</style>
