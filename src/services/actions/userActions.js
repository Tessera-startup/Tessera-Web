import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEvent, getAllEvents, getAllTickets } from "../routes/userRoutes";

export const getTicketsAction = createAsyncThunk(
  "user/getTickets",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllTickets();

      return data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(null);
    }
  }
);

export const getAllEventsAction = createAsyncThunk(
  "user/getEvents",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllEvents();
      console.log("EVENT FULFILLED");

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(null);
    }
  }
);

export const createEventAction = createAsyncThunk(
  "user/createEvent",
  async ({ formData, toast }, { rejectWithValue }) => {
    try {
      const { data } = await createEvent(formData);
      toast.success("Event create successfully");

      return data;
    } catch (error) {
      console.log(error);
      toast.error("Failed to create the event. Please try again.");
      return rejectWithValue(null);
    }
  }
);

// export const getSolanaPrice = createAsyncThunk(
//     'user/getSolPrice',
//     async (_, { rejectWithValue }) => {
//         try {
//             const url = "https://data.messari.io/api/v1/assets/sol/metrics"
//             const { data } = await fetch(url)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }
//                     const jsonData = response.json();
//                     return jsonData.data.market_data.price_usd
//                 })
//                 .then(data => {

//                     console.log(data);
//                 })
//                 .catch(error => {
//                     // Handle errors here
//                     console.error('Error:', error);
//                 });

//         } catch (error) {

//             console.log(error.response)
//             return rejectWithValue(null)
//         }
//     }
// )
