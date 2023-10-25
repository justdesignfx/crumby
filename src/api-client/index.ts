import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://eatcrumby.com/jd-admin/services",
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
  },
})

export default apiClient
