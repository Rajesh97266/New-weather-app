import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="flex justify-between items-center container mx-auto h-16 px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo.png" : "/logo2.png"}
            alt="Klimate logo"
            className="h-14"
          />
        </Link>
        <div className="flex gap-4">
          <span>CitySearch</span>
          <span
            className={`cursor-pointer transition-transform duration-500 ${
              theme === "dark" ? "rotate-180" : "rotate-0"
            } `}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-6 w-6 rotate-0 text-yellow-500 transition-all " />
            ) : (
              <Moon className="h-6 w-6 rotate-0 text-blue-500 transition-all" />
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
