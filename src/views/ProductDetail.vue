<template>
    <div class="product-detail" v-if="product">
        <button class="back-button" @click="goBack">返回</button>
    
      <div class="product-container">
        <!-- 左側商品圖片 -->
        <div class="product-images">
          <img :src="product.image" :alt="product.name" class="main-image">
        </div>
  
        <!-- 右側商品信息 -->
        <div class="product-info">
          <h1 class="product-name">{{ product.name }}</h1>
          
          <!-- 標籤 -->
          <div class="product-tags" v-if="product.tags && product.tags.length">
            <span 
              v-for="tag in product.tags" 
              :key="tag" 
              class="tag"
              :class="getTagClass(tag)"
            >{{ tag }}</span>
          </div>
  
          <!-- 價格區 -->
          <div class="price-section">
            <div class="price-container" :class="{ 'has-discount': discountPercentage > 0 }">
              <span class="current-price">${{ formatPrice(product.price) }}</span>
              <span class="original-price" v-if="discountPercentage > 0">
                ${{ formatPrice(product.originalPrice) }}
              </span>
              <span class="discount-tag" v-if="discountPercentage > 0">
                -{{ discountPercentage }}%
              </span>
            </div>
          </div>
  
          <!-- 商品描述 -->
          <div class="description">
            <h3>商品描述</h3>
            <p>{{ product.description }}</p>
          </div>
  
          <!-- 購買區域 -->
          <div class="purchase-section">
            <div class="quantity-selector">
              <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
              <input type="number" v-model="quantity" min="1">
              <button @click="increaseQuantity">+</button>
            </div>
            
            <button class="add-to-cart" @click="addToCart">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    <!-- 新增推薦商品區域 -->
    <div class="recommended-products">
      <h2>推薦商品</h2>
      <div class="recommended-list">
        <ProductCard 
          v-for="recommended in recommendedProducts" 
          :key="recommended.id" 
          :product="recommended" 
        />
      </div>

    </div>
  </div>
    <div v-else class="loading">
      載入中...
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { products } from '../components/Products/products'
  import ProductCard from '../components/Products/ProductCard.vue' // 引入商品卡片組件
  
  const route = useRoute()
  const router = useRouter()
  const quantity = ref(1)


  
  // 獲取商品數據
  const product = computed(() => {
    return products.find(p => p.id === parseInt(route.params.id))
  })

  // 返回上一頁
const goBack = () => {
  router.go(-1) // 返回到上一頁
}
  
  // 計算折扣百分比
  const discountPercentage = computed(() => {
    if (product.value?.originalPrice && product.value?.price) {
      const discount = product.value.originalPrice - product.value.price
      return Math.round((discount / product.value.originalPrice) * 100)
    }
    return 0
  })
  
  // 格式化價格
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }
  
  // 獲取標籤樣式
  const getTagClass = (tag) => {
    const tagClasses = {
      '新品': 'new',
      '熱賣': 'hot',
      '促銷': 'sale'
    }
    return tagClasses[tag] || ''
  }
  
  // 數量控制
  const decreaseQuantity = () => {
    if (quantity.value > 1) quantity.value--
  }
  
  const increaseQuantity = () => {
    quantity.value++
  }
  
  // 加入購物車
  const addToCart = () => {
    // TODO: 實現加入購物車功能
    console.log(`添加 ${quantity.value} 件 ${product.value.name} 到購物車`)
  }

  // 獲取推薦商品
  const recommendedProducts = computed(() => {
  // 隨機選擇 5 個商品
  const shuffledProducts = products.sort(() => 0.5 - Math.random())
  return shuffledProducts.slice(0, 5) // 隨機選擇前 5 個商品
})

  </script>
  
  <style lang="scss" scoped>

.recommended-products {
  margin-top: 3rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .recommended-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
}

.back-button {
  margin-bottom: 1rem;
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

  .product-detail {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
  
    .product-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
      .product-images {
        .main-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
        }
      }
  
      .product-info {
        .product-name {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
  
        .product-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
  
          .tag {
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.9rem;
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
  
        .price-section {
          margin-bottom: 2rem;
  
          .price-container {
            display: flex;
            align-items: center;
            gap: 1rem;
  
            .current-price {
              font-size: 2rem;
              font-weight: 600;
              color: #2c3e50;
            }
  
            &.has-discount {
              .current-price {
                color: #e74c3c;
              }
  
              .original-price {
                color: #999;
                text-decoration: line-through;
                font-size: 1.2rem;
              }
  
              .discount-tag {
                background: #e74c3c;
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 0.9rem;
                font-weight: 600;
              }
            }
          }
        }
  
        .description {
          margin-bottom: 2rem;
  
          h3 {
            font-size: 1.2rem;
            color: #2c3e50;
            margin-bottom: 0.5rem;
          }
  
          p {
            color: #666;
            line-height: 1.6;
          }
        }
  
        .purchase-section {
          display: flex;
          gap: 1rem;
  
          .quantity-selector {
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
  
            button {
              padding: 0.5rem 1rem;
              border: none;
              background: #f8f9fa;
              cursor: pointer;
              
              &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
              }
            }
  
            input {
              width: 60px;
              text-align: center;
              border: none;
              border-left: 1px solid #ddd;
              border-right: 1px solid #ddd;
              padding: 0.5rem;
              
              &::-webkit-inner-spin-button,
              &::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }
          }
  
          .add-to-cart {
  padding: 0.8rem 2rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b;
  }
}
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .product-detail {
      margin: 1rem auto;
  
      .product-container {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 1rem;
  
        .product-info {
          .product-name {
            font-size: 1.5rem;
          }
  
          .price-section {
            .price-container {
              .current-price {
                font-size: 1.5rem;
              }
            }
          }
  
          .purchase-section {
            flex-direction: column;
          }
        }
      }
    }
  }
  </style>