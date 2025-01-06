import React from 'react';

const SortFilter = ({ onSort }) => {
  const platforms = ['PC', 'Xbox 360', 'PlayStation Vita', 'PlayStation 3', 'iPad', 'Macintosh', 'iPhone', 'Nintendo DS', 'Nintendo 3DS', 'Android'];

  return (
    <div className="mb-4">
      <select
        className="p-2 border rounded-md"
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="">Filter by Platform</option>
        {platforms.map((platform, index) => (
          <option key={index} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;
