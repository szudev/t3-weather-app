import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="mb-4 flex @2xl:mb-0">
      <input
        className="rounded-l-2xl border border-youtube-light-border-color bg-transparent py-2 pl-3 pr-2 text-xl capitalize text-black placeholder:lowercase focus:outline-1 dark:border-youtube-dark-border-color dark:text-white dark:focus:outline-none"
        placeholder="Search..."
      ></input>
      <button className="flex cursor-pointer items-center rounded-r-2xl border-l-0 border-t border-r border-b border-youtube-light-border-color bg-youtube-light-button-color px-3 py-2 dark:border-youtube-dark-border-color dark:bg-youtube-dark-button-color">
        <AiOutlineSearch className="text-black dark:text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
