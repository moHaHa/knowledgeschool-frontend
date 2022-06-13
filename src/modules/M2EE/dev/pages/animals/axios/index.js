import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8080'
})

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.log(err)
  }
)
export default instance
