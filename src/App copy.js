import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

  const [data, setData] = useState(0)

  function IncrementData() {
    setData(data + 1)
  }

  function DecrementData() {
    setData(data - 1)
  }

 
  return (
    <div className="App">
      <h1>{data}</h1>
     <div className='two-btn'>
      <button onClick={IncrementData}>Increment</button>
      <button onClick={DecrementData}>Decrement</button>
     </div>
    </div>
  );
}

export default App;
