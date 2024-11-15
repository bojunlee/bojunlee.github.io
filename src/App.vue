<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view></router-view>
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
}

.main-content {
  padding: 2rem;
}
</style>