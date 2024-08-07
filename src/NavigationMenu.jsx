import React from "react";
import { useTheme } from "./stories/ThemeContext";
import { LogoRegular, LogoDarkMode } from "./stories/assets/Icons";

const NavigationMenu = ({isLoggedIn, user, onSignout, onEditProfile}) => {

    const { darkMode, themeStyles } = useTheme();

    return (
        <div className="h-screen flex flex-col items-start space-x-5">
            <div className="logo mb-10 hover:no">
        <a href="#">{darkMode ? <LogoDarkMode /> : <LogoRegular />}</a>
            </div>
        <a href="#" className="text-lg text-darkgray-default hover:text-lightcoral-default active:text-darkgray-default  active:line-through active:decoration-4 active:decoration-lightcoral-default dark:text-lightgray-default">
            Home
        </a>
        <a href="#" className="text-lg text-darkgray-default hover:text-lightcoral-default active:text-darkgray-default active:line-through active:decoration-4 active:decoration-lightcoral-default dark:text-lightgray-default">
            Collection
        </a>
        <a href="#" className="text-lg text-darkgray-  hover:text-lightcoral-default active:text-darkgray-default active:line-through active:decoration-4 active:decoration-lightcoral-default dark:text-lightgray-default">
            Wishlist
        </a>
        <a href="#" className="text-lg text-darkgray-default hover:text-lightcoral-default active:text-darkgray-default active:line-through active:decoration-4 active:decoration-lightcoral-default dark:text-lightgray-default">
            Favorites
        </a>
        </div>
    );
    }

    export default NavigationMenu;