import React from 'react';
import GameItem from './GameItem';


const GameList = ({games, title}) => {
  return (
    <div className='wow'>
      <h1 style={{color: 'white', textAlign: 'center'}}> {title} </h1>
      {games.map((game) => 
        <GameItem game={game} key={game.id}/>
      )}  
    </div>
  )
}

export default GameList;
