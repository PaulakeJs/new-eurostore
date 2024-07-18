import axiosInstance from "./axiosInstance";

export const GetProductList = async (tag) => {
  try {
    const result = await axiosInstance.get(
      `/api/productRoute/product-list/${tag}`
    );
    return result.data;
  } catch (err) {
    return err.message;
  }
};

export const GetProduct = async (id) => {
  try {
    const result = await axiosInstance.get(`/api/productRoute/product/${id}`);
    return result.data;
  } catch (err) {
    return err.message;
  }
};
