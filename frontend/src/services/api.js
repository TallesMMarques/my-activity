import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.20.135:3333/'
})

export default api