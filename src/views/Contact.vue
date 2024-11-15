<template>
    <section class="contact-section">
      <div class="contact-header">
        <h1 class="contact-title">聯繫我們</h1>
        <p class="contact-description">
          有任何問題或建議，歡迎隨時聯繫我們。我們將盡快回覆您！
        </p>
      </div>
  
      <!-- 聯繫方式 -->
      <div class="contact-info">
        <div class="info-item">
          <i class="fas fa-phone-alt info-icon"></i>
          <h3>電話</h3>
          <p>+886 123 456 789</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope info-icon"></i>
          <h3>電子郵件</h3>
          <p>contact@yourcompany.com</p>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt info-icon"></i>
          <h3>地址</h3>
          <p>台北市中正區和平東路一段 123 號</p>
        </div>
      </div>
  
      <!-- 聯繫表單 -->
      <div class="contact-form">
        <h2>發送訊息</h2>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="form.name" placeholder="姓名" required />
          <input type="email" v-model="form.email" placeholder="電子郵件" required />
          <textarea v-model="form.message" placeholder="訊息內容" rows="5" required></textarea>
          <button type="submit">發送</button>
        </form>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        // 模擬提交行為，可以在此處進行後端 API 請求
        alert(`感謝您的聯繫，${this.form.name}！我們會儘快回覆您。`);
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  /* 聯繫我們頁面樣式 */
  .contact-section {
    padding: 50px;
    background: linear-gradient(to bottom, #a18cd1, #fbc2eb); /* 柔和漸層背景 */
    font-family: 'Arial', sans-serif;
    color: #333;
    min-height: 100vh; /* 確保背景全屏 */
  }
  
  /* 標題與描述 */
  .contact-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .contact-title {
    font-size: 2.5rem;
    color: #fff;
    animation: fadeInDown 1s ease;
  }
  
  .contact-description {
    font-size: 1.2rem;
    color: #eee;
    margin-top: 10px;
    animation: fadeIn 1.5s ease;
  }
  
  /* 聯繫方式 */
  .contact-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  
  .info-item {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .info-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .info-icon {
    font-size: 2.5rem;
    color: #ff7a59;
    margin-bottom: 10px;
  }
  
  .info-item h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  .info-item p {
    font-size: 1rem;
    color: #666;
  }
  
  /* 聯繫表單 */
  .contact-form {
    text-align: center;
  }
  
  .contact-form h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .contact-form form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .contact-form button {
    padding: 10px 20px;
    background: #ff7a59;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .contact-form button:hover {
    background: #e86a4d;
  }
  
  /* 動畫 */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  