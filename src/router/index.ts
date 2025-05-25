import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const homeRoute: RouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: HomeView,
}
const ravenswatchRoute: RouteRecordRaw = {
  path: '/ravenswatch',
  name: 'Ravenswatch',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/ravenswatch/HomeView.vue'),
}

export const topLevelRoutes: RouteRecordRaw[] = [homeRoute, ravenswatchRoute] as const

const ravenswatchRoutes: RouteRecordRaw[] = [
  {
    path: '/ravenswatch',
    name: 'Ravenswatch',
    component: () => import('../views/ravenswatch/RavenswatchView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/ravenswatch/HomeView.vue'),
      },
      {
        path: '/ravenswatch/wiki',
        name: 'Ravenswatch Wiki',
        component: () => import('../views/ravenswatch/WikiView.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/ravenswatch/wiki/WikiHomeView.vue'),
          },
          {
            path: 'heroes',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ravenswatch/wiki/HeroesView.vue'),
          },
          {
            path: 'heroes/:hero',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ravenswatch/wiki/HeroView.vue'),
          },
        ],
      },
      {
        path: '/ravenswatch/builder',
        name: 'Ravenswatch Character Builder',
        component: () => import('../views/ravenswatch/BuilderView.vue'),
      },
    ],
  },
]

// dynamically import routes for games
const routes: RouteRecordRaw[] = [...topLevelRoutes, ...ravenswatchRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
