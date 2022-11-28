import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Timer from './Timer'

import React, {createContext, useState, useEffect} from 'react';

export const useCounter = createContext()

function App() {
  const [counter, setCouter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCouter(counter+1)
    }, 1000)
  })
 
  return (
    <useCounter.Provider value={counter}>
         <h1>useContext Hooks API</h1>
         <Counter />
         <Timer />
    </useCounter.Provider>
  );
  
}

export default App;
