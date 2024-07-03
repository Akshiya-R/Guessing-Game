import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';
import GuessImg from './GuessImg.png';


const secretNum = Math.floor(Math.random()*10)+1


function App() {
  const [term,setTerm] = useState("")
  function HandleChange(e){
    setTerm(e.target.value)
  }
  return (
    <>
    <h1>Welcome to my Guess Game!</h1>
    <img src={GuessImg}></img>
    <div className="container">
      <div className="head">
        <label htmlFor='term'>Guess the number between 1 to 10 </label>
      </div>
      <input id='term' type='text' name='term' onChange={HandleChange}>
      </input>
      <Result secretNum={secretNum} term={term}/>
    </div>
    </>

    
  );
}

export default App;
