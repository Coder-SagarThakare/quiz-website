import axiosInstance from "../middlewares";

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
