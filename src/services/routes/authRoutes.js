import { API } from '../axios_config'

export const signUpRoute = (formData) => API.post('/users/register', formData)

export const loginInRoute = (formData) => API.post('/users/login', formData)