import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { get } from "../services";
import { CONSTANTS, apiPaths } from "../constants";
import { Loader } from "../components";

// to provide authenticate user data throught the project
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem(CONSTANTS.TOKEN);

    const fetchData = async () => {
      if (token) {
        try {
          const data = await get(apiPaths.STUDENT.SELF);
          console.log(data);

          if (data) {
            setUser(data);
          }
        } catch (error) {
          console.log("AuthContext.jsx error ", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
    if (!token) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="w-100 vh-100 ">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
