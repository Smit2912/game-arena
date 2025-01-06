import React, { useEffect, useState } from 'react';
import GameList from './components/GameList';
import SearchBar from './components/SearchBar';
import SortFilter from './components/SortFilter';
import { fetchGames } from './services/apiService';

const App = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetchGames().then(data => {
      setGames(data);
      setFilteredGames(data);
    }).catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const results = games.filter(game =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(results);
  };

  const handleSort = (platform) => {
    const sortedGames = games.filter(game => game.platform === platform);
    setFilteredGames(sortedGames);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Game Arena</h1>
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
        <SortFilter onSort={handleSort} />
      </div>
      <GameList games={filteredGames} />
    </div>
  );
};

export default App;
