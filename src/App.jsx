import './App.css'
import { useState } from 'react';
import { Header } from './components/Header';
import { Container } from './components/container/container';
import { Letter } from './components/letter/Letter';

function App() {
  const [isClicked, setClickedState] = useState(false);
  return (
    <div className='App'>  
      <Header />
      {isClicked ? 
      <div className='main'>
        <Letter />
      </div> : <Container />}
      <button
        className="btn"
        onClick={() => {
            setClickedState((currentState) => !currentState)
        }}
      >
        Click Me
      </button>
    </div>
  )
}

export default App
