import type { Dispatch, SetStateAction } from "react";
import { Tooltip } from "flowbite-react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { toggleTheme } from "../utils/darkTheme";
import SearchBar from "./SearchBar";

type HeaderProps = {
  darkMode: boolean | undefined;
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>;
};

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div className="grid min-h-min-h-header w-full grid-cols-3 items-center bg-white p-4 dark:bg-black">
      <div></div>
      <SearchBar />
      <div className="flex justify-end">
        <Tooltip content={darkMode ? "Lights" : "Shades"}>
          <button
            onClick={() => toggleTheme(setDarkMode)}
            className="flex rounded p-1 hover:bg-gray-400 hover:bg-opacity-40 dark:hover:bg-white dark:hover:bg-opacity-20"
          >
            {darkMode ? (
              <BsSunFill className="text-home-icons text-black dark:text-white " />
            ) : (
              <BsMoonFill className="text-home-icons text-black dark:text-white" />
            )}
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
