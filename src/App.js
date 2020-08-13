import React from 'react';
import './App.css';
import Game from './components/game/Game'
import jays from './assets/images/bluejay.jpg'
import cards from './assets/images/cardinal.jpg'
import pups from './assets/images/hound.jpg'
import buns from './assets/images/rabbit.jpg'


function App(props) {
  const bluejays = {
      name: "Blaming Bluejays",
      logoSrc: jays
  }
  const cardinals = {
      name: "Captivating Cardinals",
      logoSrc: cards
  }
  const bunnies = {
      name: "Bouncing Bunnies",
      logoSrc: buns
  }
  const hounds = {
      name: "Hammering Hounds",
      logoSrc: pups
  }

  return (
      <div className="App">
          <Game
              venue="Stadium 251"
              homeTeam={bluejays}
              visitingTeam={cardinals}
          />
          <Game
              venue="Upstairs 78 Arena"
              homeTeam={bunnies}
              visitingTeam={hounds} />
      </div>
  )
}

export default App;
