import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Welcome to TieBreaker</h1>
        <p>Tie Breaker was created during the pandemic to facilitate tabletop gaming with friends. It features a chat system, board game functionalities such as dice rolling, player selection, scratchpad, and a point-keeping system. No signup is required.</p>

        <h2> Getting Started </h2>
    
          <ul className='gamerules'>
            <li>Enter the app</li>
            <li>Make a name for yourself</li>
            <li>Room name/ password depends on new or existing:
                <ul>
                  <li>New rooms will enter the room name and password to be created</li>
                  <li>Existing rooms use existing name and password</li>
                </ul>
            </li>
            <li>Click reconnecting user to retrieve a gamestate if window was lost</li>
            <li>Game Rooms are deleted after 5 minutes if no user is in the room</li>
            <li>Currently there is no save state. You have been warned.</li>
          </ul> 
        <a
          className="App-link"
          href="https://tie-breaker-1d45a4631458.herokuapp.com/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          FOR ALL THE MARBLES
        </a>
      </header>
    </div>
  );
}

export default App;