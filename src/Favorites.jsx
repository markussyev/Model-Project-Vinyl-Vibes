import React, { useState } from "react";
import ArtistCard from "./components/ArtistCard";

function Favorites({ favorites, artists }) {
  return (
    <div>
      <h1>Favorites</h1>
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
