"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { fb_auth } from "src/firebase_config/config";
import { UserType } from "src/constants/auth-constants/auth.constant.interface";
import { useRouter } from "next/navigation";
import firebase_signup from "../auth/firebase-auth/firebase-auth";

const AuthContext = createContext({});

export const useAuth = () => useContext<any>(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState<Boolean>(true);

  const router = useRouter();

  // Update the state depending on auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fb_auth, (user) => {
      console.log("loading: ", loading);
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
        console.log("logedin user: ", user);
        router.push("/dashboard");
      } else {
        setUser({ email: null, uid: null });
        router.push("/");
      }
    });
    console.log("loading: ", loading);

    setLoading(false);

    return () => unsubscribe();
  }, []);

  // Sign up the user
  const signUp = (email: string, password: string, username:any) => {
    return firebase_signup(email, password, username);
  };

  // Login the user
  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(fb_auth, email, password);
  };

  // Logout the user
  const logOut = async () => {
    setUser({ email: null, uid: null });
    return await signOut(fb_auth);
  };
  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
