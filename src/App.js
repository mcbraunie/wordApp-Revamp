import Button from 'react-bootstrap/Button';
import './App.css';
import React, { useEffect, useState } from 'react';
import Difficulty from './assets/js/difficultySelectorMenu';
import {Header, Instructions} from './assets/js/staticContent'

// contains elements in main body
function Body() {
  return(
    <div className='main-body'>
      <Difficulty />
      <Instructions />
    </div>
  )
}


export default function App () {
  return (
      <div>
        <Header />
        <Body />
      </div>
      
  );
}

// export default App;