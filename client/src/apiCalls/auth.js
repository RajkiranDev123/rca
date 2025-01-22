import { axiosInstance } from "./index"


const BaseUrl = import.meta.env.VITE_BASE_URL
console.log(BaseUrl)

export const signUpUser = async (user) => {
    try {
        const response = await axiosInstance.post(`${BaseUrl}/api/auth/signup`, user)
        console.log("from auth signUpUser ==> ", response)
        return response.data
    } catch (error) {
        console.log("from auth signUpUser catch block ==> ", error.response.data)
        console.log("from auth signUpUser catch block ==> ", error)
        return Promise.reject(error);
    }
}

export const loginUser = async (user) => {
    try {
        const response = await axiosInstance.post(`${BaseUrl}/api/auth/login`, user)
        return response.data
    } catch (error) {
        return Promise.reject(error);
    }
}

