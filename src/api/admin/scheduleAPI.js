import axios from "axios"
import { authHeaders } from "@/api/authAPI"

export const scheduleApi = {
  async getItemsList(groupId = "", teacherId = "") {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/schedules?group__id=${groupId}&teacher__id=${teacherId}`
    )
  },
  async getItem(itemId) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/schedules/${itemId}`
    )
  },
}
