import React from 'react';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
      <img
        src="https://media.giphy.com/media/WvuTFk2IN7jxoLVDkP/giphy.gif"
        alt="Football gif"
      />
      <Link to="/leagues"><button type="button">Show the List</button></Link>
    </div>
  );
}
