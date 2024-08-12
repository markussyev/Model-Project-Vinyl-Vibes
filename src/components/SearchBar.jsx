import React, { useState } from "react";
import { SearchIcon } from "./Icons";
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    // fetch(
    //   "https://jsonplaceholder.typicode.com/users"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const results = json.filter((user) => {
    //         return value && user && user.name.toLowerCase().includes(value);
    //     })
    //     setResults(results)
    //   })
    fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=${import.meta.env.VITE_FMKEY}&format=json`, {
      method: 'GET', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
  })
      .then((response) => response.json()).then((json) => {
        console.log(json);
        const albumResults = json.results.albummatches.album.map(album => ({
          albumName: album.name,
          artistName: album.artist,
          imgUrl: album.image[2]['#text'],
          inCollection: false,
          inWishlist: false,
          }
        ));
        setResults(albumResults);
      });
  };

  const debouncedFetchData = useDebouncedCallback((value) => {
    fetchData(value);
  }, 1000);

  const handleChange = (value) => {
    setInput(value);
    debouncedFetchData(value);
  };

// console.log (import.meta.env.VITE_FMKEY)
  return (
    <div className="relative">
    <div className="input-wrapper flex items-center border-solid border-2 border-darkgray-lighter p-1 rounded-2xl space-x-5">
      <div className="ml-3">
        <SearchIcon />
      </div>
      <input
        className="border-none focus:outline-none h-full bg-transparent ml-5 "
        placeholder="Search for Vinyls..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
    </div>
  );
};

export default SearchBar;
