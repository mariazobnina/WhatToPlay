import React, {useEffect, useState} from "react";
import '../src/styles/app.css'
import GameList from "./components/GameList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
const axios = require("axios");

function App() {
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])

  function myFoo () {
  
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': 'ea96c416ffmsha111d9756ba93a6p1dc2eajsn49e28bfd7da6',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data.map((game) => game.platform));
      setGames(response.data)
      setFilteredGames(response.data)
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => myFoo(), [])
  

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  
  const sortGames = (sort) => {
    setSelectedSort(sort)
    setFilteredGames([...games].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const sortGamesGenre = (sort) => {
    setSelectedSort(sort)
    setFilteredGames([...games].filter((elem) => elem.genre === sort))
  }

  const sortGamesPlatform = (sort) => {
    setSelectedSort(sort)
    setFilteredGames([...games].filter((elem) => elem.platform === sort))
  }
  
  const searchGames = (e) => {
    setSearchQuery(e.target.value)
    setFilteredGames(games.filter((elem) => {      
      return (elem.title).toLowerCase().includes((e.target.value).toLowerCase())
    }))
  }

  return (
    <div className="App">
      <img alt ='' className="imgBg" src="/modern-futuristic-sci-fi-background.jpg"/>
        <div className="wow"> 
          <MyInput
          placeholder='Поиск по названию'
          value={searchQuery}
          onChange={searchGames}
          />
          <MySelect
          value={selectedSort}
          onChange={sortGames}
          defaultValue='Сортировка по'
          options={[
              {value: 'title', name: 'По названию'},
              {value: 'release_date', name: 'По дате'},
            ]}
            />
              <MySelect
          value={selectedSort}
          onChange={sortGamesGenre}
          defaultValue='Выберете жанр'
          options={[
              {value: 'MMOARPG', name: 'MMOARPG'},
              {value: 'MMORPG', name: 'MMORPG'},
              {value: 'Strategy', name: 'Strategy'},
              {value: 'Card Game', name: 'Card Game'},
              {value: 'Fighting', name: 'Fighting'},
              {value: 'Shooter', name: 'Shooter'},
              {value: 'Battle Royale', name: 'Battle Royale'},
              {value: 'Action RPG', name: 'Action RPG'},
              {value: 'MOBA', name: 'MOBA'},

            ]}
            />

<MySelect
          value={selectedSort}
          onChange={sortGamesPlatform}
          defaultValue='Выберете платформу'
          options={[
              {value: 'PC (Windows)', name: 'PC (Windows)'},
              {value: 'Web Browser', name: 'Web Browser'},
            ]}
            />
        </div>

      <GameList games={filteredGames} title='Список бесплатнных игр'/>


    </div>
  );
}

export default App;
