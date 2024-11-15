<template>
  <div 
    class="product-card" 
    :style="{ '--index': index }"
    @click="goToProduct"
  >
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
      <!-- 折扣標籤 -->
      <div class="discount-tag" v-if="discountPercentage > 0">
        -{{ discountPercentage }}%
      </div>
      <div class="product-tags" v-if="product.tags && product.tags.length">
        <span 
          v-for="tag in product.tags" 
          :key="tag" 
          class="tag"
          :class="getTagClass(tag)"
        >{{ tag }}</span>
      </div>
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-price" :class="{ 'has-discount': discountPercentage > 0 }">
        <template v-if="discountPercentage > 0">
          <span class="current-price">${{ formatPrice(product.price) }}</span>
          <span class="original-price">${{ formatPrice(product.originalPrice) }}</span>
        </template>
        <template v-else>
          <span class="current-price">${{ formatPrice(product.originalPrice) }}</span>
        </template>
      </div>
      <button class="add-to-cart" @click.stop="addToCart">加入購物車</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

// 計算折扣百分比
const discountPercentage = computed(() => {
  if (props.product.originalPrice && props.product.price) {
    const discount = props.product.originalPrice - props.product.price
    return Math.round((discount / props.product.originalPrice) * 100)
  }
  return 0
})

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const getTagClass = (tag) => {
  const tagClasses = {
    '新品': 'new',
    '熱賣': 'hot',
    '促銷': 'sale'
  }
  return tagClasses[tag] || ''
}

const goToProduct = () => {
  router.push({
    name: 'ProductDetail',
    params: { id: props.product.id }
  })
}
const addToCart = () => {
  // TODO: 實現加入購物車功能
  console.log(`添加 ${props.product.name} 到購物車`)
}
</script>

<style lang="scss" scoped>
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .product-image {
    position: relative;
    padding-top: 125%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    // 新增折扣標籤樣式
    .discount-tag {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #e74c3c;
      color: white;
      padding: 8px 12px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      z-index: 2;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.1);
        border-radius: inherit;
        transform: scale(0);
        transition: transform 0.3s ease;
      }
      
      &:hover::before {
        transform: scale(1);
      }
    }

    .product-tags {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .tag {
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        
        &.new {
          background: #e74c3c;
          color: white;
        }
        
        &.hot {
          background: #f39c12;
          color: white;
        }
        
        &.sale {
          background: #27ae60;
          color: white;
        }
      }
    }
  }

  .product-info {
    padding: 1.5rem;
    position: relative; // 設置為相對定位

    .product-name {
      font-size: 1.1rem;
      color: #2c3e50;
      margin-bottom: 0.5rem;
      font-weight: 600;
      // 防止過長的商品名稱
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .product-price {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &.has-discount {
        .current-price {
          color: #e74c3c;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .original-price {
          color: #999;
          text-decoration: line-through;
          font-size: 0.9rem;
        }
      }

      .current-price {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2c3e50;
      }
    }
    .add-to-cart {
      position: absolute; // 絕對定位
      bottom: 10px; // 距離底部10px
      right: 10px; // 距離右側10px
      padding: 0.5rem 1rem;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #c0392b;
      }
    }
  }
}

@media (max-width: 768px) {
  .product-card {
    .product-info {
      padding: 1rem;
      
      .product-name {
        font-size: 1rem;
      }
      
      .product-price {
        .current-price {
          font-size: 1.1rem;
        }
        
        .original-price {
          font-size: 0.8rem;
        }
      }
    }
    
    .discount-tag {
      padding: 6px 10px;
      font-size: 0.8rem;
    }
  }
}
</style>