import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const API_BASE_URL = 'http://localhost:3001';

  useEffect(() => {
    fetch(`${API_BASE_URL}/movies`) // Ensure this matches your server URL and port
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []); // The empty array ensures this effect runs once on mount

  return (
    <div className="App">
      <h1>Movie List</h1>
      <li>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </li>
    </div>
  );
}

export default App;

