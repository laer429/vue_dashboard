import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BoardView from '../views/BoardView.vue'
import CreateView from '../views/pages/CreateView.vue'
import ContentRouter from '../views/pages/ContentRouter.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'contentRoute',
          name: 'contentRoute',
          component: ContentRouter
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
