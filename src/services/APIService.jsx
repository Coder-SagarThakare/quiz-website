import axiosInstance from "../middlewares";

export const loginUser = async (url, data) => {
  return await axiosInstance.post(url, data);
};
