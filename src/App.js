import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h1>React Material UI</h1>
      <button onClick={() => {alert('lorem ipsum')}}>Click Me</button>
      <Button onClick={() => {alert('lorem ipsum')}} variant="contained">Click Me</Button>
      <Button variant="outlined">Outlined</Button>

      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </div>
  );
}

export default App;
