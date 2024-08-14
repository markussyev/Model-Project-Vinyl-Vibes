import React, { useState } from "react";
import ArtistCard from "./components/ArtistCard";

function Favorites({ favorites, setFavorites, artists }) {

  const handleSetLiked = (artist) => {
    setFavorites((prevFavorites) => {
    if (prevFavorites.includes(artist.id)) {
      return prevFavorites.filter((id) => id !== artist.id);
    } else {
      return [...prevFavorites, artist.id];
    }
  });
};

  return (
    <div className="flex mt-20 h-screen gap-10 bg-white dark:bg-darkgray-default">
     <div className="flex gap-10">
      <h1 className="text-8xl text-lightcoral-default">My</h1>
      <h1 className="text-8xl dark:text-lightgray-default">Favorites</h1>
      </div> 
      {artists
        .filter((artist) => favorites.includes(artist.id))
        .map((artist, id) => (
          <ArtistCard
            key={id}
            artistTitle={artist.name}
            imgUrl={artist.imageUrl}
            liked={favorites.includes(artist.id)}
            handleSetLiked={() => handleSetLiked(artist)}
          />
        ))}
    </div>
  );
}

export default Favorites;
