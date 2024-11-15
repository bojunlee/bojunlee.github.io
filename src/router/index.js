import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail
  }
],



scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（例如使用瀏覽器的後退按鈕）
    if (savedPosition) {
      return savedPosition
    }
    // 對於所有其他路由導航，滾動到頂部
    return { top: 0 }
  }
})

export default router