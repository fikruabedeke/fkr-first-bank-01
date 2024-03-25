'use client';
//import ContextProvider from '@/app/ui/context-provider';

import { useContext,useState,createContext} from 'react';
//const UserContext = createContext(null);

export default function Deposit() {

  return (
    <>
      <span className="placeholder col-12 bg-dark"></span>
      <h1>Deposit</h1>
      <span className="placeholder col-12 bg-dark"></span>
	  <input
              type="number" // Use type "number" for numeric input
              className="form-control"
              placeholder="Deposit Amount"
            />
            <button>Submit</button>
    </>
  );
}