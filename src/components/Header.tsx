import type { Dispatch, SetStateAction } from "react";
import { Tooltip } from "flowbite-react";
import { BsSunFill, BsMoonFill, BsFillGeoAltFill } from "react-icons/bs";
import { toggleTheme } from "../utils/darkTheme";
import SearchBar from "./SearchBar";

type HeaderProps = {
  darkMode: boolean | undefined;
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>;
};

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <div className="flex min-h-min-h-header w-full flex-col flex-wrap items-center gap-4 bg-white pt-4 dark:bg-black">
      <div className="flex gap-2 self-end">
        <Tooltip content="Geolocation">
          <button
            onClick={() => {
              console.log("Geolocation clicked!");
            }}
            className="flex rounded p-1 hover:bg-gray-400 hover:bg-opacity-40 dark:hover:bg-white dark:hover:bg-opacity-20"
          >
            <BsFillGeoAltFill className="text-home-icons text-black dark:text-white" />
          </button>
        </Tooltip>
        <Tooltip content={darkMode ? "Light" : "Dark"}>
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
      <SearchBar />
    </div>
  );
};

export default Header;
