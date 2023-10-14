import { ReactNode } from "react";

export interface AuthContextProps {
  user: any | null;
  error: string;
  setError: (error: string) => void;
  setUser: (user: any) => void;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}