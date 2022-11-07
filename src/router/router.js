import { createRouter, createWebHistory } from "vue-router"
import Schedule from "@/components/client/Schedule"
import ScheduleMaking from "@/components/admin/ScheduleMaking"
import ScheduleList from "@/components/admin/ScheduleList"
import Teachers from "@/components/admin/Teachers"
import Locations from "@/components/admin/Locations"
import Rooms from "@/components/admin/Rooms"
import Overlays from "@/components/admin/Overlays"

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/client/schedule",
  },
  {
    path: "/client/schedule",
    name: "clientSchedule",
    component: Schedule,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin",
    name: "admin",
    redirect: "/admin/schedule/list",
  },
  {
    path: "/admin/schedule",
    name: "adminSchedule",
    redirect: "/admin/schedule/list",
  },
  {
    path: "/admin/schedule/list",
    name: "adminScheduleList",
    component: ScheduleList,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin/schedule/locations",
    name: "adminLocationList",
    component: Locations,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin/schedule/rooms",
    name: "adminRoomsList",
    component: Rooms,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin/schedule/teachers",
    name: "adminTeachersList",
    component: Teachers,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin/schedule/making/:groupId",
    name: "adminScheduleMaking",
    component: ScheduleMaking,
    meta: { requiresAuth: false },
  },
  {
    path: "/admin/schedule/overlays",
    name: "adminScheduleOverlays",
    component: Overlays,
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
