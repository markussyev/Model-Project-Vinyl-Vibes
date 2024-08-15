import React from "react";
import ArtistCard from "./components/ArtistCard";

function Favorites({ favorites, setFavorites, artists }) {
  console.log('FAVS FAVS', favorites);

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
    <div className="flex flex-col mt-20 h-screen gap-10 bg-white dark:bg-darkgray-default">
      <div className="flex gap-10 pb-40">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-lightcoral-default">
          My
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-lightgray-default">Favorites</h1>
      </div>
      {favorites
        // .filter((artist) => favorites.includes(artist.id))
        .map((artist, id) => (
          <ArtistCard
            key={id}
            artistTitle={artist.artistTitle}
            imgUrl={artist.imageUrl}
            liked={favorites.includes(artist.mbid)}
            handleSetLiked={() => handleSetLiked(artist)}
          />
        ))}
    </div>
  );
}

export default Favorites;
