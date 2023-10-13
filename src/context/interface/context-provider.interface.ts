import { ReactNode } from "react";

export interface User {
  email: string;
  id: string;
}

export interface UserContextProps {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}


export interface ContextProviderProps {
  children: ReactNode;
}
