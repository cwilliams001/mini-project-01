function MovieItem({ movie, onDelete, onToggleWatched, onShowInfo }) {
  return (
    <li className="flex justify-between items-center bg-white dark:bg-gray-700 shadow px-4 py-2 rounded-lg mb-2">
      <span onClick={() => onShowInfo(movie.id)} className="cursor-pointer">
        {movie.title}
      </span>
      {movie.title} - {movie.watched ? 'Watched' : 'To Watched'}
      <button onClick={() => onToggleWatched(movie.id, !movie.watched)} className="text-sm bg-green-400 hover:bg-green-500 text-white py-1 px-3 rounded focus:outline-none">
        Toggle Watched</button>
      <button onClick={() => onDelete(movie.id)} className="text-sm bg-red-400 hover:bg-red-500 text-white py-1 px-3 rounded ml-2">
        Delete</button>
    </li>
  )
}

export default MovieItem;