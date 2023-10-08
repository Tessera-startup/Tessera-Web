import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createEvent,
  createEventTicket,
  createUserEvents,
  createUserTickets,
  getAllEvents,
  getAllTickets,
  getSolanaBalanceRoute,
} from "../routes/userRoutes";

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

export const createEventTicketAction = createAsyncThunk(
  "user/createEventTicket",
  async ({ formData, toast }, { rejectWithValue }) => {
    try {
      const { data } = await createEventTicket(formData);

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(null);
    }
  }
);

export const setCurrentEvent = createAsyncThunk(
  "user/currentEvent",
  async ({ data }, { rejectWithValue }) => {
    try {
      return data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(null);
    }
  }
);

//Solana Balance Action
export const getSolanaBalanceAction = createAsyncThunk(
  "user/getSolanaBalance",
  async ({ formData }, { rejectWithValue }) => {
    try {
      //Solana Balance Route
      const { data } = await getSolanaBalanceRoute(formData);
      console.log(data, "SOLANA BALANCE");

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(null);
    }
  }
);

export const getEventCountAction = createAsyncThunk(
  "user/getEventCount",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await createUserEvents();
      return data.length; // Assuming data is an array of events
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(null);
    }
  }
);

export const getTicketCountAction = createAsyncThunk(
  "user/getTicketCount",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await createUserTickets();
      return data.length; // Assuming data is an array of tickets
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(null);
    }
  }
);

