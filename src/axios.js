import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8080',

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
