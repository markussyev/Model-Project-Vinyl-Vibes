import React, { useState } from "react";
import AlbumCard from "./components/AlbumCard";

function Collection({ collection, albums }) {
  return (
    <div>
      <h1>Collection</h1>
      {albums
        .filter((album) => collection.includes(album.id))
        .map((album, id) => (
          <AlbumCard
            key={id}
            albumName={album.name}
            artistTitle={album.artist}
            imgUrl={album.imageUrl}
            year={album.year}
            genre={album.genre}
            inCollection={true}
            inWishlist={false}
          />
        ))}
    </div>
  );
}

export default Collection;
