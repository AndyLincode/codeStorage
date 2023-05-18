import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/Page1.vue'
import WorkExperience from '../views/about/WorkExperience.vue'
import EducationExperience from '../views/about/EducationExperience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Page1',
      component: Page1,
      alias: '/home'
    },
    {
      path: '/:id',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page2.vue'),
      children: [
        {
          path: 'work',
          component: WorkExperience,
        },
        {
          path: 'education',
          component: EducationExperience,
        }
      ],
      alias: ['userPage', 'infoPage']
    },
    {
      path: '/:id',
      name: 'data',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Page3.vue')
    }
  ]
})

export default router
