import axiosInstance from "./axiosInstance";

export const NewUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/auth/new", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/auth/login", payload);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const GetLoggedUser = async () => {
  try {
    const response = await axiosInstance.get("/api/auth/getuser");
    return response.data;
  } catch {
    return err.message;
  }
};

export const SendSms = async () => {
  try {
    const response = await axiosInstance.post("/api/send-otp");
    return response.data;
  } catch (err) {
    return err.message
  }
};
