import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';


interface LoginContextData {
  username: string;
  requestAuth: () => void;
}

interface LoginProviderProps{
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider( { children } : LoginProviderProps ){
  const [username, setUsername] = useState('');

  function requestAuth(){
  
 }
  return (
    <LoginContext.Provider value={{
      username,
      requestAuth
      
    }}>
      {children}
      </LoginContext.Provider>
  )
}