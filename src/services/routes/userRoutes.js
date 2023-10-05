import { API } from '../axios_config'

export const getAllTickets = () => API.get('/events/all-tickets')
export const getAllEvents = () => API.get('/events/all-events')
export const createEvent = (formData) => API.post('/events/create-event', formData, { headers: { "content-type": "multipart/form-data" }})




