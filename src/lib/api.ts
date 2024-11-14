// Library Imports
import axios from 'axios'

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	params: {
		apiKey: process.env.REACT_APP_KEY,
	},
})