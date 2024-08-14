import React, { useState } from "react";
import AlbumCard from "./components/AlbumCard";

function Collection({ collection }) {
  return (
    <div className="flex flex-col mt-20 h-screen gap-10 bg-white dark:bg-darkgray-default">
      <div className="flex gap-10 pb-40">
        <h1 className="text-8xl text-lightcoral-default">My</h1>
        <h1 className="text-8xl dark:text-lightgray-default">Collection</h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {" "}
        {collection
          // .filter((album) => collection.includes(album.id))
          .map((album, id) => (
            <AlbumCard
              key={id}
              albumName={album.albumName}
              artistTitle={album.artistTitle}
              imgUrl={album.imageUrl}
              year={album.year}
              genre={album.genre}
              inCollection={true}
              inWishlist={false}
            />
          ))}
      </div>
    </div>
  );
}

export default Collection;
