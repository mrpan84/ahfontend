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
    path: '/folder/signin',
    name: 'Signin',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/folder/signup',
    name: 'Signup',
    component: () => import ('../views/RegistrationPage.vue')
  },
  {
    path: '/folder/forgot-password',
    name: 'ForgotPassword',
    component: () => import ('../views/ForgotPasswordPage.vue')
  },
  {
    path: '/folder/home/',
    name: 'Home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/folder/consignments',
    name: 'Consignments',
    component: () => import ('../views/ConsignmentsPage.vue')
  },
  {
    path: '/folder/consignment',
    name: 'Consignment',
    component: () => import ('../views/ConsignmentPage.vue')
  },
  {
    path: '/folder/schedules',
    name: 'Schedules',
    component: () => import ('../views/AuctionSchedulesPage.vue')
  },
  {
    path: '/folder/session',
    name: 'Session',
    component: () => import ('../views/AuctionSessionPage.vue')
  },
  {
    path: '/folder/bale',
    name: 'Bale',
    component: () => import ('../views/BalesPage.vue')
  },
  {
    path: '/folder/growerclubs',
    name: 'Grower',
    component: () => import ('../views/GrowerClubsPage.vue')
  },
  {
    path: '/folder/camera',
    name: 'Camera',
    component: () => import ('../views/CameraPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
