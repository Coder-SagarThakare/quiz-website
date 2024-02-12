import axios from 'axios'
import { BASE_URL } from '../constants'
import { LocalStorageService } from '../services'

// Create a reusable Axios instance with a base URL
// The base URL for all HTTP requests

export const axiosInstance = axios.create({
    baseURL : BASE_URL,
})

axiosInstance.interceptors.request.use((req)=>{
    const token = LocalStorageService('')
})
