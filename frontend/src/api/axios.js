import axios from "axios";


export const axiosDon = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

