import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultsList";

const TopBar =({user, onSignOut, onEditProfile }) => {

    const { darkMode, themeStyles } = useTheme();
    const [results, setResults] = useState ([]);

return (
    <div className="top-bar flex fixed bg-white shadow-inner dark:bg-darkgray-default z-20">
<div className="search-bar flex items-center w-full max-w-2xl">
    <SearchBar setResults={setResults}/>
</div>
{results.length > 0 && (
    <div className="results-dropdown absolute w-screen overflow-visible mt-10 drop-shadow-lg bg-white  dark:bg-darkgray-light border border-darkgray-lighter rounded-lg shadow-lg z-10 ">
       <div className="flex m-10"><SearchResultList results={results} /></div> 
    </div>
)}
    </div>

)
}

export default TopBar