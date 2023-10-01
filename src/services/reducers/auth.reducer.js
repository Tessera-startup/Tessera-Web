import { createSlice } from '@reduxjs/toolkit'
import { SignUpAction, loginAction } from '../actions/authActions'


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authLoading: false,
        signUpLoading: false,
        authData: null

    },
    extraReducers: (builder) => {
        builder.addCase(SignUpAction.pending, (state, action) => {
            state.signUpLoading = true
        })
        builder.addCase(SignUpAction.fulfilled, (state, action) => {
            state.signUpLoading = false
            // state.generatedUsername = action.payload
        })
        builder.addCase(SignUpAction.rejected, (state, action) => {
            state.signUpLoading = false
        })
        //
        builder.addCase(loginAction.pending, (state, action) => {
            state.authLoading = true
        })
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.authLoading = false
            state.authData = action.payload

        })
        builder.addCase(loginAction.rejected, (state, action) => {
            state.authLoading = false
        })


    }
})

export default authSlice.reducer