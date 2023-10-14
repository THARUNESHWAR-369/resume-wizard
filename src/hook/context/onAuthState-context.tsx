"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from "firebase/auth";
import { useState, ReactNode, useLayoutEffect } from "react";
import { useAuth } from "./auth-context";
import { fb_auth } from "@/firebase/firebase.config";
import LoaderComponent from "@/components/loading";

export default function FirebaseOnAuthStateChanged({
  children,
}: {
  children: ReactNode;
}) {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    onAuthStateChanged(fb_auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    
  }, []);

  if (loading) {
    return <LoaderComponent/>;
  }

  return children;
}
