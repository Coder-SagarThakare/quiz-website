/**
 * Manages token storage in local storage based on the provided action.
 * @param {String} action - The action to perform: 'get', 'set', 'delete', or 'clear'.
 * @param {String} token - The token key.
 * @param {String} data - The data associated with the token (for 'set' action).
 * @returns {String|null} - The retrieved data (for 'get' action), or null if no data is retrieved.
 */

export default function manageToken(action, token, data) {
  switch (action) {
    case "get":
      if (token) {
        return localStorage.getItem(token);
      } else {
        console.error("Token key is required for 'get' action.");
      }
      break;
    case "set":
      if (token && data) {
        localStorage.setItem(token, data);
      } else {
        console.error("Token key and data are required for 'set' action.");
      }
      break;
    case "delete":
      if (token) {
        localStorage.removeItem(token);
      } else {
        console.error("Token key is required for 'delete' action.");
      }
      break;
    case "clear":
      localStorage.clear();
      break;
    default:
      console.error("Invalid action provided.");
  }
  return null;
}
