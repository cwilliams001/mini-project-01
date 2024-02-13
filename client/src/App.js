import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import AddMovieForm from './Components/AddMovieForm';
import MovieItem from './Components/MovieItem';
import MovieInfoPanel from './Components/MovieInfoPanel';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_BASE_URL = 'http://localhost:3001';

  useEffect(() => {
    fetch(`${API_BASE_URL}/movies`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  }

  const filteredMovies = movies.filter((movie) => {
  if (filter === 'watched') return movie.watched && movie.title.toLowerCase().includes(searchQuery);
  if (filter === 'toWatch') return !movie.watched && movie.title.toLowerCase().includes(searchQuery);
  return movie.title.toLowerCase().includes(searchQuery);
});

  const onAddMovie = (title) => {
    fetch(`${API_BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
      .then(response => response.json())
      .then(data => {
        setMovies([...movies, data]);
      
      })
      .catch(error => console.error('Error adding movie: ', error));
  }
  
  const onDeleteMovie = (id) => {
    fetch(`${API_BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        setMovies(movies.filter((movie) => movie.id !== id));
      })
      .catch(error => console.error('Error deleting movie: ', error));
  }

  const onToggleWatched = (id, watched) => {
    fetch(`${API_BASE_URL}/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ watched })
    })
     .then(()=> {
      setMovies(movies.map(movie => movie.id === id ? {...movie, watched} : movie))
     })
      .catch(error => console.error('Error updating movie: ', error));
  }
  
  function showMovieInfo(movieId) {
  const movie = movies.find((m) => m.id === movieId);
  setSelectedMovie(movie);
}

  

return (
  <div className={`App max-w-2x1 mx-auto p-4 ${darkMode ? 'dark' : ''}`}>
    <h1 className=" bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                    text-3xl font-bold text-center mb-6">
        Movie List
      </h1>

    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex justify-center gap-4 mb-8">
      <SearchBar onSearch={handleSearch} />
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('watched')}>Watched</button>
      <button onClick={() => setFilter('toWatch')}>To Watch</button>
      <button onClick={() => setDarkMode(!darkMode)} 
      className="px-4 py-2 text-white font-bold rounded transition-colors
                 bg-gray-600 hover:bg-gray-500
                 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800">
        Toggle Dark Mode
      </button>
    </div>
    
    <AddMovieForm onAddMovie={onAddMovie} />
    <MovieInfoPanel movie={selectedMovie} onClose={() => setSelectedMovie(null)} />

    <ul className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 space-y-4">
      {filteredMovies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onDelete={onDeleteMovie}
          onToggleWatched={onToggleWatched}
          onShowInfo={showMovieInfo}
        />
        
      ))}
    </ul>
  </div>
);
      } 
export default App;