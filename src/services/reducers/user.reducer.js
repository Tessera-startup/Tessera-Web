import { createSlice } from '@reduxjs/toolkit'
import { activateAccountAction, getTransactionsActions, userBalanceCustomersAction, withdrawToWalletAction } from '../actions/userActions'



const userSlice = createSlice({
    name: 'user',
    initialState: {
        transactions: null,
        balance_customer_count: null,
        transactionLoadingState: null,
        activateAccountLoadingState: null

    },
    extraReducers: (builder) => {
        builder.addCase(getTransactionsActions.pending, (state, action) => {
            // state.signUpLoading = true
        })
        builder.addCase(getTransactionsActions.fulfilled, (state, action) => {
            // state.signUpLoading = false
            state.transactions = action.payload
        })
        builder.addCase(getTransactionsActions.rejected, (state, action) => {
            // state.signUpLoading = false
        })
        //
        builder.addCase(userBalanceCustomersAction.pending, (state, action) => {
            // state.signUpLoading = true
        })
        builder.addCase(userBalanceCustomersAction.fulfilled, (state, action) => {
            // state.signUpLoading = false
            state.balance_customer_count = action.payload
        })
        builder.addCase(userBalanceCustomersAction.rejected, (state, action) => {
            // state.signUpLoading = false
        })
        //

        builder.addCase(withdrawToWalletAction.pending, (state, action) => {
            state.transactionLoadingState = true
        })
        builder.addCase(withdrawToWalletAction.fulfilled, (state, action) => {
            state.transactionLoadingState = false

        })
        builder.addCase(withdrawToWalletAction.rejected, (state, action) => {
            state.transactionLoadingState = false
        })
        //

        builder.addCase(activateAccountAction.pending, (state, action) => {
            state.activateAccountLoadingState = true
        })
        builder.addCase(activateAccountAction.fulfilled, (state, action) => {
            state.activateAccountLoadingState = false

        })
        builder.addCase(activateAccountAction.rejected, (state, action) => {
            state.activateAccountLoadingState = false
        })
        //


    }
})

export default userSlice.reducer