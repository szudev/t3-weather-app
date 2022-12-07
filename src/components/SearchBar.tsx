import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex max-w-xs place-self-center">
      <input
        className="rounded-l-2xl border border-youtube-light-border-color bg-transparent p-2 text-xl dark:border-youtube-dark-border-color dark:text-white"
        placeholder="Buscar"
      ></input>
      <button className="flex cursor-pointer items-center rounded-r-2xl border-l-0 border-t border-r border-b border-youtube-light-border-color bg-youtube-light-button-color p-2 dark:border-youtube-dark-border-color dark:bg-youtube-dark-button-color">
        <AiOutlineSearch className="text-2xl text-black dark:text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
