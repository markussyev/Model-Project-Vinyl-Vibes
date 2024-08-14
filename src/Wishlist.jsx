import React, { useState } from "react";
import AlbumCard from "./components/AlbumCard";

function Wishlist({ wishlist, albums }) {
  return (
    <div className="flex mt-20 h-screen gap-10 bg-white dark:bg-darkgray-default">
      <div className="flex gap-10">
        <h1 className="text-8xl text-lightcoral-default">My</h1>
        <h1 className="text-8xl dark:text-lightgray-default">Wishlist</h1>
        </div>
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
