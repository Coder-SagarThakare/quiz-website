import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { manageToken, manageUser } from "../services";

// to provide authenticate user data throught the project
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      if (manageToken("get", "token")) {
        const data = await manageUser("get", "/user/self");

        if (data) {
          setUser(data);
        }
      }
    }

    fetchData()
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};