import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@/views/PortfolioPage.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
  ]
})


// const router = createRouter({
//   history: createWebHistory(),    //import.meta.env.BASE_URL
//   routes
// })

export default router
