import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  )
} 