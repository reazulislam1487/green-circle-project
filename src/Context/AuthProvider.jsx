import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../FireBase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
      // ...
    });
    return () => {
      subscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUpGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const userUpdate = (updatedDada) => {
    return updateProfile(auth.currentUser, updatedDada);
  };
  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    document
      .getElementById("themeRoot")
      .setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const authData = {
    user,
    loader,
    setUser,
    createUser,
    signIn,
    signUpGoogle,
    userUpdate,
    userLogOut,
    isDark,
    setIsDark,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
