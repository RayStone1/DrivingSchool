import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Pages/Main'
import Galery from '@/components/Pages/Galery'
import Categories from '@/components/Pages/Categories'
import Price from '@/components/Pages/Price'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/galery',
    name: 'galery',
    component: Galery
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: '/price',
    name: 'price',
    component: Price
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
