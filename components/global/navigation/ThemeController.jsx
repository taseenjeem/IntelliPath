"use client";

import { ThemeContext } from "@/providers/ThemProvider";
import { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeController = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "light" ? (
        <button title="Turn on dark mode" onClick={() => changeTheme("sunset")}>
          <MdDarkMode className="size-5" />
        </button>
      ) : (
        <button title="Turn on light mode" onClick={() => changeTheme("light")}>
          <MdLightMode className="size-5" />
        </button>
      )}
    </>
  );
};

export default ThemeController;
