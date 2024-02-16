import { useEffect, useState } from "react";
import { createContext } from "react";
import { manageToken, manageUser } from "../services";

// to provide authenticate user data throught the project
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

  console.log('user',user);

  useEffect(() => {
    if (manageToken("get", "token")) {
      const user = manageUser("/user/self");
      console.log(user);
    }
  });

  return (
    <AuthContext.Provider Provider={{ user, setuser }}>
      {children}
    </AuthContext.Provider>
  );
};
