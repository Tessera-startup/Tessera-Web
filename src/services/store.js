import { configureStore } from '@reduxjs/toolkit'

import authReducer from './reducers/auth.reducer'
import userReducer from './reducers/user.reducer'



export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        // admin: adminReducer,
    }
})