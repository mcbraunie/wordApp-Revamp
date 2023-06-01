// Old site set-up

import Button from 'react-bootstrap/Button';
import './App.css';
import React from 'react';

// import { handleGuess, randomWord, checkIfGameWon, checkIfGameLost,
//   guessedWord, guessDifficulty, getSelection } from './assets/js/appLogic';

// outer variables 
let answer = '';             // holds the value of the random word to be served to the .html 
let maxWrong = 10;           // default game is set to easy  
let diff_setting = 'Easy';   // default ""
let mistakes = 0;            // mistakes are initialized to 0
let guessed = [];            // guessed letters are stored in an array initialized empty
let wordStatus = null;       // used to dislay current state of word to user (guessedWord())

function lettersPressed(chosenLetter) {
  const letterState = guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
   return letterState;
}

function GameTitle() {
  return (
    <h1 className='game-header'>Random Word Guessing Game</h1>
  )
}

function GamePrompt() {
  return (
    <p className='word-prompt'>Word to be guessed:</p>
  )
}

function SetDifficulty() {
  return (
    <div className='dropdown-content'>
      <label className='difficulty-prompt'>
        Set difficulty level:
        <select className='difficulty-dropdown'>
          <option value="setEasy">Easy</option>
          <option value="setMedium">Medium</option>
          <option value="setHard">Hard</option>
        </select>
      </label>
    </div>
  )
}


const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I",
  "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z"
];


const handleGuess = (letter) => {
  alert(`${letter} pressed!`);
};

function GameKeyboard({handleGuess}) {
  return(
    <div>
      {alphabet.map((letter) => (
        <button onClick={() => {
          handleGuess(letter);
        }}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

function GuessCount() {
  return(
    <div id='guess-counter'>
    </div>
  )
}

function WrongGuessesPrompt() {
  return(
    <span id='mistakes'>{mistakes}</span>
  )
}

function TallyGuessesPrompt() {
  return(
    <span id='maxWrong'>{maxWrong}</span>
  )
}

function WordGuessContainer() {
  return(
    <div className='container'>
      <GuessCount />Guesses: <WrongGuessesPrompt /> of <TallyGuessesPrompt />
    </div>
  )
}

function RestartButton() {
  return(
    <>
      <Button>Restart</Button>
    </>
  )
}

export default function App () {
  return (
      <div>
        <>
        <SetDifficulty />
          <GameTitle />
          <GamePrompt />
        </>
        <WordGuessContainer />

        <GameKeyboard handleGuess={handleGuess} />
        <>
        <br></br>
          <RestartButton />
        </>
      </div>
      
  );
}

// export default App;