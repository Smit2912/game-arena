export const fetchGames = async () => {
  try {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
    const data = await response.json();
    
    // Skip the first object and start from the second object (index 1)
    return data.slice(1); // Skip the first item and return the rest
  } catch (error) {
    console.error('Error fetching games:', error);
    return []; // Return an empty array in case of an error
  }
};
