import axios from 'axios'
import * as ep from './endpoints'
export default class {
  static async fetchDataFromApi () {
    return await axios.get(ep.SAMPLE).then((res) => res.data)
  }
}