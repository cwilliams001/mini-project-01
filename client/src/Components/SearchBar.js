function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      className="shadow border border-gray-300 dark:border-gray-600 rounded py-2 px-3
                 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2
                 focus:ring-blue-500 dark:focus:ring-blue-300"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;