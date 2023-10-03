import { API } from '../axios_config'

export const getRouteSample = () => API.get('/events/route1')
export const postRouteSample = (formData) => API.post('/events/route2', formData)




