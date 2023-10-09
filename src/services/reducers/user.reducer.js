import { createSlice } from "@reduxjs/toolkit";
import {
  createEventTicketAction,
  getAllEventsAction,
  getSolanaBalanceAction,
  getTicketsAction,
  setCurrentEvent,
  getEventCountAction,
  getTicketCountAction,
} from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    events: null,
    loadingState: false,
    current_event: null,
    purchase_ticket: null,
    tickets: null,
    solana_balance: null,
    eventCount: 0,
    ticketCount: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getTicketsAction.pending, (state, action) => {
      state.loadingState = true;
    });
    builder.addCase(getTicketsAction.fulfilled, (state, action) => {
      state.loadingState = false;
      state.tickets = action.payload;
      console.log("Events:", action.payload);
    });
    builder.addCase(getTicketsAction.rejected, (state, action) => {
      state.loadingState = false;
    });
    //
    builder.addCase(getAllEventsAction.pending, (state, action) => {
      state.loadingState = true;
    });
    builder.addCase(getAllEventsAction.fulfilled, (state, action) => {
      state.loadingState = false;
      state.events = action.payload;
      console.log("Events:", action.payload);
    });
    builder.addCase(getAllEventsAction.rejected, (state, action) => {
      state.loadingState = false;
    });
    //
    builder.addCase(setCurrentEvent.pending, (state, action) => {
      state.loadingState = true;
    });
    builder.addCase(setCurrentEvent.fulfilled, (state, action) => {
      state.loadingState = false;
      state.current_event = action.payload;
    });
    builder.addCase(setCurrentEvent.rejected, (state, action) => {
      state.loadingState = false;
    });
    //
    //
    builder.addCase(createEventTicketAction.pending, (state, action) => {
      state.loadingState = true;
    });
    builder.addCase(createEventTicketAction.fulfilled, (state, action) => {
      state.loadingState = false;
      state.purchase_ticket = action.payload;
    });
    builder.addCase(createEventTicketAction.rejected, (state, action) => {
      state.loadingState = false;
    });
    builder.addCase(getSolanaBalanceAction.pending, (state, action) => {
      state.loadingState = true;
    });
    builder.addCase(getSolanaBalanceAction.fulfilled, (state, action) => {
      state.loadingState = false;
      state.solana_balance = action.payload;
    });
    builder.addCase(getSolanaBalanceAction.rejected, (state, action) => {
      state.loadingState = false;
    });

    builder.addCase(getEventCountAction.fulfilled, (state, action) => {
      state.eventCount = action.payload;
    });
    builder.addCase(getEventCountAction.rejected, (state, action) => {
      state.loadingState = false;
    });

    builder.addCase(getTicketCountAction.fulfilled, (state, action) => {
      state.ticketCount = action.payload;
    });
    builder.addCase(getTicketCountAction.rejected, (state, action) => {
      state.loadingState = false;
    });

    builder.addDefaultCase((state, action) => {
      state.loadingState = false;
    });
  },
});

export default userSlice.reducer;
