import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "../ThemeContext";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultsList";

const TopBar = ({ user, onSignOut, onEditProfile }) => {
  const { darkMode, themeStyles } = useTheme();
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [favorites, setFavorites] = useState([]);
  const resultsRef = useRef(null);

  const handleSearch = (searchResults) => {
    setResults(searchResults);
    setShowResults(true);
  };

  const handleAddToCollection = (albumId) => {
    setCollection((prevCollection) => {
      if (prevCollection.includes(albumId)) {
        return prevCollection.filter((id) => id !== albumId);
      } else {
        return [...prevCollection, albumId];
      }
    });
  };

    const handleAddToWishlist = (albumId) => {
      setWishlist((prevWishlist) => {
        if (prevWishlist.includes(albumId)) {
          return prevWishlist.filter((id) => id !== albumId);
        } else {
          return [...prevWishlist, albumId];
        }
      });
    };

    const handleSetLiked = (artistId) => {
setFavorites((prevFavorites) => {
  if (prevFavorites.includes(artistId)) {
    return prevFavorites.filter((id) => id !== artistId);
  } else {
    return [...prevFavorites, artistId];
    };
  });
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="top-bar flex fixed bg-white shadow-inner dark:bg-darkgray-default w-full">
      <div className="search-bar flex items-center w-full relative">
        <SearchBar setResults={handleSearch} />
        {showResults && results.length > 0 && (
          <div
            ref={resultsRef}
            className="results-dropdown flex absolute top-full left-0 w-full shadow-lg bg-white  dark:bg-darkgray-light border border-darkgray-lighter rounded-lg  z-10 overflow-y-auto "
          >
            <SearchResultList results={results}
            onAddToCollection={handleAddToCollection}
            onAddToWishlist={handleAddToWishlist}
            onSetLiked={handleSetLiked}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
