<template>
  <TransitionGroup 
    name="product-grid" 
    tag="div" 
    class="product-grid"
  >
  <ProductCard 
      v-for="(product, index) in products" 
      :key="product.id" 
      :product="product"
      :index="index"
    />
  </TransitionGroup>
</template>

<script setup>
import { TransitionGroup } from 'vue'
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  min-height: 200px; // 確保容器高度，避免動畫時頁面跳動
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
}

// 基礎動畫
.product-grid-move {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

// 進入動畫
.product-grid-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: calc(var(--index) * 0.1s); // 錯開動畫時間
}

.product-grid-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  filter: blur(10px);
}

// 離開動畫
.product-grid-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: calc(100% - 2rem);
}

.product-grid-leave-to {
  opacity: 0;
  transform: scale(0.8);
  filter: blur(10px);
}

// 確保動畫流暢
* {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}
</style>