import { createAsyncThunk } from "@reduxjs/toolkit"
import { activateAccountRoute, transactionRoute, userBalanceCustomersRoute, withdrawToWalletRoute } from "../routes/userRoutes"



// export const getTransactionsActions = createAsyncThunk(
//     'user/getTransactionsActions',
//     async (_, { rejectWithValue }) => {
//         try {
//             const { data } = await transactionRoute()


//             return data.data
//         } catch (error) {
//             console.log(error.response)
//             return rejectWithValue(null)
//         }
//     }
// )







export const getSolanaPrice = createAsyncThunk(
    'user/getSolPrice',
    async (_, { rejectWithValue }) => {
        try {
            const url = "https://data.messari.io/api/v1/assets/sol/metrics"
            const { data } = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const jsonData = response.json();
                    return jsonData.data.market_data.price_usd
                })
                .then(data => {
                    
                    console.log(data);
                })
                .catch(error => {
                    // Handle errors here
                    console.error('Error:', error);
                });

        } catch (error) {

            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)