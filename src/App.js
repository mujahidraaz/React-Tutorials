import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';

function App(props) {

  const [counter, setCounnter] = useState(0)
  useEffect(() => {

    let timer = setTimeout(() => {
      setCounnter(counter + 1)
      console.log(props.channel)
    }, 1000)
    return() => clearTimeout(timer)

  }, [counter, props.channel])

  return (
    <div className="App">
      <h1>useEffect Hooks (Dependency & Cleanup)</h1>  
      <h1>{props.channel}</h1>
      <h1>Counter: <span>{counter}</span></h1>  
      
    </div>
  );
}

export default App;
