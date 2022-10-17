import axios from "axios"
import { authHeaders } from "@/api/authAPI"

export const classRoomApi = {
  async getItemsList(token) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/classrooms`,
      authHeaders(token)
    )
  },
  async getItem(token, itemId) {
    return axios.get(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/classrooms/${itemId}`,
      authHeaders(token)
    )
  },
  async addItem(token, itemData) {
    return axios.post(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/classrooms/`,
      itemData,
      authHeaders(token)
    )
  },
  async updateItem(token, itemData) {
    return axios.put(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/classrooms/${itemData.id}/`,
      itemData,
      authHeaders(token)
    )
  },
  async deleteItem(token, itemId) {
    return axios.delete(
      `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}/api/classrooms/${itemId}/`,
      authHeaders(token)
    )
  },
}
