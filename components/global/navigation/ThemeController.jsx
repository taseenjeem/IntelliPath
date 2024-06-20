"use client";

import { ThemeContext } from "@/providers/ThemProvider";
import { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeController = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => changeTheme("sunset")}>
          <MdDarkMode className="size-6" />
        </button>
      ) : (
        <button onClick={() => changeTheme("light")}>
          <MdLightMode className="size-6" />
        </button>
      )}
    </>
  );
};

export default ThemeController;
