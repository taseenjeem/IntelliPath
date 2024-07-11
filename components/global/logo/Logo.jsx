"use client";
import { useContext } from "react";
import darkLogo from "/public/assets/logo/IntelliPath-dark-mode-logo.png";
import lightLogo from "/public/assets/logo/IntelliPath-light-mode-logo.png";
import { ThemeContext } from "@/providers/ThemProvider";
import Image from "next/image";

const Logo = ({ navbarMode, formMode, footerMode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Image
        className={
          (navbarMode && "max-w-32") ||
          (formMode && "max-w-48 mx-auto") ||
          (footerMode && "max-w-48")
        }
        src={theme === "winter" ? lightLogo : darkLogo}
        alt="IntelliPath Logo"
      />
    </>
  );
};

export default Logo;
