<template>
    <section class="about-section">
      <div class="about-header">
        <h1 class="about-title">關於我們</h1>
        <p class="about-description">
          我們是一個充滿活力與創意的團隊，致力於為您帶來突破性的解決方案與愉悅的服務體驗。
        </p>
      </div>
  
      <!-- 團隊介紹 -->
      <div class="about-team">
        <h2 class="team-title">我們的核心成員</h2>
        <div class="team-container">
          <div v-for="(member, index) in team" :key="index" class="team-card">
            <img :src="member.image" :alt="member.name" class="team-image" />
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
          </div>
        </div>
      </div>
  
      <!-- 核心價值 -->
      <div class="about-values">
        <h2 class="values-title">我們的核心價值</h2>
        <div class="values-container">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <i :class="value.icon" class="value-icon"></i>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: [
          { name: "張三", role: "CEO", image: "/image/slide1.jpg" },
          { name: "李四", role: "設計師", image: "/image/slide2.jpg" },
          { name: "王五", role: "開發者", image: "/image/slide3.jpg" },
        ],
        values: [
          {
            title: "創新",
            description: "我們用創新引領未來，帶來突破性的產品與服務。",
            icon: "fas fa-lightbulb",
          },
          {
            title: "專業",
            description: "我們的專業水準讓每一個細節都完美無缺。",
            icon: "fas fa-briefcase",
          },
          {
            title: "團隊合作",
            description: "我們相信合作能創造最大的價值。",
            icon: "fas fa-users",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* 確保背景色應用 */
  .about-section {
    padding: 50px;
    background: linear-gradient(to bottom, #ff9a8b, #fad0c4) !important; /* 明顯漸層背景 */
    font-family: 'Arial', sans-serif;
    color: #333;
    min-height: 100vh; /* 確保背景全屏 */
  }
  
  /* 標題與描述 */
  .about-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .about-title {
    font-size: 2.5rem;
    color: #fff;
    animation: fadeInDown 1s ease;
  }
  
  .about-description {
    font-size: 1.2rem;
    color: #eee;
    margin-top: 10px;
    animation: fadeIn 1.5s ease;
  }
  
  /* 團隊介紹 */
  .about-team {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .team-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .team-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .team-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 250px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .team-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  .team-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .team-role {
    color: #777;
    font-size: 0.9rem;
  }
  
  /* 核心價值 */
  .about-values {
    text-align: center;
  }
  
  .values-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .values-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .value-card {
    background: #ffffff;
    border: 2px solid #eaeaea;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 250px;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  
  .value-card:hover {
    transform: translateY(-10px);
    border-color: #ccc;
  }
  
  .value-icon {
    font-size: 2.5rem;
    color: #ff7a59;
    margin-bottom: 10px;
  }
  
  .value-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  .value-card p {
    font-size: 0.9rem;
    color: #666;
  }
  
  /* 動畫 */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
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
  