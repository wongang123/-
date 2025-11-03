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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Game Search</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-l-md p-2 w-full"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white rounded-r-md p-2">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;
