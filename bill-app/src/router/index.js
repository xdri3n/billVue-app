import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BillView.vue'
import BillView from '../views/BillView.vue'
import ClientView from '../views/CustomerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/bills',
      name: 'bills',
      component: () => import('../views/BillView.vue')
    },
    // Ajoutons une route pour l'édition et la création d'une facture
    {
      path: '/bill/:id', //route dynamique qui passe un paramètre id
      name: 'bill',
      props: true, //remvoie le paramètre en tant que props
      component: () => import('../views/EditBillView.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/CustomerView.vue')
    },
    {
      path: '/customer/:id',
      name: 'customer',
      props: true,
      component: () => import('../views/EditCustomerView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // Nous ajoutons ici une route avec une expression régulière pour gérer les erreurs de navigation
    // ATTTENTION À BIEN METTRE CETTE ROUTE EN DERNIER DANS LE TABLEAU DU ROUTER
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
