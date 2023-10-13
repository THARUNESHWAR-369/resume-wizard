"use client";

import React, { createContext, useEffect, useState } from "react";
import { account } from "src/appwrite/appwriteconfig";
import { ContextProviderProps, User, UserContextProps } from "src/context/interface/context-provider.interface";


export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    (async function () {
      try {
        const res = await account.get();
        // const res=await account.getSession('current');
        setUser({ email: res.email, id: res.$id });
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
