import axios from "axios"
import { authHeaders } from "@/api/authAPI"

export const teacherApi = {
  async getItemsList() {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/teachers`
    )
  },
  async getItem(itemId) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/teachers/${itemId}`
    )
  },
}
