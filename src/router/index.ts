import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/home'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/folder/signin/',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/folder/signup/',
    component: () => import ('../views/RegistrationPage.vue')
  },
  {
    path: '/folder/forgotpassword/',
    component: () => import ('../views/ForgotPasswordPage.vue')
  },
  {
    path: '/folder/home/',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/folder/consignments',
    component: () => import ('../views/ConsignmentsPage.vue')
  },
  {
    path: '/folder/consignment',
    component: () => import ('../views/ConsignmentPage.vue')
  },
  {
    path: '/folder/schedules',
    component: () => import ('../views/AuctionSchedulesPage.vue')
  },
  {
    path: '/folder/session',
    component: () => import ('../views/AuctionSessionPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
