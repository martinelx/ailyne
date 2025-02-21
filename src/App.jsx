import './App.css'
import { useState } from 'react';
import { Header } from './components/Header';
import { Letter } from './components/letter/Letter';
import { HandMade } from './components/handmade/HandMade';

function App() {
  const [isClicked, setClickedState] = useState(true);
  return (
    <div className='App'>  
      <Header />
      {isClicked ? 
      <div className='main'>
        <Letter />
      </div> : <HandMade />}
      <button
        className="btn"
        onClick={() => {
            setClickedState((currentState) => !currentState)
        }}
      >
        Click
      </button>
    </div>
  )
}

export default App
