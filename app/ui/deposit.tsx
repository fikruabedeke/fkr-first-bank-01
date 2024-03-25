'use client';
//import ContextProvider from '@/app/ui/context-provider';

import { useContext,useState,createContext} from 'react';
const UserContext = createContext(null);

export default function Deposit() {
 const [users, setUsers] = useState([{ name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 }]);

 // State to store the deposit amount entered by the user
  const [depositAmount, setDepositAmount] = useState('');
  const handleDeposit = (index) => {
    // Convert the depositAmount string to a number
    const amount = parseFloat(depositAmount);
    if (!isNaN(amount) && amount > 0) {
      const updatedUsers = [...ctx.users]; // Create a copy of the users array
      updatedUsers[index].balance += amount; // Update the balance for the specified user
      ctx.setUsers(updatedUsers);
      // Reset the depositAmount state after successful deposit
      setDepositAmount('');
    } else {
      alert('Please enter a valid positive number for the deposit amount.');
    }
  };

  return (
    <>
      <span className="placeholder col-12 bg-dark"></span>
      <h1>Deposit</h1>
      <span className="placeholder col-12 bg-dark"></span>
      {users.map((user, index) => (
        <div key={index} className="">
          <div className="">
            <h6>Name: {user.name}</h6>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Balance: {user.balance}</p>
            <input
              type="number" // Use type "number" for numeric input
              className="form-control"
              placeholder="Deposit Amount"
              value={depositAmount} // Set the input value to the depositAmount state
              onChange={(e) => setDepositAmount(e.target.value)} // Update depositAmount state on input change
            />
            <button onClick={() => handleDeposit(index)}>Submit</button>
          </div>
        </div>
      ))}
    </>
  );
}