<template>
    <header class="header">
      <div class="logo-container">
        <img src="/public/image/logo.jpg" alt="品牌Logo" class="header-logo">
        <div class="logo">
            <a href="/" class="weblogo"><i><h1>時尚服飾</h1></i></a>
        </div>
        <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-line"></i></a>
            <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
          </div>
      </div>  

      <nav class="nav">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path" 
          class="nav-link"
          v-slot="{ isActive }"
        >
          <span :class="{ active: isActive }">{{ item.name }}</span>
        </router-link>
      </nav>
    </header>
  </template>
  
  <script setup>
  const menuItems = [
    { name: '首頁', path: '/' },
    { name: '商品', path: '/products' },
    { name: '關於我們', path: '/about' },
    { name: '聯繫我們', path: '/contact' }
  ]
  </script>
  
  <style scoped>

  .header {
    padding: var(--spacing-md) var(--spacing-lg);
    background-color: white;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 1000;
    animation: slideIn 0.5s ease-out;
    
  }
  .logo-container {
  display: flex;
  align-items: center;  /* 讓Logo和文字垂直置中 */
  gap: var(--spacing-md); /* Logo和文字之間有間隙 */
}
  .header-logo{
        height: 40px;

  }
  
  .logo h1 {
    font-size: 1.8rem;
    color: var(--primary-color);
    font-weight: 700;
    
  }
  .weblogo{
    text-decoration: none;
  }
/* Social Links Styles */
.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
    width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: #ff6b6b;
          transition: all 0.3s ease;
          text-decoration: none;
}

.social-link:hover {
  transform: translateY(-5px) rotate(8deg);
}


  
  
  .nav {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    margin-top: var(--spacing-md);
  }
  
  .nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    position: relative;
    padding: var(--spacing-xs) 0;
  }
  
  .nav-link span {
    position: relative;
  }
  
  .nav-link span::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }
  
  .nav-link:hover span::after,
  .nav-link .active::after {
    width: 100%;
  }
  
  @media (min-width: 768px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-md) var(--spacing-lg);
    }
    
    .nav {
      margin-top: 0;
    }
  }
  </style>