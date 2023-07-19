import axios from 'axios'

import { API_URL } from '@/config/api.config'

export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message

export const axiosConfig = {
	baseURL: API_URL,
	headers: getContentType(),
}

export const axiosClassic = axios.create(axiosConfig)

export const instance = axios.create(axiosConfig)

instance.defaults.withCredentials = true

// instance.interceptors.request.use((config) => {
//     const accessToken =
// })
