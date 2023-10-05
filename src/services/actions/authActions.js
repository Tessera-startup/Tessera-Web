import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginInRoute, signUpRoute, getBalanceRoute } from '../routes/authRoutes'


export const SignUpAction = createAsyncThunk(
    'auth/SignUpAction',
    async ({ formData, toast,}, { rejectWithValue }) => {
        try {
            const { data } = await signUpRoute(formData)

            toast.success("SignUp Successful")
            // navigate('/login', { replace: true })

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async ({ formData, toast}, { rejectWithValue }) => {
        try {
            const { data } = await loginInRoute(formData)
            console.log(formData,"FORMDATA");
        

            if (data) {
                toast.success('Login successful.')

                localStorage.setItem('user', JSON.stringify(data))
            }
          

            return data
        } catch (error) {
            toast.warn('Login not successful')
            return rejectWithValue(null)
        }
    }
)