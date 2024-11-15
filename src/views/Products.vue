<template>
    <div class="products-page">
      <!-- 分類標籤區域 -->
      <div class="category-section">
        <button 
          class="category-tag"
          :class="{ active: selectedCategory === '' }"
          @click="selectedCategory = ''"
        >
          全部商品
        </button>
        <button 
          v-for="category in categories" 
          :key="category.value"
          class="category-tag"
          :class="{ active: selectedCategory === category.value }"
          @click="selectedCategory = category.value"
        >
          <i :class="category.icon"></i>
          {{ category.label }}
          <span class="count">{{ getCategoryCount(category.value) }}</span>
        </button>
      </div>
  

  
      <!-- 排序工具列 -->
      <div class="toolbar">
        <div class="result-count">
          共 {{ filteredProducts.length }} 件商品
        </div>
        <div class="sort-options">
          <select v-model="sortBy">
            <option value="price-asc">價格由低到高</option>
            <option value="price-desc">價格由高到低</option>
            <option value="discount">折扣最高</option>
          </select>
        </div>
      </div>
  
      <!-- 商品網格 -->
      <ProductGrid :products="filteredProducts" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { products } from '../components/Products/products'
  import ProductGrid from '../components/Products/ProductGrid.vue'
  
  const categories = [
    { label: '上衣', value: '上衣', icon: 'fas fa-tshirt' },
    { label: '外套', value: '外套', icon: 'fas fa-vest' },
    { label: '褲子', value: '褲子', icon: 'fas fa-socks' },
    { label: '特價商品', value: 'sale', icon: 'fas fa-tags' }
  ]
  
  const selectedCategory = ref('')
  const sortBy = ref('price-asc')
  
  const getCategoryCount = (category) => {
    if (category === 'sale') {
      return products.filter(p => p.price < p.originalPrice).length
    }
    return products.filter(p => p.category === category).length
  }
  
  const filteredProducts = computed(() => {
  let result = [...products]
  
  // 分類過濾
  if (selectedCategory.value === 'sale') {
    result = result.filter(p => p.price < p.originalPrice)
  } else if (selectedCategory.value) {
    result = result.filter(p => p.category === selectedCategory.value)
  }
  
  // 排序邏輯
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => {
        // 直接使用當前顯示價格進行排序
        const priceA = a.price
        const priceB = b.price
        return priceA - priceB
      })
      break
    case 'price-desc':
      result.sort((a, b) => {
        const priceA = a.price
        const priceB = b.price
        return priceB - priceA
      })
      break
    case 'discount':
      result.sort((a, b) => {
        const discountA = ((a.originalPrice - a.price) / a.originalPrice) || 0
        const discountB = ((b.originalPrice - b.price) / b.originalPrice) || 0
        return discountB - discountA
      })
      break
  }
  
  return result
})
  </script>
  
  <style lang="scss" scoped>
  .products-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .category-section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    
    .category-tag {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.2rem;
      border: none;
      border-radius: 25px;
      background: white;
      color: #2c3e50;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      
      i {
        font-size: 1.1rem;
      }
      
      .count {
        background: #f0f2f5;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        margin-left: 0.5rem;
      }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      
      &.active {
        background: #e74c3c;
        color: white;
        
        .count {
          background: rgba(255,255,255,0.2);
          color: white;
        }
      }
    }
  }
  
 
  
  .toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    
    .result-count {
      color: #666;
    }
    
    .sort-options {
      select {
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        
        &:focus {
          border-color: #e74c3c;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    .products-page {
      padding: 1rem;
    }
    
    .category-section {
      gap: 0.5rem;
      
      .category-tag {
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
      }
    }
    
    .sale-banner {
      padding: 2rem 1rem;
      
      h2 {
        font-size: 1.5rem;
      }
    }
    
    .toolbar {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }
  }
  </style>