"use client";
import { ThemeContext } from "@/providers/ThemProvider";
import { useContext } from "react";

const ThemeChanger = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div data-theme={theme}>{children}</div>;
};

export default ThemeChanger;
