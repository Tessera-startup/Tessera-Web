import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createEvent,
  createEventTicket,
  getAllEvents,
  getAllTickets,
} from "../routes/userRoutes";
import axios from "axios";

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
