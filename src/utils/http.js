import axios from 'axios'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8080/',
      name: 'E-arena',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //Interceptor la trung gian, dung de config request trc khi gui len server hoc config respone khi dc xu ly boi then va catch
    this.instance.interceptors.response.use(
      response => {
        const result = [ ...response.data]
        return result
      },
      ({ response }) => {
        if (response.status === 401) {
            console.log("error")
        }
        const result = { ...response.data, status: response.status }
        return Promise.reject(result)
      }
    )
  }
  get(url, config = null) {
    return this.instance.get(url, config)
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config)
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config)
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config
    })
  }
}

const http = new Http()

export default http