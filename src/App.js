import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {

const [name, setName] = useState(null)
const [email, setEmail] = useState(null)
const [grad, setGrad] = useState(null)

const [print, setPrint] = useState(false)
  function ChangeInput(e) {
    e.preventDefault()
    setName(name)
    setEmail(email)
    setGrad(grad)
    setGrad(grad)
  }
 
  return (
    <div className="App">
      {
        print? 
        <h1>Name: {name}</h1>
        :null 
      }
      
      {/* <h1>Email: {email}</h1>
      <h1>Grad: {grad}</h1> */}
      <form onSubmit={ChangeInput}>
          <input type="text" onChange={(e) => {setName(e.target.value)}}/>
          <input type="text" onChange={(e) => {setEmail(e.target.value)}}/>
          <select onChange={(e) => {setGrad(e.target.value)}}>
            <option>grad 1</option>
            <option>grad 2</option>
            <option>grad 3</option>
            <option>grad 4</option>
          </select>
          <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
