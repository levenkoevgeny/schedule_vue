import axios from "axios"

export function authHeaders(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

export const authApi = {}
