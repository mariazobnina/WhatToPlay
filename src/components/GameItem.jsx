import React from 'react';

const GameItem = (game) => {
  return (
    <div className="gameItem">
    <div className='gameTitle'>
      <h3> {game.game.title} </h3>
    </div>
    <div className='gameInfo'>
      <ul> <p className='someText'> Издатель:</p>{game.game.publisher} </ul> 
      <ul> <p className='someText'> Жанр:</p> {game.game.genre} </ul>
      <ul> <p className='someText'> Платформа:</p> {game.game.platform} </ul>
      <ul> <p className='someText'> Дата релиза:</p> {game.game.release_date} </ul>
      <ul> <a href = {game.game.game_url}> Ссылка </a> </ul>
      <ul> <p className='someText'> Краткое описание:</p> {game.game.short_description} </ul>
    </div>
  <img alt="" src={game.game.thumbnail}/>
  </div>
  )
}

export default GameItem;
