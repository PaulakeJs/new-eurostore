import axiosInstance from "./axiosInstance";

export const AddToCart = async(payload) => {
    try{
        const response = await axiosInstance.post('/api/cart/new',payload)
        return response.data
    }
    catch(err){
        return err.message
    }
}