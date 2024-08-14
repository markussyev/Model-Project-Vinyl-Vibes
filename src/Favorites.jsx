import React, { useState } from "react";
import ArtistCard from "./components/ArtistCard";

function Favorites({ favorites, artists }) {
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
            liked={true}
            setLiked={() => {}}
          />
        ))}
    </div>
  );
}

export default Favorites;
