import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useState, useEffect } from "react";
import { fireAuth } from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    onAuthStateChanged(fireAuth, (user) => {
      setCurrentUser(user);
    });
  });
  console.log("current user", currentUser);
  return <AuthContext.Provider value={{ currentUser }}> {children} </AuthContext.Provider>;
};