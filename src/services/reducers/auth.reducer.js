import { createSlice } from "@reduxjs/toolkit";
import {
  SignUpAction,
  loginAction,
  logoutAction,
} from "../actions/authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authLoading: false,
    signUpLoading: false,
    authData: null,
  },
  extraReducers: (builder) => {
    builder.addCase(SignUpAction.pending, (state, action) => {
      state.signUpLoading = true;
    });
    builder.addCase(SignUpAction.fulfilled, (state, action) => {
      state.signUpLoading = false;
      // state.generatedUsername = action.payload
    });
    builder.addCase(SignUpAction.rejected, (state, action) => {
      state.signUpLoading = false;
    });
    //
    builder.addCase(loginAction.pending, (state, action) => {
      state.authLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.authLoading = false;
      state.authData = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.authLoading = false;
    });
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      const { success } = action.payload;

      if (success) {
        // Update the state to reflect a successful logout
        state.authData = null;
        state.error = null; // Clear any previous errors
      } else {
        // Optionally handle cases where the logout was not successful
        state.error = "Logout failed"; // Store an error message
      }
    });

    builder.addCase(logoutAction.rejected, (state, action) => {
      state.error = action.error.message; // Store only the error message
    });
  },
});

export default authSlice.reducer;
