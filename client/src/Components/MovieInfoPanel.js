import React from 'react';

function MovieInfoPanel({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <p>{movie.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
        <p>Release Date: {movie.release_date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MovieInfoPanel;
