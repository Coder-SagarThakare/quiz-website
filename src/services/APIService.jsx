import axiosInstance from "../middlewares";
import { jwtDecode } from "jwt-decode";
import manageToken from "./LocalStorageService";
/**
 *
 * @param {string} url - The URL to which the POST request should be sent.
 * @param {object} data - The data to be included in the request body.
 * @returns {Promise} A Promise that resolves with the response data if the request is successful,
 *                    or rejects with an error if the request fails.
 */
export const loginUser = (url, data) => {
  return axiosInstance.post(url, data);
};

export const manageUser = (action, url, payload) => {

  const token = manageToken('get', "token")
  
  if (token) {
    console.log("token",token);

    const decoded = jwtDecode(token)

    console.log("decoded value :", decoded);
  }

  switch (action) {
    case "get":
      return axiosInstance.get(url);

    case "post":
      return axiosInstance.post(url, payload);

    default:
      return console.error("Invalid action provided.");
  }
};
