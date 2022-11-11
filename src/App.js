import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState('React Form Input')

  function onChange(val) {
    // console.log(val.target.value)
    setData(val.target.value)

    
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <input placeholder='Full Name' onChange={onChange}/>

    </div>
  );
}

export default App;
