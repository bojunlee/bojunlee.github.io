<template>
  <div class="carousel" @mouseenter="stopTimer" @mouseleave="startTimer">
    <div class="carousel-container" :style="containerStyle">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="carousel-slide"
        :style="{ transform: `translateX(${index * 100}%)` }"
      >
        <img :src="image" :alt="`Slide ${index + 1}`" class="carousel-img" />

        <div class="carousel-content">
    <h2 class="carousel-title">{{ titles[index] }}</h2>
    <p class="carousel-description">{{ descriptions[index] }}</p>
    <button class="btn btn-primary" @click="handleNavigation(index)">
      {{ buttonTexts[index] }}
    </button>
  </div>
      </div>
    </div>
    
    <div class="carousel-controls">
      <button class="control-btn prev" @click="prev">❮</button>
      <button class="control-btn next" @click="next">❯</button>
    </div>
    
    <div class="carousel-indicators">
      <span 
        v-for="(_, index) in images" 
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const buttonTexts = [
  '查看商品',
  '了解更多',
  '聯繫我們'
]

// 處理導航
const handleNavigation = (index) => {
  const routes = [
    '/products',
    '/about',
    '/contact'
  ]
  router.push(routes[index])
}

// 標題和描述
const titles = [
  '精選系列',
  '關於我們',
  '聯繫我們',

]

const descriptions = [
  '探索最新的時尚趨勢',
  '詳細聊解我們的品牌理念',
  ''
]

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
const isAnimating = ref(false)
let timer = null

// 計算容器的位移樣式
const containerStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`
}))



// 切換到指定幻燈片
const goToSlide = (index) => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, 500) // 與 CSS 過渡時間相匹配
}

// 下一張
const next = () => {
  if (isAnimating.value) return
  const nextIndex = (currentIndex.value + 1) % props.images.length
  goToSlide(nextIndex)
}

// 上一張
const prev = () => {
  if (isAnimating.value) return
  const prevIndex = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
  goToSlide(prevIndex)
}

// 自動播放控制
const startTimer = () => {
  stopTimer()
  timer = setInterval(next, props.interval)
}

const stopTimer = () => {
  if (timer) clearInterval(timer)
}

// 生命週期鉤子
onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style lang="scss" scoped>
// 變量定義
$animation-duration: 0.8s;
$animation-timing: cubic-bezier(0.4, 0, 0.2, 1);

// Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// 基礎樣式
.carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-color: var(--primary-color);

  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s $animation-timing;
  }

  &-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
  }

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }

  // 內容區域
  &-content {
    @include absolute-center;
    text-align: center;
    color: white;
    z-index: 2;
    width: 80%;
    opacity: 0;
    animation: contentFadeIn $animation-duration $animation-timing forwards;
    animation-delay: 0.2s;
  }

  &-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    opacity: 0;
    transform: translateY(30px);
    animation: slideUpFade $animation-duration $animation-timing forwards;
    animation-delay: 0.4s;
  }

  &-description {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-lg);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    opacity: 0;
    transform: translateY(20px);
    animation: slideUpFade $animation-duration $animation-timing forwards;
    animation-delay: 0.6s;
  }

  // 按鈕樣式
  .btn-primary {
    padding: 12px 30px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    opacity: 0;
    transform: translateY(20px);
    animation: slideUpFade $animation-duration $animation-timing forwards;
    animation-delay: 0.8s;

    &:hover {
      background-color: darken(#e74c3c, 10%);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  }

  // 控制按鈕
  .control-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.5rem;
    z-index: 3;
    opacity: 0;
    @include flex-center;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      transform: translateY(-50%) scale(1.1);
    }

    &.prev {
      left: var(--spacing-lg);
      animation: slideInLeft 0.5s forwards;
    }

    &.next {
      right: var(--spacing-lg);
      animation: slideInRight 0.5s forwards;
    }
  }

  &:hover .control-btn {
    opacity: 1;
  }

  // 指示器
  &-indicators {
    position: absolute;
    bottom: var(--spacing-lg);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: var(--spacing-sm);
    z-index: 3;

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: white;
        transform: scale(1.2);
      }

      &:hover {
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

// 動畫關鍵幀
@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    transform: translate(-20px, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0, -50%);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translate(20px, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0, -50%);
    opacity: 1;
  }
}
</style>