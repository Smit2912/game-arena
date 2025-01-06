import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search games..."
      className="p-2 border rounded-md w-full mb-4"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
