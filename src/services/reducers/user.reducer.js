import { createSlice } from "@reduxjs/toolkit";
import { getAllEventsAction, getTicketsAction } from "../actions/userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    events: null,
    loadingState: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getTicketsAction.pending, (state, action) => {
      state.loadingState = true;
    });
    builder.addCase(getTicketsAction.fulfilled, (state, action) => {
      state.loadingState = false;
      state.events = action.payload;
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
    });
    builder.addCase(getAllEventsAction.rejected, (state, action) => {
      state.loadingState = false;
    });
  },
});

export default userSlice.reducer;
