import { createRouter, createWebHistory } from "vue-router"
import Schedule from "@/components/client/Schedule"

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/client/schedule",
  },
  {
    path: "/client/schedule",
    name: "schedule",
    component: Schedule,
    meta: { requiresAuth: false },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

router.beforeEach(async (to, from) => {
  // await store.dispatch("auth/actionCheckLoggedIn")
  // const isLoggedIn = store.getters["auth/getIsLoggedIn"]
  const isLoggedIn = true
  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    }
  }
})

export default router
