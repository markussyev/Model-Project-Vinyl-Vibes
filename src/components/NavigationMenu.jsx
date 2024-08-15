import React from "react";
import { useTheme } from "../ThemeContext";
import { LogoRegular, LogoDarkMode } from "./Icons";
import { Link, useRoute } from "wouter";
import ToggleSwitch from "./ToggleSwitch";


const NavigationMenu = () => {
  const { darkMode, themeStyles} = useTheme();

  const [homeActive] = useRoute("/Home");
  const [collectionActive] = useRoute("/Collection");
  const [wishlistActive] = useRoute("/Wishlist");
  const [favoritesActive] = useRoute("/Favorites");

  const activeClass = themeStyles.classActive;

  return (
    <div className=" h-screen w-max flex flex-col justify-between p-5 bg-seasalt-default dark:bg-darkgray-default">
      <div className="logo flex item-center m-5 mb-10">
        <Link href="#">{darkMode ? <LogoDarkMode /> : <LogoRegular />}</Link>
      </div>
      <div className="links flex flex-col items-start">
        <Link
          href="/Home"
          className={`text-lg text-darkgray-default  hover:text-lightcoral-default dark:text-lightgray-default dark:hover:text-lightcoral-default ${homeActive ? activeClass : ''}`}
     >
          Home
        </Link>
        <Link
          href="/Collection"
          className={`text-lg text-darkgray-default hover:text-lightcoral-default dark:text-lightgray-default dark:hover:text-lightcoral-default ${collectionActive ? activeClass : ''}`}
        >
          Collection
        </Link>
        <Link
          href="/Wishlist"
          className={`text-lg text-darkgray-default  hover:text-lightcoral-default dark:text-lightgray-default dark:hover:text-lightcoral-default ${wishlistActive ? activeClass : ''}`}
        >
          Wishlist
        </Link>
        <Link
          href="/Favorites"
          className={`text-lg text-darkgray-default hover:text-lightcoral-default dark:text-lightgray-default dark:hover:text-lightcoral-default ${favoritesActive ? activeClass : ''}`}
        >
          Favorites
        </Link>
      </div>

      <div className="flex flex-col">
      <div> <ToggleSwitch /> </div> 
      
      </div>
    </div>
  );
};

export default NavigationMenu;
