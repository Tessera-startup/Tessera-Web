import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginInRoute, signUpRoute } from '../routes/authRoutes'


export const SignUpAction = createAsyncThunk(
    'auth/SignUpAction',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await signUpRoute(formData)

            toast.success("SignUp Successfull")
            navigate('/login', { replace: true })

            return data
        } catch (error) {
            console.log(error.response)
            return rejectWithValue(null)
        }
    }
)

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async ({ formData, toast, navigate }, { rejectWithValue }) => {
        try {
            const { data } = await loginInRoute(formData)
          
            // const payload = {
            //     success: true,
            //     access: data.access,
            //     refresh: data.refresh,
            //     credentials: data.data
            // }

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