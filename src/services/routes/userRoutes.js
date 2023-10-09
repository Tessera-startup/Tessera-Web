import { API } from "../axios_config";

export const getAllTickets = () => API.get("/events/all-event-tickets");
export const getAllEvents = () => API.get("/events/all-events");
export const createUserEvents = () => API.get("/events/user-events");
export const createUserTickets = () => API.get("/events/user-tickets");
export const createEvent = (formData) =>
  API.post("/events/create-event", formData, {
    headers: { "content-type": "multipart/form-data" },
  });
export const createEventTicket = (formData) =>
  API.post("/events/create-event-ticket", formData);
export const getSolanaBalanceRoute = (formData) =>
  API.post("/auth/balance", formData);
