import { axiosInstance } from "./index";
const BaseUrl = import.meta.env.VITE_BASE_URL
export const getLoggedUser = async () => {
    try {
        const response = await axiosInstance.get(`${BaseUrl}/api/user/get-logged-user`)
        return response.data
    } catch (error) {
        return Promise.reject(error);
    }
}