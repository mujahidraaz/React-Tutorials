import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

import { useCallback, useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0)
  const [timer, setTimer] = useState(0)

  const addition = useCallback(() => {

  }, [timer])

 return(
  <>
    <h1>useCallback hook #31</h1>
    <Timer addition={addition} timer={timer}/>
    <h1>{counter}</h1>
    <h1>{timer}</h1>
    <button onClick={() => {setCounter(counter + 1)}}>Counter + </button>
    <button onClick={() => {setCounter(counter + 1)}}>Counter + </button>
    <button onClick={() => {setCounter(counter + 1)}}>Counter + </button>
    <button onClick={() => {setTimer(timer + 1)}}>Timer + </button>
  </>
 )
}

export default App;
