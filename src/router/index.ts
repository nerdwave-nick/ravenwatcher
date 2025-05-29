import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Character } from '@/components/ravenswatch/wiki/characters'

const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: HomeView,
}

const ravenswatchRoute: RouteRecordRaw = {
  path: '/ravenswatch',
  name: 'Ravenswatch',
  component: () => import('../views/ravenswatch/RavenswatchView.vue'),
  children: [
    {
      path: '',
      name: 'ravenswatch home',
      component: () => import('../views/ravenswatch/HomeView.vue'),
    },
    {
      path: '/ravenswatch/wiki',
      name: 'Ravenswatch Wiki',
      component: () => import('../views/ravenswatch/WikiView.vue'),
      children: [
        {
          path: '',
          name: 'ravenswatch wiki home',
          component: () => import('../views/ravenswatch/wiki/WikiHomeView.vue'),
        },
        {
          path: '404',
          component: () => import('../views/ravenswatch/wiki/404View.vue'),
        },
        {
          path: 'heroes',
          component: () => import('../views/ravenswatch/wiki/HeroesView.vue'),
        },
        {
          path: 'heroes/:hero',
          component: () => import('../views/ravenswatch/wiki/HeroView.vue'),
          beforeEnter: (to, _, next) => {
            if (Object.values(Character).includes(to.params.hero as Character)) {
              return next()
            }
            return next('/ravenswatch/wiki/404')
          },
        },
      ],
    },
    {
      path: '/ravenswatch/builder',
      name: 'Ravenswatch Character Builder',
      component: () => import('../views/ravenswatch/BuilderView.vue'),
    },
  ],
}

export const topLevelRoutes: RouteRecordRaw[] = [homeRoute, ravenswatchRoute] as const
// dynamically import routes for games
const routes: RouteRecordRaw[] = topLevelRoutes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
