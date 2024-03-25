/*'use client';
 
import { createContext, useState } from 'react';
  
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
   const UserContext = createContext({});
   const [user, setUser] = useState(null);
  return <ContextProvider.Provider value={{ user, setUser }}>{children}</ContextProvider.Provider>
}*/