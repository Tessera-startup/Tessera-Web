import axios from 'axios'
import { decode } from 'html-entities'


let USERFROMLS

if (typeof window !== "undefined") {
    USERFROMLS = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

}


const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {

        // Authorization: `Bearer${USERFROMLS.access}`
    },
})


instance.interceptors.request.use(
    (req) => {
        if (typeof window !== "undefined") {
            USERFROMLS = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
        }
        if (USERFROMLS) {
           

            req.headers['Authorization'] = `Bearer ${USERFROMLS.accesstoken}`
        }
        return req
    },
    (error) => {
        return Promise.reject(error)
    }
)



instance.interceptors.response.use(
    (res) => {
        const api_response = decode(JSON.stringify(res))
        return JSON.parse(api_response)
    },
    async (err) => {
        const error = err.config

        if (err.response) {
            if (err.response.status === 401) {
                localStorage.removeItem('user')
                window.location.href = '/login'

                return instance(error)
            }
        }

        return Promise.reject(err)
    }
)


export const API = instance