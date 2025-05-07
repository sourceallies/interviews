import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('');
  // const [correctGuess, setCorrectGuess] = useState(false)
  const [guessAttempted, setGuessAttempted] = useState(false);

 const  TARGET_WORD = "PHISH";

  // const handleChange = (e) => {
  //   const newinput = e.target.value;

  //   if (newinput.length === 5) {
  //     setInput(newInput)
  //   }
  // }

  const handleSubmitBtn = () => {
    setGuessAttempted(true);

  }
// this bit is deciding what message to show
  const getMessage = () => {
   return TARGET_WORD === input ?'Correct' : "Not Correct"
  }

  return (
    <>
      <div>
      <h2>Enter 5 letter word</h2>
        <input type="text" placeholder='Enter Name' value={input}  onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleSubmitBtn}>Add</button>

{/* this bit of code simply decides whether or not we'll show a message */}
        {guessAttempted === true 
        ? getMessage() 
        : ''}

        
    {/* {correctGuess === true ? "Correct": "Not Correct"} */}
    {/* {TARGET_WORD === input ?'Correct' : "Not Correct"}  */}
        
       

       
        

    
      </div>
      <h1>Vite + React</h1>
      
    
    </>
  )
}

export default App
