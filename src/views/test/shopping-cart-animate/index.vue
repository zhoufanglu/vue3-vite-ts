<template>
  <div class="container">
    <div class="product-list">
      <!--      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        @addToCart="addToCart"
      />-->
      <div
        v-for="(product, index) in products"
        :ref="(el) => productRefs.push(el)"
        :key="index"
        class="item"
        style="cursor: pointer"
        @click="addToCart(product, index)"
      >
        {{ product.name }}
      </div>
    </div>

    <div class="cart">
      <p>购物车</p>
      <div class="cart-items">
        <div v-for="(item, index) in cart" :key="index" class="cart-item"> img </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import gsap from 'gsap'
  import ProductCard from './ProductCard.vue'

  interface Product {
    name: string
    image: string
  }

  const products: Product[] = [
    { name: '商品1', image: '/assets/product1.jpg' },
    { name: '商品2', image: '/assets/product1.jpg' },
    { name: '商品3', image: '/assets/product1.jpg' },
  ]

  const cart = ref<Product[]>([])
  const movingProduct = ref<Product | null>(null)
  const movingItemRef = ref<HTMLElement | null>(null)

  const getElementPosition = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    console.log(53, rect)

    // 获取页面的滚动位置
    const scrollX = window.scrollX || window.pageXOffset
    const scrollY = window.scrollY || window.pageYOffset

    // 计算相对于页面的坐标
    const x = rect.left + scrollX
    const y = rect.top + scrollY

    return {
      x,
      y,
      width: rect.width,
      height: rect.height,
    }
  }

  // 修改 addToCart 方法，使用贝塞尔曲线
  const productRefs = ref([])

  const addToCart = (product: Product, index: number) => {
    const cartElement = document.querySelector('.cart') as HTMLElement
    const productElement = productRefs.value[index] as HTMLElement

    if (!productElement || !cartElement) return

    // 获取商品和购物车的位置
    const productPos = getElementPosition(productElement)
    const cartPos = getElementPosition(cartElement)

    // 克隆商品元素
    const clone = productElement.cloneNode(true) as HTMLElement
    clone.style.position = 'absolute'
    clone.style.zIndex = '9999' // 确保它在最上层
    clone.style.border = 'solid' // 确保它在最上层
    clone.style.pointerEvents = 'none' // 防止干扰点击
    document.body.appendChild(clone)

    // 获取克隆元素的位置
    const clonePos = getElementPosition(clone)
    clone.style.left = `${productPos.x}px`
    clone.style.top = `${productPos.y}px`
    // 使用 GSAP 实现贝塞尔曲线动画
    gsap.to(clone, {
      x: cartPos.x,
      y: cartPos.y,
      bezier: {
        type: 'cubic',
        values: [
          { x: productPos.x + 100, y: productPos.y - 200 }, // 控制点 1
          { x: cartPos.x - 100, y: cartPos.y - 300 }, // 控制点 2
        ],
      },
      scale: 0.5, // 商品缩小
      ease: 'power1.out', // 缓动效果
      duration: 1, // 动画持续时间
      onComplete: () => {
        // 动画完成后，将商品添加到购物车
        // cart.value.push(product)

        // 移除克隆元素
        document.body.removeChild(clone)
      },
    })
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    padding: 20px;
  }

  .product-list {
    display: flex;
    gap: 20px;
  }

  .cart {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    width: 100px;
    text-align: center;
  }

  .cart-item {
    width: 50px;
    height: 50px;
    margin: 5px;
    overflow: hidden;
    display: inline-block;
  }

  .moving-item {
    position: absolute;
    z-index: 9999;
    pointer-events: none;
  }

  .moving-item img {
    width: 100%;
  }
</style>
