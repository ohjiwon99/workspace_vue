import { createRouter, createWebHistory } from 'vue-router'
import InquiryFormView from '@/views/InquiryFormView.vue'

const routes = [
  {
    path: '/',
    name: 'inquiry',
    component: InquiryFormView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
