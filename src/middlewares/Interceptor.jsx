import axios from "axios";
import { constants } from "../constants";
import { manageToken } from "../services";
import toast from "react-hot-toast";

// Create a reusable Axios instance with a base URL
// The base URL for all HTTP requests

export const axiosInstance = axios.create({
  baseURL: constants.BASE_URL,
});

/**
 * Axios request interceptor to attach authorization token to outgoing requests.
 * @param {Object} req - Axios request config object.
 * @returns {Object} - Updated Axios request config object with Authorization header if token is present.
 * This interceptor retrieves the token from local storage and attaches it to the request headers if available.
 */

axiosInstance.interceptors.request.use((req) => {
  const token = manageToken("get", "token");
  if (token) req.headers.Authorization = `Bearer ${token}`;

  return req;
});

// add comment for this
axiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log("ERROR : ", err.response.data.message);
    toast.error(err.response.data.message);
    return Promise.reject(err);
  }
);
