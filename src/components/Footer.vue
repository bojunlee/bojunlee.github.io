<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- 品牌資訊區 -->
        <div class="footer-section brand">
          <img src="/public/image/logo.jpg" alt="品牌Logo" class="footer-logo">
          <p class="brand-description">
            致力於提供優質的時尚選擇，為您打造獨特的個人風格。
          </p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-line"></i></a>
            <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
  
        <!-- 快速連結區 -->
        <div class="footer-section links">
          <h3>快速連結</h3>
          <ul>
            <li><router-link to="/about">關於我們</router-link></li>
            <li><router-link to="/products">商品列表</router-link></li>
            <li><router-link to="/contact">聯絡我們</router-link></li>
            <li><router-link to="/faq">常見問題</router-link></li>
          </ul>
        </div>
  
        <!-- 聯絡資訊區 -->
        <div class="footer-section contact">
          <h3>聯絡資訊</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> 台北市信義區信義路五段7號</li>
            <li><i class="fas fa-phone"></i> (02) 2345-6789</li>
            <li><i class="fas fa-envelope"></i> service@example.com</li>
            <li><i class="far fa-clock"></i> 營業時間：週一至週五 9:00-18:00</li>
          </ul>
        </div>
  
        <!-- 訂閱電子報區 -->
        <div class="footer-section newsletter">
          <h3>訂閱電子報</h3>
          <p>訂閱我們的電子報，獲取最新優惠和商品資訊！</p>
          <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
            <input 
              type="email" 
              v-model="email" 
              placeholder="請輸入您的電子郵件"
              required
            >
            <button type="submit">訂閱</button>
          </form>
        </div>
      </div>
  
      <!-- 底部資訊區 -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ new Date().getFullYear() }} Your Brand Name. All rights reserved.
          </p>
          <div class="legal-links">
            <router-link to="/privacy">隱私權政策</router-link>
            <router-link to="/terms">使用條款</router-link>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  
  const subscribeNewsletter = () => {
    // 處理訂閱邏輯
    console.log('訂閱電子報:', email.value)
    email.value = ''
    // 這裡可以添加訂閱成功的提示
  }
  </script>
  
  <style lang="scss" scoped>
  .footer {
    background-color: #2c3e50;
    color: #fff;
    padding-top: 4rem;
  
    &-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
    }
  
    &-section {
      h3 {
        color: #fff;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 40px;
          height: 2px;
          background-color: #e74c3c;
        }
      }
    }
  
    // 品牌區域
    .brand {
      .footer-logo {
        height: 40px;
        margin-bottom: 1rem;
      }
  
      .brand-description {
        color: #ecf0f1;
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }
  
      .social-links {
        display: flex;
        gap: 1rem;
  
        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
          text-decoration: none;
  
          &:hover {
            background: #e74c3c;
            transform: translateY(-3px);
          }
        }
      }
    }
  
    // 快速連結
    .links {
      ul {
        list-style: none;
        padding: 0;
  
        li {
          margin-bottom: 0.8rem;
  
          a {
            color: #ecf0f1;
            text-decoration: none;
            transition: color 0.3s ease;
            display: inline-block;
  
            &:hover {
              color: #e74c3c;
              transform: translateX(5px);
            }
          }
        }
      }
    }
  
    // 聯絡資訊
    .contact {
      ul {
        list-style: none;
        padding: 0;
  
        li {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #ecf0f1;
  
          i {
            color: #e74c3c;
            font-size: 1.1rem;
          }
        }
      }
    }
  
    // 電子報訂閱
    .newsletter {
      p {
        color: #ecf0f1;
        margin-bottom: 1rem;
      }
  
      .newsletter-form {
        display: flex;
        gap: 0.5rem;
  
        input {
          flex: 1;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 4px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          
          &::placeholder {
            color: rgba(255,255,255,0.6);
          }
        }
  
        button {
          padding: 0.8rem 1.5rem;
          background: #e74c3c;
          border: none;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
  
          &:hover {
            background: darken(#e74c3c, 10%);
          }
        }
      }
    }
  
    // 底部資訊
    &-bottom {
      margin-top: 4rem;
      padding: 1.5rem 0;
      border-top: 1px solid rgba(255,255,255,0.1);
  
      &-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
  
      .copyright {
        color: #ecf0f1;
      }
  
      .legal-links {
        display: flex;
        gap: 2rem;
  
        a {
          color: #ecf0f1;
          text-decoration: none;
          transition: color 0.3s ease;
  
          &:hover {
            color: #e74c3c;
          }
        }
      }
    }
  }
  
  // 響應式設計
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .footer {
      padding-top: 3rem;
  
      &-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
  
      &-bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  }
  </style>