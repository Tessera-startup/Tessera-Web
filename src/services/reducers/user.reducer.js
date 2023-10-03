import { createSlice } from '@reduxjs/toolkit'
import {  } from '../actions/userActions'



const userSlice = createSlice({
    name: 'user',
    initialState: {
        // transactions: null,
      

    },
    extraReducers: (builder) => {
        // builder.addCase(getTransactionsActions.pending, (state, action) => {
        //     // state.signUpLoading = true
        // })
        // builder.addCase(getTransactionsActions.fulfilled, (state, action) => {
        //     // state.signUpLoading = false
        //     state.transactions = action.payload
        // })
        // builder.addCase(getTransactionsActions.rejected, (state, action) => {
        //     // state.signUpLoading = false
        // })
        // //
        

  



    }
})

export default userSlice.reducer