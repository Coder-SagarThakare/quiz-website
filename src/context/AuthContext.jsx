import { useEffect, useState } from "react";
import { createContext } from "react";
import { manageToken, manageUser } from "../services";

// to provide authenticate user data throught the project
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    if (manageToken("get", "token")) {
      const data = manageUser("get", "/user/self");

      if (data) {
        setuser(data);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setuser }}>
      {children}
    </AuthContext.Provider>
  );
};
