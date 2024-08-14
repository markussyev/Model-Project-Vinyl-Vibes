import React, { useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { SearchIcon } from "./Icons";

const SearchBar = ({setResults}) => {

  const [input, setInput] = useState("");

  const fetchData = (value) => {

    const albumUrl = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=${import.meta.env.VITE_FMKEY}&format=json`;
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=${import.meta.env.VITE_FMKEY}&format=json`;
    
    Promise.all([
      fetch(albumUrl).then(response=> response.json()), 
      fetch(artistUrl).then(response=> response.json())]).then(([albumData, artistData]) => {
        const albums = albumData.results.albummatches.album || [];
        const artists = artistData.results.artistmatches.artist || [];
        const results = [...albums.map(album => ({
          type: 'album',
          albumName: album.name,
          artistTitle: album.artist,
          imageUrl: album.image[2]['#text'],
          year: '',
          genre: '',
          mbid: album.mbid,
          inCollection: false,
          inWishlist: false,
        })), 
        ...artists.map(artist => ({
          type: 'artist',
          artistTitle: artist.name,
          mbid: artist.mbid,
          imageUrl: artist.image[2]['#text'],
        }))
      ];
        
      
        setResults(results);
      }).catch((error) => {
        console.error('Error:', error);
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
        className="border-none focus:outline-none h-full bg-transparent ml-5 dark:text-lightgray-default "
        placeholder="Search for Vinyls..."
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
      
    </div>
    </div>
  );
};

export default SearchBar;
