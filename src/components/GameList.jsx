import React from 'react';

const GameList = ({ games }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow-md rounded-md hover:shadow-lg transition"
        >
          <h2 className="font-bold text-lg">{game.title}</h2>
          <p><strong>Platform:</strong> {game.platform}</p>
          <p><strong>Score:</strong> {game.score}</p>
          <p><strong>Genre:</strong> {game.genre}</p>
          <p><strong>Editor's Choice:</strong> {game.editors_choice}</p>
        </div>
      ))}
    </div>
  );
};

export default GameList;
