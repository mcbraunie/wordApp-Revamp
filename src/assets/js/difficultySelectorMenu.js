// difficulty selection dropdown for App.js

import React, { useState } from 'react';


function Difficulty() {
  return(
    <>
      <div className='dropdown-content'>
        <label className='difficulty-prompt'>
          Select Difficulty
          <SetDifficulty />
        </label>
      </div>
    </>
  )
}


function SetDifficulty() {
  // defines variables difficulty and setDifficulty with a default useState of 'setEasy'
  const [difficulty, setDifficulty] = useState('setEasy');

  // defines a variable (also a component) handleDifficultyChange with a received-value of 'event
  const handleDifficultyChange = (event) => {
    // setDifficulty is set to the listener event of React.SetStateAction, using the event value of the target
    setDifficulty(event.target.value);
  };

  // JSX for menu/events
  return (
  <>
    <select className='difficulty-dropdown' value={difficulty} onChange={handleDifficultyChange}>
      <option value="setEasy">Easy</option>
      <option value="setMedium">Medium</option>
      <option value="setHard">Hard</option>
    </select>
  </>
  );
}
// export component
export default Difficulty;