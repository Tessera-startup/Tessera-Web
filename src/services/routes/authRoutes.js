import { API } from '../axios_config'

export const signUpRoute = (formData) => API.post('/auth/register', formData)

export const loginInRoute = (formData) => API.post('/auth/login', formData)