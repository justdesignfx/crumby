import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://eatcrumby.justdesignfx.com/jd-admin/services",
})

export default apiClient
