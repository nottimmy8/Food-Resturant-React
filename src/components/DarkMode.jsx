import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <div>
        <MdDarkMode
          size={30}
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `}
        />

        <MdOutlineDarkMode
          size={30}
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
        />
      </div>
    </div>
  );
}

export default DarkMode;
