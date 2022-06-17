import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://mhacd.com',

  validateStatus: () => true
})

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.error(err)
  }
)
export default instance
