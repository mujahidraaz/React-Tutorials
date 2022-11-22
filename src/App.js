import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';

function App() {

  const [counter, setCounnter] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCounnter(counter+1)
    }, 1000)
  })

  return (
    <div className="App">
      <h1>useEffect Hooks</h1>  
      <h1>Counter: <span>{counter}</span></h1>  
    </div>
  );
}

export default App;
