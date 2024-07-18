import axiosInstance from "./axiosInstance";

export const GetCategoryItems = async (category) => {
  try {
    const response = await axiosInstance.get(
      `/api/admin/get-category-item/${category}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const GetAllUsers = async () => {
  try {
    const response = await axiosInstance.get(`/api/admin/get-all-users`);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const GetAllProducts = async () => {
  try {
    const response = await axiosInstance.get(`/api/admin/get-all-products`);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const DeleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/api/admin/delete-product/${id}`
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const GetProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/admin/get/product/${id}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const UpdateUser = async (payload) => {
  try {
    const response = await axiosInstance.put(`/api/admin/update-user`, payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const EditProducts = async (id,payload) => {
  try {
    const response = await axiosInstance.put(`/api/admin/products/${id}`, payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};
export const AddProducts = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `/api/admin/add-products`,
      payload
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};
