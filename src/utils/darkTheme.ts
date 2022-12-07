import type { Dispatch, SetStateAction } from "react";

export const setDefaultTheme = () => {
  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } else return null;
};

export const setDefaultThemeState = () => {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark");
  }
};

const setLightTheme = () => {
  if (typeof window !== "undefined") {
    localStorage.theme = "light";
  } else return null;
};

const setDarkTheme = () => {
  if (typeof window !== "undefined") {
    localStorage.theme = "dark";
  } else return null;
};

export const toggleTheme = (
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>
) => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    setLightTheme();
    setDefaultTheme();
    setDarkMode(false);
  } else {
    setDarkTheme();
    setDefaultTheme();
    setDarkMode(true);
  }
};
