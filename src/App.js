import logo from './logo.svg';
import './App.css';

import {useState, useEffect, useMemo} from 'react'

function App() {

  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter+1)
    }, 1000)
  })

  useEffect(() => {
    setTimeout(() => {
      setCounter2(counter2+1)
    }, 3000)
  })
  
  useMemo(() => {
    setTimeout(() => {
      setCounter3(counter3+1)
    }, 1000)
  }, [counter2])

  return (
      <div className='app'>
         <h1>useMemo Hook #30</h1>
         <h1>{counter}</h1>
         <h1>{counter2}</h1>
         <h1>{counter3}</h1>
      </div>
  );
  
}

export default App;
