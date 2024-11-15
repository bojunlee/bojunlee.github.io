<template>
    <div class="home">
      <Carousel :images="carouselImages" />
      
      <!-- 品牌特色區塊 -->
      <section class="brand-features">
        <div class="feature-card">
          <i class="fas fa-shipping-fast"></i>
          <h3>全球配送</h3>
          <p>快速配送到世界各地</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-medal"></i>
          <h3>品質保證</h3>
          <p>嚴選優質商品</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-headset"></i>
          <h3>24小時服務</h3>
          <p>專業客服團隊</p>
        </div>
      </section>
      
      <!-- 精選商品區塊 -->
      <section class="featured-section">
        <div class="section-header">
          <div class="header-content">
            <h2>精選商品</h2>
            <p class="subtitle">FEATURED PRODUCTS</p>
            <span class="accent-line"></span>
          </div>
          <button class="view-all" @click="viewMore">
            查看全部
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        
        <ProductGrid :products="featuredProducts" />
      </section>
  
      <!-- 品牌故事區塊 -->
      <section class="brand-story">
        <div class="story-content">
          <h2>關於我們的故事</h2>
          <p>從2024年開始，我們致力於為您提供最優質的時尚選擇...</p>
          <button class="btn-story" @click="router.push('/about')">
            了解更多
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div class="story-image">
          <img src="/image/slide2.jpg" alt="品牌故事">
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import Carousel from '../components/Carousel.vue'
  import ProductGrid from '../components/products/ProductGrid.vue'
  import { featuredProducts } from '../components/Products/products'
  
  const router = useRouter()
  const carouselImages = [
    '/image/slide1.jpg',
    '/image/slide2.jpg',
    '/image/slide3.jpg',
  ]
  
  const viewMore = () => {
    router.push('/products')
  }
  </script>
  
  <style lang="scss" scoped>
  .home {
    background-color: #ffffff;
  }
  
 // 品牌特色區塊
.brand-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto; // 改為正值，不再使用負值
  padding: 0 2rem;
  position: relative;
  z-index: 2; // 降低 z-index

  .feature-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    border: 1px solid rgba(231, 76, 60, 0.1); // 添加細邊框

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(231, 76, 60, 0.1);
      border-color: rgba(231, 76, 60, 0.2);
    }

    i {
      font-size: 2.8rem;
      color: #e74c3c;
      margin-bottom: 1.5rem;
      display: inline-block;
      transition: all 0.3s ease;
    }

    h3 {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: #666;
      font-size: 1rem;
      line-height: 1.6;
    }

    &:hover i {
      transform: scale(1.1);
    }
  }
}

// 輪播圖區域樣式（如果需要）
.carousel {
  margin-bottom: 4rem; // 增加底部間距
}
  // 精選商品區塊
  .featured-section {
    padding: 6rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 3rem;
  
      .header-content {
        h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
  
        .subtitle {
          color: #e74c3c;
          font-size: 1rem;
          letter-spacing: 2px;
        }
  
        .accent-line {
          display: block;
          width: 60px;
          height: 3px;
          background: #e74c3c;
          margin-top: 1rem;
        }
      }
  
      .view-all {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: none;
        border: none;
        color: #2c3e50;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
  
        &:hover {
          color: #e74c3c;
          
          i {
            transform: translateX(5px);
          }
        }
  
        i {
          transition: transform 0.3s ease;
        }
      }
    }
  }
  
  // 品牌故事區塊
  .brand-story {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 6rem 2rem;
    background: #f8f9fa;
    margin-top: 6rem;
  
    .story-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 4rem;
  
      h2 {
        font-size: 2.5rem;
        color: #2c3e50;
        margin-bottom: 1.5rem;
      }
  
      p {
        color: #666;
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
      }
  
      .btn-story {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 30px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        width: fit-content;
  
        &:hover {
          background: #34495e;
          transform: translateX(5px);
  
          i {
            transform: translateX(5px);
          }
        }
  
        i {
          transition: transform 0.3s ease;
        }
      }
    }
  
    .story-image {
      position: relative;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
  
      &::after {
        content: '';
        position: absolute;
        top: 20px;
        right: 20px;
        width: 100%;
        height: 100%;
        border: 3px solid #e74c3c;
        border-radius: 15px;
        z-index: -1;
      }
    }
  }
  
  @media (max-width: 768px) {
  .brand-features {
    grid-template-columns: 1fr;
    margin: 2rem auto;
    padding: 0 1rem;
    
    .feature-card {
      padding: 2rem 1.5rem;
    }
  }
}

// 如果需要在較大屏幕上調整
@media (min-width: 1200px) {
  .brand-features {
    margin: 4rem auto;
    
    .feature-card {
      padding: 3rem 2rem;
    }
  }
}
  </style>