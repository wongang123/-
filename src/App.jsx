import React, { useState } from 'react';
import { searchGames } from './services/game.service';
import GameCard from './components/GameCard';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [games, setGames] = useState([]);

  const handleSearch = async () => {
    const results = await searchGames(searchText);
    setGames(results);
  };

  return (
    <div>
      <h1>Game Search</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;
