"use client";

import { createContext, useContext, useState } from 'react';
import { FirebaseAuthService } from 'src/firebase/services/auth/auth.service';
import { AuthContextProps, AuthProviderProps } from './interface/auth-context.interface';

const authContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth(): AuthContextProps  {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any | null>(null);
  const [error, setError] = useState<string>("");

  const loginWithGoogle = async () => {
    const { error, user } = await FirebaseAuthService.loginWithGoogle();
    console.log(error, user);
    setUser(user ?? null);
    setError(error);
  };

  const logout = async () => {
    await FirebaseAuthService.logout();
    setUser(null);
  };

  const value = { user, error, loginWithGoogle, logout, setUser, setError };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}


