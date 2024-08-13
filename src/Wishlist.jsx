import React, { useState } from "react";
import AlbumCard from "./components/AlbumCard";

function Wishlist({ wishlist, albums }) {
  return (
    <div>
      <h1>Wishlist</h1>
      {albums
        .filter((album) => wishlist.includes(album.id))
        .map((album, id) => (
          <AlbumCard
            key={id}
            albumName={album.name}
            artistTitle={album.artist}
            imgUrl={album.imageUrl}
            year={album.year}
            genre={album.genre}
            inCollection={false}
            inWishlist={true}
          />
        ))}
    </div>
  );
}

export default Wishlist;
