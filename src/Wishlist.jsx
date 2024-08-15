import React, { useState } from "react";
import AlbumCard from "./components/AlbumCard";

function Wishlist({ wishlist }) {
  return (
    <div className="flex flex-col mt-20 h-screen gap-10 bg-white dark:bg-darkgray-default">
      <div className="flex gap-10 pb-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-lightcoral-default">
          My
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-lightgray-default">
          Wishlist
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
        {" "}
        {wishlist
          // .filter((album) => wishlist.includes(album.id))
          .map((album, id) => (
            <AlbumCard
              key={id}
              albumName={album.albumName}
              artistTitle={album.artistTitle}
              imgUrl={album.imageUrl}
              year={album.year}
              genre={album.genre}
              inCollection={false}
              inWishlist={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Wishlist;
