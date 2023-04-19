const Search = ({ changeHandler, fetchData }) => {
  return (
    <div className="flex justify-center gap-5 ">
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Search City"
        className="placeholder:text-slate-500 pl-2 py-1 focus:outline-none focus:ring ring-blue-700 rounded-xl"
      />
      <button
        type="submit"
        onClick={fetchData}
        className="text-white bg-gray-700 rounded-xl px-3 py-1 border-solid border-4 border-sky-800 hover:bg-gray-600"
      >
        Search
      </button>
    </div>
  );
};
export default Search;
