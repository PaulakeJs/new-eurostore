import axiosInstance from "./axiosInstance";

export const NewItem = async (payload) => {
  try {
    const res = await axiosInstance.post("/api/item/add", payload);
    return res.data;
  } catch (err) {
    return err.message;
  }
};

export const GetItem = async (category) => {
  try {
    const res = await axiosInstance.get(`/api/item/get/${category}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
};
