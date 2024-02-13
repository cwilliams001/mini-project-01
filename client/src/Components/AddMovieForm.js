import React, { useState } from 'react';

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddMovie(title);
    setTitle('');
}

   return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new movie..."
        className="shadow border border-gray-300 dark:border-gray-600 rounded py-2 px-3 text-gray-700
                   dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500
                   dark:focus:ring-blue-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
      >
        Add Movie
        </button>
    </form>
  );
}

export default AddMovieForm;