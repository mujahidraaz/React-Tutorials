import logo from './logo.svg';
import './App.css';

import React, {useRef} from 'react';

function App() {

  const useRefVal = useRef()

  function InputValue() {
    useRefVal.current.focus();
    useRefVal.current.style.color = "green"
  }
 

  return (
    <div className="App">
      <h1>useRef Hook #29</h1>

      <input type="text" ref={useRefVal}/>
      <button onClick={InputValue}>Input Click</button>

    </div>
  );

  }

export default App;
