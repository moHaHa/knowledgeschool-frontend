import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://knowledgeschool-001-site1.dtempurl.com',
  headers:{
    'Access-Control-Allow-Origin': '*'
  },  
  
  validateStatus: () => true
})

instance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res
  },
  (err) => {
    console.error(err)
  }
)
export default instance
